This repository has multiple front-end variants (Next.js, a CRA/Vite app, Gatsby, React-Static artifacts).

Decision: Next.js will be the primary/production framework. The `package.json` scripts already target Next.

What I recommend (safe, reversible):

1) Archive the CRA/Vite/Gatsby/static app files into `archive/cra-app/` so they are preserved but out of the default project tree. This avoids accidental imports or duplication while keeping everything recoverable.

PowerShell commands to archive (run from the project root):

```powershell
# create archive folder
New-Item -ItemType Directory -Path .\archive\cra-app -Force

# move CRA/Vite app entrypoints and folders (safe, reversible)
Move-Item -Path .\src\App.js -Destination .\archive\cra-app\ -Force
Move-Item -Path .\src\index.js -Destination .\archive\cra-app\ -Force
Move-Item -Path .\src\Components -Destination .\archive\cra-app\ -Force
Move-Item -Path .\src\Resources -Destination .\archive\cra-app\ -Force
Move-Item -Path .\src\setupTests.js -Destination .\archive\cra-app\ -Force
Move-Item -Path .\src\reportWebVitals.js -Destination .\archive\cra-app\ -Force

# move other build/tooling configs and build artifacts
Move-Item -Path .\vite.config.js -Destination .\archive\cra-app\ -Force
Move-Item -Path .\static.config.js -Destination .\archive\cra-app\ -Force
Move-Item -Path .\gatsby-config.js -Destination .\archive\cra-app\ -Force
Move-Item -Path .\build -Destination .\archive\cra-app\ -Force
Move-Item -Path .\artifacts -Destination .\archive\cra-app\ -Force

# Note: Do NOT move .\src\Data (services.json, carouselImages.json, etc.) because Next pages import these files.
```

2) Verify Next runs locally

```powershell
# install deps (only necessary if you haven't already)
npm install

# start Next dev server
npm run dev
```

Next should start at http://localhost:3000 by default.

Notes and rationale
- I intentionally suggested moving rather than deleting. That keeps the CRA/Vite app available for later (if you want to resurrect it or migrate parts of it).
- Keep `src/Data` where it is because Next pages import `../src/Data/*` (moving it would break imports). If you'd rather centralize, we can move the JSON data into `data/` and update imports.
- After archiving, run `npm run dev` and test the site. If you see missing asset errors, check for any imports that reference the archived paths and either restore the specific files or update the imports.

If you want, I can perform the archive moves for you now (I will move files rather than delete them). Say "Please archive CRA files" and I will apply the changes and then update the todo list to show the cleanup completed.
