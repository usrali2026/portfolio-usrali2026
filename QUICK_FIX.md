# Quick Fix Guide

## The Problem
```
"server_names_hash_bucket_size" directive is not allowed here in /etc/nginx/conf.d/default.conf:17
```

## The Solution (3 Steps)

### Step 1: Fix Your nginx-spa.conf
**Remove** the `server_names_hash_bucket_size` line from line 17 (or wherever it appears in the server block).

### Step 2: Use the Provided nginx.conf
Copy the `nginx.conf` file from this repository. It has `server_names_hash_bucket_size 64;` in the correct `http` context.

### Step 3: Update Your Dockerfile
Make sure your Dockerfile copies BOTH files:
```dockerfile
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx-spa.conf /etc/nginx/conf.d/default.conf
```

## Build and Test
```bash
# Build
docker-compose up -d --build frontend

# Test
docker exec cardio-frontend nginx -t
```

## Why This Works
- `server_names_hash_bucket_size` must be in `http` context (nginx.conf)
- It cannot be in `server` context (nginx-spa.conf)
- This is an nginx requirement, not a bug

## Files Provided
✅ `nginx.conf` - Main config with http context  
✅ `nginx-spa.conf` - Server config without the problematic directive  
✅ `Dockerfile` - Updated to copy both files  
✅ `docker-compose.yml` - Ready to use  

## Done!
Your Docker build should now succeed.
