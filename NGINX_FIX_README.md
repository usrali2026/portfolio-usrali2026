# Nginx Docker Configuration Fix - Complete Guide

## 🔴 Problem

Your Docker build was failing with this error:

```
[emerg] 7#7: "server_names_hash_bucket_size" directive is not allowed here in /etc/nginx/conf.d/default.conf:17
nginx: [emerg] "server_names_hash_bucket_size" directive is not allowed here in /etc/nginx/conf.d/default.conf:17
nginx: configuration file /etc/nginx/nginx.conf test failed
```

## 🎯 Root Cause

The `server_names_hash_bucket_size` directive was placed in the **wrong context**. 

### Nginx Context Hierarchy:
```
main context
└── events context
└── http context ← server_names_hash_bucket_size goes HERE
    └── server context ← NOT here!
        └── location context
```

**The directive MUST be in the `http` context, NOT in a `server` block.**

## ✅ Solution

This repository now contains the corrected configuration files:

### Files Created/Fixed:

1. **`nginx.conf`** - Main nginx configuration
   - Contains the `http` context
   - Has `server_names_hash_bucket_size 64;` in the correct location
   - Includes global settings (gzip, logging, workers)

2. **`nginx-spa.conf`** - Server block configuration
   - Clean server configuration without context violations
   - SPA routing with `try_files`
   - Security headers
   - Static asset caching
   - Health check endpoint

3. **`Dockerfile`** - Updated Docker build
   - Copies both nginx configurations
   - Validates config with `nginx -t`
   - Includes health checks

4. **`docker-compose.yml`** - Docker Compose setup
   - Ready-to-use configuration
   - Health checks configured

5. **`.dockerignore`** - Build optimization
   - Excludes unnecessary files from build context

## 🚀 Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d --build frontend

# Verify nginx configuration
docker exec cardio-frontend nginx -t

# Check health
curl http://localhost/health

# View logs
docker logs cardio-frontend
```

### Option 2: Using Docker Directly

```bash
# Build the image
docker build -t cardio-frontend .

# Run the container
docker run -d -p 80:80 --name cardio-frontend cardio-frontend

# Verify
docker exec cardio-frontend nginx -t
```

## 🧪 Testing

Run the validation script to verify all configurations:

```bash
./test-nginx-config.sh
```

This script checks:
- ✓ nginx.conf syntax
- ✓ `server_names_hash_bucket_size` is NOT in nginx-spa.conf
- ✓ `server_names_hash_bucket_size` IS in nginx.conf
- ✓ All required directives are present
- ✓ Dockerfile copies both config files
- ✓ Health check endpoint is configured

## 📋 Configuration Details

### nginx.conf (Main Configuration)
```nginx
http {
    # ... other settings ...
    
    # This is the correct location for this directive
    server_names_hash_bucket_size 64;
    
    # Include all server blocks
    include /etc/nginx/conf.d/*.conf;
}
```

### nginx-spa.conf (Server Configuration)
```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    
    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Health check
    location /health {
        return 200 "healthy\n";
    }
}
```

## 🔍 Troubleshooting

### Issue: Build still fails

**Check 1:** Verify both config files are being copied
```bash
docker build --no-cache -t cardio-frontend .
```

**Check 2:** Inspect the built image
```bash
docker run --rm cardio-frontend cat /etc/nginx/nginx.conf
docker run --rm cardio-frontend cat /etc/nginx/conf.d/default.conf
```

### Issue: nginx -t fails in container

**Check the error:**
```bash
docker exec cardio-frontend nginx -t
docker exec cardio-frontend cat /var/log/nginx/error.log
```

### Issue: index.html missing

**Verify build output:**
```bash
docker exec cardio-frontend ls -la /usr/share/nginx/html/
```

For Angular apps, ensure your build output matches the COPY path in Dockerfile.

## 📚 Understanding the Fix

### Before (Incorrect) ❌
```nginx
# nginx-spa.conf
server {
    listen 80;
    server_names_hash_bucket_size 64;  # ❌ WRONG CONTEXT
    # ...
}
```

### After (Correct) ✅
```nginx
# nginx.conf
http {
    server_names_hash_bucket_size 64;  # ✅ CORRECT CONTEXT
    include /etc/nginx/conf.d/*.conf;
}

# nginx-spa.conf
server {
    listen 80;
    # No server_names_hash_bucket_size here
    # ...
}
```

## 🎓 Key Learnings

1. **Context Matters**: Nginx directives have specific contexts where they're allowed
2. **Read the Docs**: Always check [nginx documentation](http://nginx.org/en/docs/) for directive contexts
3. **Test Early**: Use `nginx -t` to validate configuration before deployment
4. **Separate Concerns**: Keep main config (nginx.conf) separate from server configs
5. **Health Checks**: Always include health check endpoints for monitoring

## 📖 Additional Resources

- [Nginx Core Module Documentation](http://nginx.org/en/docs/http/ngx_http_core_module.html)
- [Nginx Configuration Structure](http://nginx.org/en/docs/beginners_guide.html#conf_structure)
- [Docker Multi-stage Builds](https://docs.docker.com/build/building/multi-stage/)

## 📝 Files in This Repository

```
.
├── nginx.conf                 # Main nginx config (http context)
├── nginx-spa.conf            # Server block config
├── Dockerfile                # Multi-stage Docker build
├── docker-compose.yml        # Docker Compose configuration
├── .dockerignore            # Build optimization
├── test-nginx-config.sh     # Validation script
├── NGINX_FIX_README.md      # This file
├── DOCKER_FIX.md            # Detailed fix documentation
├── SOLUTION_SUMMARY.md      # Technical summary
└── QUICK_FIX.md             # Quick reference guide
```

## ✨ Success Indicators

After applying this fix, you should see:

```bash
$ docker-compose up -d --build frontend
[+] Building 45.0s
[+] Running 1/1
 ✔ Container cardio-frontend  Started

$ docker exec cardio-frontend nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful

$ curl http://localhost/health
healthy
```

## 🤝 Support

If you encounter any issues:

1. Run `./test-nginx-config.sh` to validate configurations
2. Check Docker logs: `docker logs cardio-frontend`
3. Verify nginx config: `docker exec cardio-frontend nginx -t`
4. Inspect files: `docker exec cardio-frontend ls -la /usr/share/nginx/html/`

---

**Status**: ✅ All configurations validated and tested  
**Last Updated**: January 28, 2026
