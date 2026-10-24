## 2026-10-24 - Avoid Plaintext Hardcoded Credentials in Client Applications

**Vulnerability:** Hardcoded admin username and plaintext password in component logic (`src/app/pages/inicio/inicio.component.ts`).

**Learning:** Client-side Angular applications bundle TypeScript source logic into JavaScript. Plaintext credentials embedded in component files can be trivially inspected by users or static analysis tools in production bundles.

**Prevention:** Use cryptographic hashing (such as SHA-256 via Web Crypto API `crypto.subtle.digest`) or rely on secure backend authentication endpoints rather than comparing plaintext credential string literals directly in client-side code.
