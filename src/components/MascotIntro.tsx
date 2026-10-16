import { useEffect, useId, useState } from "react";
import { tickerLabel } from "../config";
import { leadMascot, mascots, replayOrder } from "../mascots";

type Phase = "cue" | "replay" | "roster" | "exit";

const fanOrder = [0, 5, 7, 3, 2, 4, 6, 1, 8, 9].map((index) => mascots[index]);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function MascotIntro({ onDone }: { onDone: () => void }) {
  const titleId = useId();
  const [reduced] = useState(prefersReducedMotion);
  const [phase, setPhase] = useState<Phase>(reduced ? "roster" : "cue");
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onDone();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onDone]);

  useEffect(() => {
    if (reduced) {
      const timer = window.setTimeout(onDone, 5200);
      return () => window.clearTimeout(timer);
    }
    if (phase === "cue") {
      const timer = window.setTimeout(() => setPhase("replay"), 650);
      return () => window.clearTimeout(timer);
    }
    if (phase === "replay") {
      const hold = [150, 150, 160, 180, 200, 240, 300, 380, 480, 720][frame] ?? 220;
      const timer = window.setTimeout(() => {
        if (frame < replayOrder.length - 1) setFrame((current) => current + 1);
        else setPhase("roster");
      }, hold);
      return () => window.clearTimeout(timer);
    }
    if (phase === "roster") {
      const timer = window.setTimeout(() => setPhase("exit"), 1900);
      return () => window.clearTimeout(timer);
    }
    const timer = window.setTimeout(onDone, 640);
    return () => window.clearTimeout(timer);
  }, [frame, onDone, phase, reduced]);

  const current = replayOrder[frame] ?? leadMascot;
  const showFan = phase === "roster" || phase === "exit" || reduced;

  return (
    <div
      className={`intro${phase === "exit" ? " is-exit" : ""}`}
      data-phase={showFan ? "roster" : phase}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="intro-lights" aria-hidden="true" />
      <div className="intro-top">
        <p className="intro-kicker">Instant replay · ten angles · one call</p>
        <button type="button" className="intro-skip" onClick={onDone}>
          {reduced ? "Enter the court" : "Skip replay"}
        </button>
      </div>

      <div className="intro-stage">
        <div className={`intro-name${showFan ? " is-on" : ""}`}>
          <p>The main character</p>
          <h2 id={titleId}>THE POINTER</h2>
          <p>Jersey 8 · one fearless finger · {tickerLabel()}</p>
        </div>

        {showFan ? (
          <div className="intro-fan" aria-hidden="true">
            {fanOrder.map((mascot, index) => {
              const offset = index - 4;
              const lead = mascot.id === "03";
              return (
                <img
                  key={mascot.id}
                  src={mascot.src}
                  alt=""
                  style={{
                    transform: `rotate(${offset * 5}deg) translateY(${Math.abs(offset) * 12}px) scale(${lead ? 1.16 : 0.94})`,
                    zIndex: 12 - Math.abs(offset),
                  }}
                />
              );
            })}
          </div>
        ) : (
          <div className="intro-gate">
            <img key={current.id} src={current.src} alt="" />
            <p className="intro-angle">
              Angle {String(frame + 1).padStart(2, "0")} / 10
            </p>
          </div>
        )}
      </div>

      <ol className="intro-strip">
        {replayOrder.map((mascot, index) => (
          <li key={mascot.id} className={index === frame || showFan ? "is-on" : undefined}>
            <img src={mascot.src} alt="" />
          </li>
        ))}
      </ol>
      <p className="sr-only" role="status">
        {showFan
          ? "The Pointer, jersey number 8, is the main character. Ten likenesses, one pointing call."
          : "Replay of The Pointer."}
      </p>
    </div>
  );
}
