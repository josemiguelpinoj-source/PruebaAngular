## 2026-10-19 - Escaping User Input in SweetAlert2 HTML Modals
**Vulnerability:** User-controlled property (usuario.nombre) interpolated directly into Swal.fire({ html: ... }) allowed DOM XSS / HTML injection.
**Learning:** Angular auto-escapes template bindings, but third-party UI libraries like SweetAlert2 render html parameters as raw HTML, bypassing Angular's template sanitization.
**Prevention:** Always escape HTML entities in user-controlled input before interpolating into raw HTML strings passed to external UI libraries.
