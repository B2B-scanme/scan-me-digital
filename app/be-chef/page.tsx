
"use client";

import type { MouseEvent as ReactMouseEvent } from "react";
import styles from "./page.module.css";

// Instagram
const instagramUsername = "be.chef.ma";

const instagramUrl =
  `https://www.instagram.com/${instagramUsername}/`;

const instagramAppUrl =
  `instagram://user?username=${instagramUsername}`;

const instagramAndroidUrl =
  `intent://instagram.com/_u/${instagramUsername}/#Intent;scheme=https;package=com.instagram.android;S.browser_fallback_url=${encodeURIComponent(instagramUrl)};end`;

// Google Maps
const mapsUrl =
  "https://www.google.com/maps/place/Be+Chef/data=!4m2!3m1!1s0x0:0xa4c42f5e1ab1c326?sa=X&ved=1t:2428&ictx=111";

// WhatsApp
const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=212670239965";

// Instagram Icon
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />
      <circle cx="12" cy="12" r="4.2" />
      <circle
        className={styles.iconFill}
        cx="17.4"
        cy="6.7"
        r="1.1"
      />
    </svg>
  );
}

// Location Icon
function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5.3-8 11-8 11S4 15.3 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.7" />
    </svg>
  );
}

// Star Icon
function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
    </svg>
  );
}

// WhatsApp Icon
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
      <path d="M8.1 7.5c.2-.5.4-.5.8-.5h.4c.1 0 .3 0 .4.4l.7 1.8c.1.3.1.5-.1.7l-.5.7c-.2.2-.3.4-.1.7.6 1.2 1.5 2.1 2.7 2.7.3.1.5.1.7-.2l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .5-.2 1.5-.8 2-.6.5-1.3.8-2.2.6-1.2-.2-2.8-.8-4.4-2.2-1.3-1.2-2.5-2.9-2.8-4.3-.4-1.4.2-2.2.6-2.6.3-.3.6-.4.9-.4Z" />
    </svg>
  );
}

// Arrow Icon
function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

// Main Page
export default function BeChefPage() {

  // Open Instagram App
  const openInstagram = (
    event: ReactMouseEvent<HTMLAnchorElement>
  ) => {
    const userAgent = navigator.userAgent;

    // Android
    if (/Android/i.test(userAgent)) {
      event.preventDefault();

      window.location.href = instagramAndroidUrl;
      return;
    }

    // iPhone / iPad
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      event.preventDefault();

      window.location.href = instagramAppUrl;
      return;
    }

    // Desktop uses the normal link
  };

  return (
    <main className={styles.page}>

      {/* Background */}
      <div
        className={styles.ambient}
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>

      {/* Header */}
      <header className={styles.header}>
        <p className={styles.location}>
          MARRAKECH · MAROC
        </p>

        <p className={styles.restaurant}>
          RESTAURANT
        </p>
      </header>

      {/* Hero */}
      <section
        className={styles.hero}
        aria-labelledby="be-chef-title"
      >
        <div className={styles.logoFrame}>
          <div
            className={styles.logoGlow}
            aria-hidden="true"
          />

          <img
            className={styles.logo}
            src="/client-bechef.png"
            alt="Be Chef Restaurant"
          />
        </div>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            BIENVENUE CHEZ
          </p>

          <h1 id="be-chef-title">
            Le goût qui vous
            <span>rassemble.</span>
          </h1>

          <p className={styles.tagline}>
            Une cuisine généreuse,
            préparée avec passion.
          </p>
        </div>
      </section>

      {/* Action Buttons */}
      <nav
        className={styles.actions}
        aria-label="Liens Be Chef"
      >

        {/* Instagram */}
        <a
          href={instagramUrl}
          onClick={openInstagram}
          rel="noopener noreferrer"
        >
          <span className={styles.actionIcon}>
            <InstagramIcon />
          </span>

          <span className={styles.actionCopy}>
            <small>DÉCOUVRIR</small>
            Instagram
          </span>

          <span className={styles.arrow}>
            <ArrowIcon />
          </span>
        </a>

        {/* Google Maps */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.actionIcon}>
            <LocationIcon />
          </span>

          <span className={styles.actionCopy}>
            <small>NOUS TROUVER</small>
            Itinéraire
          </span>

          <span className={styles.arrow}>
            <ArrowIcon />
          </span>
        </a>

        {/* Google Reviews */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.actionIcon}>
            <StarIcon />
          </span>

          <span className={styles.actionCopy}>
            <small>VOTRE EXPÉRIENCE</small>
            Avis Google
          </span>

          <span className={styles.arrow}>
            <ArrowIcon />
          </span>
        </a>

        {/* WhatsApp */}
        <a
          className={styles.primary}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.actionIcon}>
            <WhatsAppIcon />
          </span>

          <span className={styles.actionCopy}>
            <small>NOUS ÉCRIRE</small>
            WhatsApp
          </span>

          <span className={styles.arrow}>
            <ArrowIcon />
          </span>
        </a>

      </nav>

      {/* Footer */}
      <footer className={styles.footer}>
        <span>BE CHEF</span>

        <i aria-hidden="true" />

        <span>
          CUISINE · PASSION · PARTAGE
        </span>
      </footer>

    </main>
  );
}
