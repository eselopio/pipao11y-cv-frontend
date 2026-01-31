# Web Interface Guidelines — Review

Review date: 2025-01-31  
Source: https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md

---

## src/layouts/Layout.astro

src/layouts/Layout.astro:15 - missing skip link to main content (headings hierarchical; include skip link for main content)
src/layouts/Layout.astro:15 - dark theme: add `color-scheme: dark` on `<html>` when .dark (fixes scrollbar, inputs)

---

## src/pages/index.astro

src/pages/index.astro:17 - `<main>` needs id (e.g. id="main") for skip link target

---

## src/components/DarkModeToggle.astro

src/components/DarkModeToggle.astro:6 - decorative SVGs inside button should have aria-hidden="true"

---

## src/components/KeyboardManager.astro

src/components/KeyboardManager.astro:65 - #footer-button is `<div>` with click handler → should be `<button>` (anti-pattern)
src/components/KeyboardManager.astro:65 - icon-only button needs aria-label
src/components/KeyboardManager.astro:62 - keyboard hint "Cmd" is Mac-only; consider "Cmd/Ctrl" or platform-specific copy
src/components/KeyboardManager.astro:158 - fadeIn animation missing prefers-reduced-motion

---

## src/components/BlurFade.astro

src/components/BlurFade.astro:111 - animates filter (blur); guideline: animate transform/opacity only (compositor-friendly)
src/components/BlurFade.astro:111 - animation missing prefers-reduced-motion

---

## src/components/TypingAnimation.astro

src/components/TypingAnimation.astro:99 - blink animation missing prefers-reduced-motion

---

## src/components/sections/Hero.astro

src/components/sections/Hero.astro:87 - `<img>` needs explicit width and height attributes (prevents CLS)
src/components/sections/Hero.astro:46 - icon-only link (Mail) needs aria-label (title is not sufficient)
src/components/sections/Hero.astro:58 - icon-only link (Phone) needs aria-label
src/components/sections/Hero.astro:72 - icon-only link (GitHub/LinkedIn/X) needs aria-label per link
src/components/sections/Hero.astro:38 - WorldMap icon is decorative → wrap in span with aria-hidden="true"

---

## src/components/sections/Experience.astro

src/components/sections/Experience.astro:34 - dates: use Intl.DateTimeFormat for locale-aware formatting (not only getFullYear)

---

## src/components/sections/Education.astro

src/components/sections/Education.astro:25 - dates: use Intl.DateTimeFormat for locale-aware year/range display

---

## src/components/sections/Projects.astro

src/components/sections/Projects.astro:22 - .github-code-link is icon-only link → needs aria-label
src/components/sections/Projects.astro:136 - flicker animation missing prefers-reduced-motion

---

## src/components/sections/Skills.astro

✓ pass

---

## src/components/Section.astro

✓ pass

---

## src/components/sections/About.astro

✓ pass

---

## Summary

| Category           | Status |
|--------------------|--------|
| Accessibility      | 6 findings (skip link, aria-label icon links/buttons, aria-hidden decorative, img dimensions) |
| Focus states        | ✓ (focus-visible used; outline-none only with :focus-visible replacement) |
| Animation           | 4 findings (prefers-reduced-motion; BlurFade filter vs transform/opacity) |
| Dark mode           | 1 finding (color-scheme: dark on html) |
| Navigation / markup | 2 findings (main id; footer div→button) |
| Locale / copy       | 1 finding (Cmd vs Cmd/Ctrl) |
| Dates               | 2 findings (Intl.DateTimeFormat) |
