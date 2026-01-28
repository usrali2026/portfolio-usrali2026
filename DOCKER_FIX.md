# Docker Nginx Configuration Fix

## Problem
The Docker build was failing with the error:
```
"server_names_hash_bucket_size" directive is not allowed here in /etc/nginx/conf.d/default.conf:17
```

## Root Cause
The `server_names_hash_bucket_size` directive was placed in the wrong context. This directive **must** be in the `http` context, not in a `server` block.

## Solution

### 1. Fixed nginx-spa.conf
- Removed `server_names_hash_bucket_size` from the server block
- Created a clean SPA configuration with proper routing
- Added security headers and caching rules
- Included health check endpoint

### 2. Created nginx.conf
- Added proper `http` context with `server_names_hash_bucket_size 64;`
- Configured gzip compression
- Set up proper logging and worker processes
- Includes all conf.d/*.conf files

### 3. Updated Dockerfile
- Copies both `nginx.conf` (main config) and `nginx-spa.conf` (server config)
- Properly verifies nginx configuration before starting
- Includes health checks

## Files Created

1. **nginx-spa.conf** - Server block configuration for SPA routing
2. **nginx.conf** - Main nginx configuration with http context
3. **Dockerfile** - Multi-stage build for the application
4. **docker-compose.yml** - Docker Compose configuration

## Usage

### Build and run with Docker Compose:
```bash
docker-compose up -d --build frontend
```

### Build and run with Docker:
```bash
docker build -t cardio-frontend .
docker run -d -p 80:80 --name cardio-frontend cardio-frontend
```

### Verify nginx configuration:
```bash
docker exec cardio-frontend nginx -t
```

### Check logs:
```bash
docker logs cardio-frontend
```

## Key Changes

### Before (Incorrect):
```nginx
# In nginx-spa.conf (server block context)
server {
    listen 80;
    server_names_hash_bucket_size 64;  # ❌ WRONG CONTEXT
    ...
}
```

### After (Correct):
```nginx
# In nginx.conf (http context)
http {
    server_names_hash_bucket_size 64;  # ✅ CORRECT CONTEXT
    include /etc/nginx/conf.d/*.conf;
}

# In nginx-spa.conf (server block context)
server {
    listen 80;
    # No server_names_hash_bucket_size here
    ...
}
```

## Additional Notes

- The `server_names_hash_bucket_size` directive controls the bucket size for the server names hash tables
- It's typically only needed when you have very long server names
- Default value is usually sufficient (32 or 64 depending on CPU cache line size)
- Must always be in `http` context, never in `server` or `location` contexts

## Testing

After building, test the endpoints:
```bash
# Health check
curl http://localhost/health

# Main application
curl http://localhost/
```

## Troubleshooting

If you still encounter issues:

1. **Check nginx syntax:**
   ```bash
   docker exec cardio-frontend nginx -t
   ```

2. **View nginx error logs:**
   ```bash
   docker exec cardio-frontend cat /var/log/nginx/error.log
   ```

3. **Verify files exist:**
   ```bash
   docker exec cardio-frontend ls -la /usr/share/nginx/html/
   ```

4. **Check running config:**
   ```bash
   docker exec cardio-frontend cat /etc/nginx/nginx.conf
   docker exec cardio-frontend cat /etc/nginx/conf.d/default.conf
   ```
