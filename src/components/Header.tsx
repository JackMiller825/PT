import { useEffect, useState } from "react";
import { tickerLabel } from "../config";

const links = [
  { href: "#cast", id: "cast", label: "THE CAST" },
  { href: "#chapters", id: "chapters", label: "THE LEGEND" },
  { href: "#scoreboard", id: "scoreboard", label: "SCOREBOARD" },
  { href: "#playbook", id: "playbook", label: "THE PLAYBOOK" },
  { href: "#fan", id: "fan", label: "FAN BOARD" },
] as const;

export function Header({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <img src={`${import.meta.env.BASE_URL}assets/logo.png`} alt="" width="46" height="46" />
        <span>
          POINTTAKEN
          <small>COURTSIDE CHRONICLES · {tickerLabel()}</small>
        </span>
      </a>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"} aria-label="Sections">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            aria-current={active === link.id ? "true" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a className="cta" href="#finale" onClick={() => setOpen(false)}>
          NEXT CALL ↗
        </a>
      </nav>
    </header>
  );
}

export const sectionIds = links.map((link) => link.id);
