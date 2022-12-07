"use client";
import { useState } from "react";
import style from "./navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav
      className={`${style.primary_navbar} ${
        expanded && `${style.nav_full_height} ${style.primary_navbar_color}`
      }`}
    >
      <h2 className="table_of_contents_only">Navigation</h2>
      <div
        className={style.mobile_navbar_btn_container}
        onClick={() => setExpanded(!expanded)}
      >
        <button>{expanded ? "x" : "+"}</button>
      </div>
      <div className={style.logo_container}>
        <Link href="/" className={style.logo}>
          .dev
        </Link>
      </div>
      <div className={`${style.routes_container} ${!expanded && style.hide}`}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
        </ul>
      </div>
      <div
        className={`${style.contact_icons_container} ${
          !expanded && style.hide
        }`}
      >
        <ul>
          <li>
            <a
              href="https://calendly.com/"
              aria-label="Link to Roy Salazar Calendly"
              target="_blank"
              rel="noreferrer"
            >
              <i className={`${style.calendly} ${style.icon_color}`} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/roy-salazar-a93b0b192/"
              aria-label="Link to Roy Salazar Linkedin profile"
              target="_blank"
              rel="noreferrer"
            >
              <i className={`${style.linkedin} ${style.icon_color}`} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/roysalazarp"
              aria-label="Link to Roy Salazar Github profile"
              target="_blank"
              rel="noreferrer"
            >
              <i className={`${style.github} ${style.icon_color}`} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
