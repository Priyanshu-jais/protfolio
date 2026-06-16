import { useEffect, useRef, useState } from "react";
import doraemonAsset from "@/assets/doraemon-scared-run.png.asset.json";
import mouse from "@/assets/mouse.png";

const SCARED_LINES = [
  "Eeek! A mouse! 😱",
  "Go away!! 🐭",
  "Help meee! 💨",
  "Not the mouse! 😭",
  "Aaaah! 🏃",
  "Stay back!! 😨",
  "My pocket!! 🎒",
  "Nobita!! Help!! 🆘",
];

type Pos = { x: number; y: number };

// Keep Doraemon running only along the right side / corner of the screen.
function rightSideTarget(): Pos {
  const w = typeof window !== "undefined" ? window.innerWidth : 1200;
  const h = typeof window !== "undefined" ? window.innerHeight : 800;
  const topMargin = 160;
  const bottomMargin = 120;
  return {
    x: w - 120, // pinned to the right edge
    y: topMargin + Math.random() * Math.max(0, h - topMargin - bottomMargin),
  };
}

export function Mascot() {
  const [doraPos, setDoraPos] = useState<Pos>({ x: 1080, y: 300 });
  const [mousePos, setMousePos] = useState<Pos>({ x: 1080, y: 360 });
  const [facing, setFacing] = useState<1 | -1>(1);
  const [line, setLine] = useState(SCARED_LINES[0]);
  const [isPopping, setIsPopping] = useState(false);
  const prevY = useRef(300);

  useEffect(() => {
    setDoraPos(rightSideTarget());
  }, []);

  useEffect(() => {
    const move = () => {
      const next = rightSideTarget();
      // face up or down based on vertical movement
      setFacing(next.y >= prevY.current ? 1 : -1);
      prevY.current = next.y;
      setDoraPos(next);
      setLine(SCARED_LINES[Math.floor(Math.random() * SCARED_LINES.length)]);
      setIsPopping(true);
      setTimeout(() => setIsPopping(false), 600);
    };
    const id = setInterval(move, 2600);
    return () => clearInterval(id);
  }, []);

  // mouse chases from just below Doraemon
  useEffect(() => {
    const id = setTimeout(() => {
      setMousePos({ x: doraPos.x, y: doraPos.y + 80 });
    }, 600);
    return () => clearTimeout(id);
  }, [doraPos]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden overflow-hidden sm:block">
      {/* Doraemon - confined to the right side */}
      <div
        className="absolute left-0 top-0 will-change-transform"
        style={{
          transform: `translate3d(${doraPos.x}px, ${doraPos.y}px, 0)`,
          transition: "transform 2.4s cubic-bezier(0.45, 0, 0.25, 1)",
        }}
      >
        <div className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1">
          <div
            key={line}
            className={`glass max-w-[11rem] rounded-2xl px-3 py-1.5 text-center text-xs font-semibold shadow-soft ${isPopping ? "animate-pocket-pop" : ""}`}
          >
            {line}
          </div>
          <div>
            <img
              src={doraemonAsset.url}
              alt="Scared Doraemon running"
              width={400}
              height={400}
              loading="lazy"
              className="size-20 animate-mascot-run select-none drop-shadow-[0_12px_24px_rgba(56,135,255,0.45)] sm:size-24"
            />
          </div>
        </div>
      </div>

      {/* Chasing mouse */}
      <div
        className="absolute left-0 top-0 will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          transition: "transform 2.4s cubic-bezier(0.45, 0, 0.25, 1) 0.25s",
        }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <img
            src={mouse}
            alt="Mouse chasing Doraemon"
            width={1024}
            height={1024}
            loading="lazy"
            className="size-10 animate-mouse-scurry select-none drop-shadow-[0_6px_12px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>
    </div>
  );
}
