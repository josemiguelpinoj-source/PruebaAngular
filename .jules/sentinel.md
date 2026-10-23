## 2026-10-23 - DOM XSS via Unescaped User Input in SweetAlert2 Dialogs

**Vulnerability:** User-controlled input (`usuario.nombre` stored in LocalStorage) was rendered directly into the HTML option of SweetAlert2 modals (`Swal.fire({ html: ... })`) without prior escaping, creating a DOM-based Cross-Site Scripting (XSS) vulnerability.

**Learning:** Third-party dialog/modal libraries such as SweetAlert2 often support HTML formatting (`html: ...`), which bypasses framework-level automatic context sanitization (like Angular's template binding escaping). Passing raw strings containing user input into these modal options allows execution of arbitrary HTML and JavaScript.

**Prevention:** Always sanitize or escape user-supplied strings before interpolating them into HTML templates or third-party modal `html` properties, or use plain text properties (`text: ...`) when HTML formatting is not required.
