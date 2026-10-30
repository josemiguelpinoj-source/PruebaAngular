## 2026-10-30 - Prevent XSS in SweetAlert2 via HTML property
**Vulnerability:** User input (`usuario.nombre`) was interpolated directly into SweetAlert2's `html` property (`Swal.fire({ html: ... })`) without escaping, leading to potential Cross-Site Scripting (XSS) / HTML Injection.
**Learning:** SweetAlert2 interprets the `html` option as raw HTML markup. Passing unescaped user-controlled content into `html` allows arbitrary HTML or script injection.
**Prevention:** Use the `text` property instead of `html` when displaying dynamic user input in SweetAlert2 alerts unless raw HTML rendering is explicitly required and sanitized.
