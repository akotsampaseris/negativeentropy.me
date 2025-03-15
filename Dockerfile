# ---- Base image ----
FROM node:18-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# ---- Dependencies layer ----
FROM base AS deps
# COPY .npmrc ./
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install --frozen-lockfile

# ---- Build layer ----
FROM deps AS builder
COPY . .
RUN pnpm build

# ---- Production layer ----
FROM base AS runner

# Copy only the necessary build output and files
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json .
COPY --from=builder /app/pnpm-lock.yaml .
COPY --from=builder /app/node_modules node_modules

EXPOSE 3000
CMD ["pnpm", "start"]
