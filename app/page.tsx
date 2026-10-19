"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";

const instagramUsername = "scan_me____";
const instagramUrl = `https://www.instagram.com/${instagramUsername}/`;
const instagramAppUrl = `instagram://user?username=${instagramUsername}`;
const instagramAndroidUrl = `intent://instagram.com/_u/${instagramUsername}/#Intent;package=com.instagram.android;scheme=https;S.browser_fallback_url=${encodeURIComponent(instagramUrl)};end`;
const whatsappUrl = "https://wa.me/212772066379";
const clientLogos = [
  { src: "/client-bechef.png", className: "bechef" },
  { src: "/client-nuija.png", className: "nuija" },
  { src: "/client-bechef.png", className: "bechef" },
  { src: "/client-nuija.png", className: "nuija" },
  { src: "/client-bechef.png", className: "bechef" },
  { src: "/client-nuija.png", className: "nuija" },
] as const;

type Locale = "en" | "fr" | "ar";

const content = {
  en: {
    dir: "ltr",
    digitalMenu: "DIGITAL MENU",
    nav: "MENU · ORDER · CONNECT",
    kicker: "SMARTER SERVICE. BETTER EXPERIENCE.",
    lineOne: "DIGITIZE",
    lineTwo: "YOUR STORE",
    lineThree: "WITH SCAN ME.",
    lead: "One scan. The full experience. Discover the menu, choose your order and enjoy—without waiting.",
    follow: "FOLLOW THE STORY",
    project: "START A PROJECT",
    partnersTitle: "SELECTED PARTNERS",
  },
  fr: {
    dir: "ltr",
    digitalMenu: "MENU DIGITAL",
    nav: "MENU · COMMANDER · CONNECTER",
    kicker: "UN SERVICE PLUS FLUIDE",
    lineOne: "DIGITALISEZ",
    lineTwo: "VOTRE MAGASIN",
    lineThree: "AVEC SCAN ME.",
    lead: "Un scan. Toute l’expérience. Découvrez le menu, choisissez votre commande et profitez—sans attendre.",
    follow: "SUIVEZ L’AVENTURE",
    project: "DÉMARRER UN PROJET",
    partnersTitle: "NOS PARTENAIRES",
  },
  ar: {
    dir: "rtl",
    digitalMenu: "القائمة الرقمية",
    nav: "القائمة · الطلب · التواصل",
    kicker: "خدمة أذكى وتجربة أفضل",
    lineOne: "رقمن",
    lineTwo: "متجرك",
    lineThree: "مع SCAN ME.",
    lead: "مسح واحد، وتجربة كاملة. اكتشف القائمة، اختر طلبك واستمتع—دون انتظار.",
    follow: "تابع قصتنا",
    project: "ابدأ مشروعك",
    partnersTitle: "شركاؤنا",
  },
} as const;

function InstagramIcon() {
  return (
    <span className="social-icon instagram-icon" aria-hidden="true">
      <i />
    </span>
  );
}

function WhatsAppIcon() {
  return (
    <span className="social-icon whatsapp-icon" aria-hidden="true">
      <i>☎</i>
    </span>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const fireCursorRef = useRef<HTMLDivElement>(null);
  const t = content[locale];

  const moveFire = (event: ReactPointerEvent<HTMLElement>) => {
    const fire = fireCursorRef.current;
    if (!fire) return;

    fire.style.setProperty("--fire-x", `${event.clientX}px`);
    fire.style.setProperty("--fire-y", `${event.clientY}px`);
    fire.classList.add("is-active");
  };

  const burstFire = (event: ReactPointerEvent<HTMLElement>) => {
    moveFire(event);
    const fire = fireCursorRef.current;
    if (!fire) return;

    fire.classList.remove("is-burst");
    void fire.offsetWidth;
    fire.classList.add("is-burst");
    window.setTimeout(() => fire.classList.remove("is-burst"), 460);
  };

  const hideFire = () => fireCursorRef.current?.classList.remove("is-active");

  const softenTouchFire = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") {
      window.setTimeout(hideFire, 340);
    }
  };

  const openInstagram = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    const userAgent = navigator.userAgent;

    if (/Android/i.test(userAgent)) {
      event.preventDefault();
      window.location.href = instagramAndroidUrl;
      return;
    }

    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      event.preventDefault();
      window.location.href = instagramAppUrl;

      window.setTimeout(() => {
        if (!document.hidden) window.location.href = instagramUrl;
      }, 1100);
    }
  };

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = t.dir;
  }, [locale, t.dir]);

  return (
    <main
      className="landing"
      dir={t.dir}
      data-locale={locale}
      onPointerEnter={moveFire}
      onPointerMove={moveFire}
      onPointerDown={burstFire}
      onPointerUp={softenTouchFire}
      onPointerCancel={hideFire}
      onPointerLeave={hideFire}
    >
      <div className="grain" aria-hidden="true" />
      <div className="top-rule" aria-hidden="true" />
      <div ref={fireCursorRef} className="fire-cursor" aria-hidden="true" />

      <header className="topbar">
        <div className="mini-brand">
          <span className="mini-mark" aria-hidden="true"><i /><i /><i /><i /></span>
          <span>
            SCAN ME
            <small>{t.digitalMenu}</small>
          </span>
        </div>
        <div className="top-actions">
          <p className="top-note">{t.nav}</p>
          <div className="language-selector" aria-label="Language selector">
            {(["en", "fr", "ar"] as Locale[]).map((language) => (
              <button
                key={language}
                type="button"
                className={locale === language ? "active" : ""}
                onClick={() => setLocale(language)}
                aria-pressed={locale === language}
              >
                {language === "ar" ? "ع" : language.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="identity-stage" aria-label="Scan Me brand identity">
        <img className="hero-logo" src="/logo.jpeg" alt="Scan Me logo" />
      </section>

      <section className="message" aria-labelledby="main-title">
        <p className="kicker"><span /> {t.kicker}</p>
        <h1 id="main-title">
          <span className="headline-first">{t.lineOne}</span>
          <span className="headline-accent">{t.lineTwo}</span>
          <span className="headline-last">{t.lineThree}</span>
        </h1>
        <p className="lead">{t.lead}</p>

        <div className="actions" aria-label="Contact Scan Me">
          <a
            className="action-instagram"
            href={instagramUrl}
            onClick={openInstagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Follow Scan Me on Instagram"
          >
            <InstagramIcon />
            <span>INSTAGRAM<small>{t.follow}</small></span>
            <b aria-hidden="true">↗</b>
          </a>
          <a
            className="action-primary action-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Contact Scan Me on WhatsApp"
          >
            <WhatsAppIcon />
            <span>WHATSAPP<small>{t.project}</small></span>
            <b aria-hidden="true">↗</b>
          </a>
        </div>
      </section>

      <footer className="partner-bar" aria-label="Our partners">
        <p>{t.partnersTitle}</p>
        <div
          className="partner-marquee"
          role="img"
          aria-label="Be chef Restaurant and Nuija Dar Tajine"
        >
          <div className="partner-track">
            {[0, 1].map((group) => (
              <div className="partner-group" key={group} aria-hidden="true">
                {clientLogos.map((logo, index) => (
                  <span className={`client-logo ${logo.className}`} key={`${group}-${index}`}>
                    <img src={logo.src} alt="" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p>MA · 2026</p>
      </footer>
    </main>
  );
}
