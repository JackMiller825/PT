import { useEffect, useState } from "react";
import { asset, tickerLabel } from "../config";
import { replayOrder } from "../mascots";

const scores = [
  ["1 FINGER", "THE CALL"],
  ["47 REPLAYS", "THE EVIDENCE"],
  ["0 CHIPS", "SAFE FROM BOUNCY"],
] as const;

export function Hero({ live, onReplay }: { live: boolean; onReplay: () => void }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const pose = replayOrder[index] ?? replayOrder[0];

  useEffect(() => {
    if (!live || paused || reduced) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % replayOrder.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [live, paused, reduced]);

  return (
    <section className={live ? "hero is-live" : "hero"} id="top" aria-labelledby="hero-title">
      <div className="hero-arena" aria-hidden="true">
        <img src={asset("assets/hero.png")} alt="" />
        <div className="hero-sweep" />
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">THE VERY UNOFFICIAL COURTSIDE CHRONICLES</p>
          <h1 id="hero-title" tabIndex={-1}>
            POINT
            <span>TAKEN</span>
            <small>{tickerLabel()}</small>
          </h1>
          <p className="lede">
            One suspicious bounce. One fearless finger. One basketball with <b>way too much to say.</b> Read
            the completely unnecessary, wildly over-reviewed origin story.
          </p>
          <div className="hero-actions">
            <a className="button" href="#chapter-1">
              READ THE LEGEND ↓
            </a>
            <a className="text-link" href="#cast">
              MEET THE COURT →
            </a>
          </div>
        </div>
        <div
          className="hero-figure"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <img src={pose.src} alt="The Pointer, jersey 8, pointing at the call." width="1254" height="1254" />
          <p className="stamp">
            <strong>01</strong>
            <span>CASE FILE OPEN</span>
          </p>
        </div>
      </div>
      <div className="angle-bar">
        <div className="angle-label">
          <span>The Pointer · ten angles</span>
          <button type="button" className="text-link" onClick={onReplay}>
            Play the replay
          </button>
        </div>
        <div className="angle-strip" role="group" aria-label="Ten angles of The Pointer">
          {replayOrder.map((mascot, mascotIndex) => (
            <button
              key={mascot.id}
              type="button"
              className={mascotIndex === index ? "is-on" : undefined}
              aria-pressed={mascotIndex === index}
              aria-label={`Show angle ${mascot.id} of The Pointer`}
              onClick={() => setIndex(mascotIndex)}
            >
              <img src={mascot.src} alt="" />
            </button>
          ))}
        </div>
      </div>
      <dl className="score-strip">
        {scores.map(([value, label]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
