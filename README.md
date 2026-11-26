# Cortex

Cortex is an organizational knowledge platform for capturing authorized
work sources, transforming them into traceable knowledge, and retrieving
that knowledge as context for grounded assistance.

This repository is a single-organization web application. The current
foundation keeps the frontend and API as separate applications in one
repository:

- `frontend/` — Next.js, React, TypeScript, Tailwind CSS
- `backend/` — FastAPI service

## Run locally

Requirements: Node.js 20.9 or newer and Python 3.12 or newer.

For Supabase sign-in, copy `frontend/.env.example` to
`frontend/.env.local` and set the project URL and publishable key. Never put
the Supabase secret/service-role key in frontend code or commit it.

In one PowerShell terminal, start the API:

```powershell
cd backend
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -e '.[dev]'
python -m uvicorn app.main:app --reload
```

In another terminal, start the frontend:

```powershell
cd frontend
npm run dev
```

Open `http://localhost:3000` for the frontend, `http://localhost:8000/health`
for the API liveness check, and `http://localhost:8000/docs` for the API
documentation.

## Checks

```powershell
cd frontend
npm run lint
npm run build
```

```powershell
cd backend
python -m pytest
```

The initial API does not yet connect to a database or external AI provider.
No credentials are required to run this foundation. Storage, processing,
authentication, and provider configuration will be introduced in their
planned implementation phases after the related open decisions are resolved.

See [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) for phase sequencing,
[DECISIONS.md](./DECISIONS.md) for adopted decisions and open choices, and
[TODO.md](./TODO.md) for the working task list.
