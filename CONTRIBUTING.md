# Contributing

This Netflix clone uses React (`react-scripts` 4), Firebase, and the TMDB API. Contributions should keep that setup working.

## Prerequisites

Use Node.js **16.20.2**. `react-scripts` 4 does not compile on Node 18 or newer. The workflow in [`.github/workflows/ci.yml`](.github/workflows/ci.yml) installs, tests, and builds with that version. npm comes with Node; this repo uses `package-lock.json`.

## Environment variables

Copy [`.env.example`](.env.example) to `.env` in the project root and replace the placeholders. Create React App only exposes variables that start with `REACT_APP_`. Do not commit `.env`.

Both groups are required to exercise the app:

| Variable | Required for |
| --- | --- |
| `REACT_APP_FIREBASE_API_KEY` | Firebase Auth and Firestore (`src/lib/firebase.prod.js`) |
| `REACT_APP_FIREBASE_AUTH_DOMAIN` | Firebase Auth and Firestore |
| `REACT_APP_FIREBASE_PROJECT_ID` | Firebase Auth and Firestore |
| `REACT_APP_FIREBASE_STORAGE_BUCKET` | Firebase Auth and Firestore |
| `REACT_APP_FIREBASE_MESSAGING_SENDER_ID` | Firebase Auth and Firestore |
| `REACT_APP_FIREBASE_APP_ID` | Firebase Auth and Firestore |
| `REACT_APP_TMDB_API_KEY` | Movie rows and the banner. `src/request.js` sends it as `api_key`. Create one at [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api). |

The README [environment variables](README.md#environment-variables) section lists the same names and the Firebase fields they map to.

## Checks

From the project root, the same commands CI runs:

```bash
npm ci
npm test -- --watchAll=false
npm run build
```

`npm start` serves the app at [http://localhost:3000](http://localhost:3000). Restart it after changing `.env`; Create React App reads those variables at startup.

## Pull requests

Branch from `main` and keep the change focused. Run the checks above before opening a pull request. This project is licensed under the [MIT License](LICENSE).
