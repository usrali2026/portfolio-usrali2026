# Multi-stage build for Next.js application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the Next.js application
RUN npm run build

# Production stage with nginx
FROM nginx:alpine

# Install wget for health checks
RUN apk add --no-cache wget

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy built Next.js static export (if using static export)
# For standard Next.js, we'll use a different approach
COPY --from=builder /app/.next/standalone /app
COPY --from=builder /app/.next/static /app/.next/static
COPY --from=builder /app/public /app/public

# Copy nginx configurations
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx-spa.conf /etc/nginx/conf.d/default.conf

# Remove any conflicting default configs
RUN rm -f /etc/nginx/conf.d/default.conf.default 2>/dev/null || true

# Verify nginx config and files
RUN nginx -t && \
    echo "=== Nginx config verified ===" && \
    cat /etc/nginx/conf.d/default.conf | head -10

EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
