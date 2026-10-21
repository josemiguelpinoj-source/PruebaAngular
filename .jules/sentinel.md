## 2026-10-21 - SweetAlert2 HTML Injection / XSS
**Vulnerability:** Inserting user-supplied strings into SweetAlert2 `Swal.fire({ html: ... })` allowed unescaped HTML/JavaScript execution.
**Learning:** SweetAlert2 parses and renders HTML provided in the `html` configuration property as unescaped DOM elements.
**Prevention:** Always sanitize or escape user-controlled string inputs (e.g., using `escapeHtml`) when building dynamic HTML parameters for SweetAlert2 modals.
