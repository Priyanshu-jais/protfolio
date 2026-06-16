import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}=+*^?#~";

export function ScrambleText({
  text,
  className = "",
  trigger = "hover",
}: {
  text: string;
  className?: string;
  trigger?: "hover" | "mount";
}) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);
  const isAnimatingRef = useRef(false);

  const scramble = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    let iteration = 0;
    const totalIterations = text.length * 3;

    const update = () => {
      setDisplay(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration / 3) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      iteration++;
      if (iteration <= totalIterations) {
        frameRef.current = requestAnimationFrame(update);
      } else {
        setDisplay(text);
        isAnimatingRef.current = false;
      }
    };

    frameRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    if (trigger === "mount") {
      const timer = setTimeout(scramble, 400);
      return () => {
        clearTimeout(timer);
        cancelAnimationFrame(frameRef.current);
      };
    }
    return () => cancelAnimationFrame(frameRef.current);
  }, [trigger]);

  return (
    <span
      className={className}
      onMouseEnter={trigger === "hover" ? scramble : undefined}
    >
      {display}
    </span>
  );
}
