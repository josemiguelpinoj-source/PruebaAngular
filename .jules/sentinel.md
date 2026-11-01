# Sentinel's Journal

## 2026-11-01 - XSS via SweetAlert2 HTML Rendering in Angular
**Vulnerability:** Interpolation of unescaped user-controlled data (`usuario.nombre`) into SweetAlert2's `html` property allows Cross-Site Scripting (XSS). Although Angular templates auto-sanitize interpolations, external libraries like SweetAlert2 that inject raw HTML into the DOM bypass Angular's built-in sanitizer.
**Learning:** SweetAlert2's `html` option renders raw HTML directly via `innerHTML`. When displaying user strings stored in `localStorage` or external sources, passing unescaped values into `html` breaks the security boundary.
**Prevention:** Always escape HTML entities before injecting into SweetAlert2 `html` configs, or prefer `text` when rich markup is not strictly necessary.
