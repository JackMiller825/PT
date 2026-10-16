import { useCallback, useState } from "react";
import { Header, sectionIds } from "./components/Header";
import { Hero } from "./components/Hero";
import { MascotIntro } from "./components/MascotIntro";
import { Story } from "./components/Story";
import { useActiveSection, useReadingProgress, useReveal } from "./hooks";

export function App() {
  const [introOn, setIntroOn] = useState(true);
  const [introKey, setIntroKey] = useState(0);
  const active = useActiveSection(sectionIds);

  useReveal();
  useReadingProgress();

  const finishIntro = useCallback(() => {
    setIntroOn(false);
    window.requestAnimationFrame(() => {
      document.getElementById("hero-title")?.focus({ preventScroll: true });
    });
  }, []);

  const replayIntro = useCallback(() => {
    setIntroKey((value) => value + 1);
    setIntroOn(true);
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <a className="skip" href="#top">
        Skip to tip-off
      </a>
      <div
        className="progress"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
      />
      {introOn ? <MascotIntro key={introKey} onDone={finishIntro} /> : null}
      <div className={introOn ? "page is-covered" : "page"} inert={introOn}>
        <Header active={active} />
        <main>
          <Hero live={!introOn} onReplay={replayIntro} />
          <Story />
        </main>
      </div>
    </>
  );
}
