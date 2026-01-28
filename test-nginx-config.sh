#!/bin/bash

# Test script for nginx configuration validation
# This script validates the nginx configuration files before building Docker

set -e

echo "=========================================="
echo "Nginx Configuration Validation Test"
echo "=========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if nginx is installed
if ! command -v nginx &> /dev/null; then
    echo -e "${YELLOW}Warning: nginx is not installed locally${NC}"
    echo "Skipping local validation. Will validate in Docker container."
    echo ""
else
    echo "✓ nginx is installed locally"
    echo ""
    
    # Test 1: Check nginx.conf syntax
    echo "Test 1: Validating nginx.conf syntax..."
    if nginx -t -c /vercel/sandbox/nginx.conf 2>&1 | grep -q "syntax is ok"; then
        echo -e "${GREEN}✓ nginx.conf syntax is valid${NC}"
    else
        echo -e "${RED}✗ nginx.conf syntax is invalid${NC}"
        nginx -t -c /vercel/sandbox/nginx.conf
        exit 1
    fi
    echo ""
fi

# Test 2: Check for server_names_hash_bucket_size in wrong context
echo "Test 2: Checking for server_names_hash_bucket_size in nginx-spa.conf..."
if grep -q "server_names_hash_bucket_size" /vercel/sandbox/nginx-spa.conf; then
    echo -e "${RED}✗ FAIL: server_names_hash_bucket_size found in nginx-spa.conf${NC}"
    echo "This directive must be in nginx.conf (http context) only!"
    exit 1
else
    echo -e "${GREEN}✓ PASS: server_names_hash_bucket_size not in nginx-spa.conf${NC}"
fi
echo ""

# Test 3: Check for server_names_hash_bucket_size in correct context
echo "Test 3: Checking for server_names_hash_bucket_size in nginx.conf..."
if grep -q "server_names_hash_bucket_size" /vercel/sandbox/nginx.conf; then
    echo -e "${GREEN}✓ PASS: server_names_hash_bucket_size found in nginx.conf${NC}"
else
    echo -e "${YELLOW}⚠ WARNING: server_names_hash_bucket_size not in nginx.conf${NC}"
    echo "This is OK if you don't need it, but it was in the original config."
fi
echo ""

# Test 4: Verify nginx-spa.conf has required directives
echo "Test 4: Checking nginx-spa.conf for required directives..."
required_directives=("listen 80" "server_name" "root /usr/share/nginx/html" "location /")
all_found=true

for directive in "${required_directives[@]}"; do
    if grep -q "$directive" /vercel/sandbox/nginx-spa.conf; then
        echo -e "${GREEN}  ✓ Found: $directive${NC}"
    else
        echo -e "${RED}  ✗ Missing: $directive${NC}"
        all_found=false
    fi
done

if [ "$all_found" = true ]; then
    echo -e "${GREEN}✓ PASS: All required directives present${NC}"
else
    echo -e "${RED}✗ FAIL: Some required directives missing${NC}"
    exit 1
fi
echo ""

# Test 5: Check Dockerfile copies both config files
echo "Test 5: Checking Dockerfile copies both nginx configs..."
if grep -q "COPY nginx.conf /etc/nginx/nginx.conf" /vercel/sandbox/Dockerfile && \
   grep -q "COPY nginx-spa.conf /etc/nginx/conf.d/default.conf" /vercel/sandbox/Dockerfile; then
    echo -e "${GREEN}✓ PASS: Dockerfile copies both config files${NC}"
else
    echo -e "${RED}✗ FAIL: Dockerfile missing config file copies${NC}"
    exit 1
fi
echo ""

# Test 6: Verify health check endpoint
echo "Test 6: Checking for health check endpoint..."
if grep -q "location /health" /vercel/sandbox/nginx-spa.conf; then
    echo -e "${GREEN}✓ PASS: Health check endpoint configured${NC}"
else
    echo -e "${YELLOW}⚠ WARNING: No health check endpoint found${NC}"
fi
echo ""

# Summary
echo "=========================================="
echo -e "${GREEN}All critical tests passed!${NC}"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Build the Docker image: docker-compose up -d --build frontend"
echo "2. Verify in container: docker exec cardio-frontend nginx -t"
echo "3. Test health endpoint: curl http://localhost/health"
echo ""
