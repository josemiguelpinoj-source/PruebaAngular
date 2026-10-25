## 2026-10-25 - DOM XSS via SweetAlert2 html property

**Vulnerability:** Interpolating user-supplied strings directly into the `html` option of `Swal.fire` caused DOM Cross-Site Scripting (XSS).
**Learning:** SweetAlert2's `html` option renders untrusted string interpolation directly into `innerHTML` without Angular's built-in sanitizer escaping it.
**Prevention:** Always sanitize/escape HTML special characters (`&`, `<`, `>`, `"`, `'`) before inserting user input into `Swal.fire({ html: ... })`, or use the `text` option when raw HTML tags are not strictly required.
