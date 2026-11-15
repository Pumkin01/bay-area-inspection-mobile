# Bay Area Inspection Services — mobile update

Updated React website with a concise mobile homepage, larger mobile logo,
simplified navigation, service links, expandable FAQs, and a compact footer.

Based on https://github.com/hamzaalinaimzoda/Bay-area-inspection-services-

## Local preview

Requires Node.js and pnpm. From this repository folder:

    pnpm install --ignore-scripts

PowerShell:

    $env:PORT = "5173"
    $env:BASE_PATH = "/"
    pnpm --filter @workspace/bay-area-inspection exec vite --host 127.0.0.1

Open http://127.0.0.1:5173 and use a mobile viewport to review the redesign.

## Validation

    pnpm exec tsc -b lib/api-client-react
    pnpm --filter @workspace/bay-area-inspection run typecheck

With PORT and BASE_PATH configured as above:

    pnpm --filter @workspace/bay-area-inspection exec vite build

The production package build also runs the existing prerender script.
The commands above validate TypeScript and the browser bundle.

## Editing

- Mobile homepage: artifacts/bay-area-inspection/src/components/sections/MobileHome.tsx
- Mobile homepage styles: artifacts/bay-area-inspection/src/components/sections/mobile-home.css
- Navigation/footer: artifacts/bay-area-inspection/src/components/layout/
- Shared styles: artifacts/bay-area-inspection/src/index.css

## Backend and hosting

This repository contains source code, not a deployed website. Booking submission,
email, CRM, and database features require separate backend configuration.
No secrets, installed dependencies, or generated build output are included.
See README-EXPORT.md for the original project structure.
