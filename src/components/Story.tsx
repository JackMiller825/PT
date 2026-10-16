import type { ReactNode } from "react";
import { asset, configuredLinks, site, tickerLabel, type SiteLinkKey } from "../config";
import { leadMascot } from "../mascots";
import { chapters } from "../story";

const linkLabels: Record<SiteLinkKey, string> = {
  website: "Website",
  x: "X",
  telegram: "Telegram",
  dex: "DEX",
  chart: "Chart",
};

export function Story() {
  const links = configuredLinks();

  return (
    <>
      <section className="ticker" aria-label="Tonight’s case">
        <div>
          <b>Tonight’s case</b>
          <span>The ball vs. the table</span>
        </div>
        <div>
          <b>Witnesses</b>
          <span>4, plus a ceiling fan</span>
        </div>
        <div>
          <b>Status</b>
          <span>Under snack review</span>
        </div>
        <div>
          <b>Ruling</b>
          <span>Still being argued</span>
        </div>
      </section>

      <section className="cast" id="cast" aria-labelledby="cast-title">
        <div className="section-head">
          <div>
            <p className="eyebrow">The roster · no. 01</p>
            <h2 id="cast-title">
              Meet the <em>court.</em>
            </h2>
          </div>
          <p>
            A hero with a point to make. A ball with a point to prove. A referee who desperately needs a
            different whistle.
          </p>
        </div>
        <div className="cast-grid">
          <article className="cast-card cast-pointer" data-reveal>
            <p className="cast-index">01 / The eyewitness</p>
            <h3>The Pointer</h3>
            <p>One sharp finger. A memory like instant replay. No patience for a bad call.</p>
            <img src={leadMascot.src} alt="The Pointer in jersey 8, pointing." />
            <p className="cast-tag">Calm under questionable circumstances</p>
          </article>
          <article className="cast-card cast-bouncy" data-reveal>
            <p className="cast-index">02 / Assistant coach</p>
            <h3>Bouncy</h3>
            <p>A basketball with a whistle, a napkin armband, and the confidence to coach popcorn.</p>
            <img
              src={asset("assets/replay.png")}
              alt="Bouncy the basketball wearing a whistle beside a spilled popcorn bucket."
            />
            <p className="cast-tag">Specialty: stationary screens</p>
          </article>
          <article className="cast-card cast-ref" data-reveal>
            <p className="cast-index">03 / The official</p>
            <h3>The Ref</h3>
            <p>Trying to keep order while fans, snacks and evidence file appeals.</p>
            <img
              src={asset("assets/bouncy.png")}
              alt="The referee watches The Pointer point toward Bouncy under the scorer’s table."
            />
            <p className="cast-tag">Whistle sounds like a duck</p>
          </article>
        </div>
      </section>

      <section className="legend" id="chapters" aria-labelledby="legend-title">
        <div className="section-head">
          <div>
            <p className="eyebrow">The legend · six chapters</p>
            <h2 id="legend-title">
              The call <em>chronicles.</em>
            </h2>
          </div>
          <p>
            Follow the evidence in order. The Bureau of Calls recommends snacks, a comfortable seat, and no
            legal advice from Bouncy.
          </p>
        </div>
        <nav className="jumps" aria-label="Chapters">
          {chapters.map((chapter) => (
            <a key={chapter.id} href={`#${chapter.id}`}>
              {chapter.jump}
            </a>
          ))}
        </nav>
        {chapters.map((chapter, index) => (
          <article
            key={chapter.id}
            id={chapter.id}
            className={index % 2 === 0 ? "chapter" : "chapter is-flipped"}
            data-reveal
          >
            <figure className="chapter-art">
              <img
                src={asset(chapter.image)}
                alt={chapter.imageAlt}
                style={{ objectPosition: chapter.focus }}
                width="2172"
                height="724"
              />
              <figcaption>Case file · {chapter.number}</figcaption>
            </figure>
            <div className="chapter-copy">
              <p className="eyebrow">Chapter {chapter.number} ✳ courtside chronicles</p>
              <h2>{chapter.title}</h2>
              <p className="dek">{chapter.dek}</p>
              <div className="prose">
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              <a className="text-link gold" href="#top">
                Back to tip-off ↑
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="box" id="scoreboard" aria-labelledby="box-title">
        <div className="section-head">
          <div>
            <p className="eyebrow">Starting lineup · the project at a glance</p>
            <h2 id="box-title">
              The <em>box score.</em>
            </h2>
          </div>
          <p>
            Four numbers on the board. Read them like a player card: the roster size, the fouls, the net, and
            who holds the whistle.
          </p>
        </div>
        <div className="stat-grid">
          <article className="stat" data-q="Q1">
            <strong>1B</strong>
            <b>Full-court roster</b>
            <span>
              Total supply · {site.totalSupply} {tickerLabel()}
            </span>
          </article>
          <article className="stat" data-q="Q2">
            <strong>{site.tax}</strong>
            <b>No personal fouls</b>
            <span>Buy / sell tax · {site.tax}</span>
          </article>
          <article className="stat" data-q="Q3">
            <strong>{site.liquidity}</strong>
            <b>Empty the net</b>
            <span>Liquidity pool · {site.liquidity}</span>
          </article>
          <article className="stat" data-q="Q4">
            <strong>{site.ownership}</strong>
            <b>Coach left the whistle</b>
            <span>Ownership · {site.ownership}</span>
          </article>
        </div>
      </section>

      <section className="playbook" id="playbook" aria-labelledby="play-title" data-reveal>
        <div className="section-head light">
          <div>
            <p className="eyebrow">Four quarters · one careful play</p>
            <h2 id="play-title">
              Run <em>the play.</em>
            </h2>
          </div>
          <p>New to the court? Follow the sequence, check the ball twice, and never hand anyone your locker-room key.</p>
        </div>
        <ol className="plays">
          <li>
            <span className="play-num">01 / Tip-off</span>
            <h3>Lace up</h3>
            <p className="play-meta">Choose your wallet</p>
            <p>Use an Ethereum-compatible wallet you control. Keep your recovery phrase private and offline.</p>
          </li>
          <li>
            <span className="play-num">02 / Warm-up</span>
            <h3>Get court-ready</h3>
            <p className="play-meta">Fund with ETH</p>
            <p>Have ETH available for the swap and network gas. Leave a little extra for the transaction fee.</p>
          </li>
          <li>
            <span className="play-num">03 / Jersey check</span>
            <h3>Verify the player</h3>
            <p className="play-meta">Check the official contract</p>
            <p>
              Get the contract address from PointTaken’s official channels. Match the {site.chain} network and
              token before proceeding.
            </p>
          </li>
          <li>
            <span className="play-num">04 / Take your shot</span>
            <h3>Make the play</h3>
            <p className="play-meta">Review, then swap</p>
            <p>
              Use a reputable Ethereum DEX. Check the token, quote, slippage and total cost before confirming in
              your wallet.
            </p>
          </li>
        </ol>
      </section>

      <section className="timeout" aria-labelledby="timeout-title">
        <p className="eyebrow dark">Official timeout · Bouncy has the floor</p>
        <h2 id="timeout-title">“I object to the table’s jurisdiction.”</h2>
        <p>
          Asked to clarify, Bouncy clarified that the popcorn bucket was its legal counsel. The bucket has
          declined comment and is currently covered in butter.
        </p>
        <div className="timeout-mark" aria-hidden="true">
          ?
        </div>
        <div className="bouncy-ball" aria-hidden="true" />
      </section>

      <section className="case-file" aria-labelledby="case-title">
        <div className="section-head light">
          <div>
            <p className="eyebrow">The Bureau of Calls · official-ish record</p>
            <h2 id="case-title">The case file</h2>
          </div>
        </div>
        <div className="case-grid">
          <article>
            <strong>47</strong>
            <span>Identical replays</span>
          </article>
          <article>
            <strong>4</strong>
            <span>Witnesses</span>
          </article>
          <article>
            <strong>1</strong>
            <span>Nacho appeal</span>
          </article>
          <article>
            <strong>0</strong>
            <span>Useful angles</span>
          </article>
        </div>
        <p className="case-status">Status: under snack review</p>
        <p className="case-caption">The replay machine has been placed in a quiet room with tea.</p>
      </section>

      <section
        className="fan"
        id="fan"
        aria-labelledby="fan-title"
        style={{
          backgroundImage: `linear-gradient(100deg, rgba(241,234,219,.97) 0%, rgba(241,234,219,.92) 42%, rgba(241,234,219,.62)), url(${asset("assets/crowd.png")})`,
        }}
      >
        <div className="section-head">
          <div>
            <p className="eyebrow">The people vs. the original call</p>
            <h2 id="fan-title">
              The crowd <em>decides.</em>
            </h2>
          </div>
          <p>Every witness has a version. The ceiling fan has declined to comment, which the Bureau considers suspicious.</p>
        </div>
        <div className="fan-stats">
          <div>
            <b>47</b>
            <span>Replay prints</span>
          </div>
          <div>
            <b>1</b>
            <span>Confused nacho</span>
          </div>
          <div>
            <b>∞</b>
            <span>Stories from fans</span>
          </div>
        </div>
        {links.length > 0 ? (
          <div className="fan-invite">
            <ul>
              {links.map(([key, href]) => (
                <li key={key}>
                  <a href={href} rel="noreferrer">
                    {linkLabels[key]} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section
        className="finale"
        id="finale"
        aria-labelledby="finale-title"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(9,19,35,.95) 0%, rgba(9,19,35,.78) 48%, rgba(9,19,35,.28)), url(${asset("assets/hero.png")})`,
        }}
      >
        <div>
          <p className="eyebrow">Final buzzer · case remains open</p>
          <h2 id="finale-title">
            Who saw
            <br />
            what <em>happened?</em>
          </h2>
          <p>Every story from the stands earns a replay. Bouncy reserves the right to object to snacks.</p>
          <a className="button" href="#top">
            Back to tip-off ↑
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <img src={asset("assets/logo.png")} alt="" width="42" height="42" />
          <p>
            <b>POINTTAKEN / {tickerLabel()}</b>
            <span>Courtside culture · stories from the stands</span>
          </p>
        </div>
        <nav className="footer-social" aria-label="Community">
          <CommunityLink href={site.links.x} label="X">
            <XMark />
          </CommunityLink>
          <CommunityLink href={site.links.telegram} label="Telegram">
            <TelegramMark />
          </CommunityLink>
        </nav>
      </footer>
    </>
  );
}

function CommunityLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const destination = href.trim();
  if (!destination) {
    return (
      <span className="social-link is-waiting" title="Coming soon" aria-label={`${label}, coming soon`}>
        {children}
      </span>
    );
  }
  return (
    <a className="social-link" href={destination} target="_blank" rel="noreferrer" aria-label={label}>
      {children}
    </a>
  );
}

function XMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TelegramMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.94 4.3 18.9 19.2c-.23 1.02-1.66 1.4-2.48.86l-5.46-4.02-2.63 2.54c-.31.3-.86.14-.96-.28l-.78-5.05L2.2 11.4c-1.05-.33-1.07-1.78.02-2.14L20.35 2.9c.9-.3 1.76.52 1.59 1.4zM8.9 13.7l9.2-5.66c.4-.25.76-.08.42.22l-7.9 7.12-.34 3.2-1.38-4.88z" />
    </svg>
  );
}
