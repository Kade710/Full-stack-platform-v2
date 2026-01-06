# Full Stack Platform (V2) — Dockerized Portfolio

## Status
Stable  
This is the current, working version of the platform.

A production-style full-stack app showing:
- Docker Compose orchestration
- Nginx reverse proxy (frontend + /api -> backend)
- Node.js backend (HTTP server)
- PostgreSQL + Redis
- Health checks + graceful shutdown
- Secrets hygiene via `.env` + `.env.example`

## Architecture

- **Nginx** serves the built frontend from `/usr/share/nginx/html`
- **Nginx** proxies API requests from `/api/*` to `backend:3000`
- **Backend** connects to Postgres (`db`) and Redis (`redis`)

## Prereqs

- Docker + Docker Compose

## Quick start

1) Create your env file:
```bash
cp .env.example .env
