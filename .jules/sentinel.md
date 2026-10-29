## 2026-10-29 - SweetAlert2 HTML Injection Risk
**Vulnerability:** DOM XSS when passing unescaped user input into the `html` field of SweetAlert2 (`Swal.fire`).
**Learning:** SweetAlert2 parses and renders raw HTML when the `html` parameter is used. If user-controlled data is concatenated into `html` without escaping HTML special characters, any HTML or JavaScript supplied by the user will be executed in the DOM.
**Prevention:** Always escape HTML special characters (`&`, `<`, `>`, `"`, `'`) before interpolating string variables into `Swal.fire`'s `html` parameter or use `text` parameter when rich HTML formatting is not required.
