# 🌐 negativeentropy.me

A personal website built with **Next.js** and **TailwindCSS**, styled for performance and flexibility, deployed using **Docker** and **Docker Compose**, and secured with **Let's Encrypt SSL**. This project uses a custom self-hosted stack for full control over DNS and infrastructure.

---

## 🛠 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **Blog**: [Payload CMS](https://payloadcms.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Containerization**: [Docker](https://www.docker.com/)
- **Orchestration**: [Docker Compose](https://docs.docker.com/compose/)
- **Reverse Proxy**: [Nginx](https://nginx.org/)
- **SSL/TLS**: [Certbot (Let's Encrypt)](https://certbot.eff.org/)
- **DNS**: Self-hosted [BIND](https://www.isc.org/bind/)

---

## 🚀 CI/CD with GitHub Actions

This project uses **GitHub Actions** to deploy automatically on every push to the `main` branch.

### 🔧 Deployment Pipeline

- Triggers on push to `main`
- SSHes into the VPS using a secure deploy key
- Pulls latest code
- Rebuilds and restarts Docker containers via `docker-compose`
