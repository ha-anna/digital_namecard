# ✦ Anna Ha — Interactive NFC Portfolio

![Gif](./public/namecard_eng.gif)

An interactive personal portfolio designed to be discovered through an **NFC business card**.

Instead of a traditional portfolio page, visitors are presented with a small deck of tarot-inspired cards that tell the story of who I am, how I got into software engineering, what I like to build, and where I'm headed next.

**Tap the card. Flip it. Swipe through the deck. ✦**

---

## ✦ The Idea

I wanted my NFC card to be more than just a link to my LinkedIn.

When someone scans it, I want them to get a quick sense of **who I am as a person and engineer** — without asking them to read through a traditional résumé or portfolio.

So I built a small interactive experience around a tarot-card-inspired deck.

Each card reveals a different part of my story:

* **The Seeker** — who I am
* **The Question** — how I ended up in Computer Science
* **The Builder** — what I like making
* **The Why** — what motivates me
* **The Apprentice** — the engineer I'm trying to become
* **The World** — the kind of environment I want to work in
* **The Horizon** — what I'm looking for next

The goal is simple:

> **Give someone a memorable introduction to me in about a minute.**

---

## ✦ Interactions

The site is designed primarily for mobile.

### Tap

Tap the card to flip it and reveal the other side.

### Swipe

Swipe the card to draw the next card.

### Language

Switch between **English and Korean** using the language toggle.

### NFC

The website is intended to be the landing page behind an NFC business card, making it easy to share my:

* Portfolio
* GitHub
* LinkedIn
* Projects
* Contact information

---

## ✦ Tech Stack

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Motion for React**
* **Vercel**

The animations are built with [Motion](https://motion.dev/) rather than relying on a large animation framework.

---

## ✦ Design

The visual direction is inspired by:

* Tarot cards
* Magical interfaces
* Purple night-sky aesthetics
* Floating objects
* Subtle glowing effects

The interface intentionally stays minimal so that the **card interaction remains the main experience**.

The cards use:

* 3D transforms
* Flip animations
* Drag gestures
* Floating motion
* Layered cards
* Ambient glow
* Responsive mobile interactions

---

## ✦ Project Structure

```text
.
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── TarotCard.tsx
│   └── Stars.tsx
│
├── data/
│   └── cards.ts
│
├── public/
│
└── package.json
```

The card content is kept separate from the UI so the story can be edited without changing the component logic.

---

## ✦ Why I Built It

This project started with a simple question:

**What if a business card could actually feel like me?**

I wanted to experiment with combining software engineering, interaction design, and a little bit of weirdness.

It is also a small exercise in something I care about when building software:

> **The technology should serve the experience.**

There isn't really a reason for a portfolio to be a tarot deck.

That's exactly why I wanted to make one.

---

## ✦ What's Next

Some ideas I may explore:

* [ ] NFC card integration
* [ ] More elaborate card transitions
* [ ] Motion responding to device movement
* [ ] More interactive background effects
* [ ] Better accessibility and reduced-motion support
* [ ] Contact / hiring card
* [ ] Analytics for NFC visits
* [ ] Physical card design matching the digital deck

---

## ✦ About Me

I'm a **3rd-year Computer Science & Engineering student at Sogang University in Seoul**.

Before studying CS, I studied languages and worked as a software engineer at a startup building an AI chatbot for Korean language learning.

These days, I like building things across different corners of software — from iOS apps and AI systems to computer vision experiments.

I'm currently looking for a **software engineering internship** where I can learn from great people, work on real problems, and contribute to something bigger.

### Find me

* [Website](https://www.haanna.com/)
* [GitHub](https://github.com/ha-anna)
* [LinkedIn](https://www.linkedin.com/in/ha-anna/)

```
```
