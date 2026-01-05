# Security Policy

## Version Information
This project uses Next.js 15.5.9 which includes critical security patches for:
- CVE-2025-66478: Remote Code Execution vulnerability
- CVE-2025-55183: Source code exposure vulnerability  
- CVE-2025-55184: Denial of Service vulnerability
- GHSA-7m27-7ghc-44w9: DoS with Server Actions
- GHSA-3h52-269p-cp9r: Information exposure in dev server
- GHSA-67rr-84xm-4c7r: DoS via cache poisoning
- GHSA-g5qg-72qw-gw5v: Cache Key Confusion for Image Optimization
- GHSA-xv57-4mr9-wg8v: Content Injection Vulnerability
- GHSA-4342-x723-ch2f: Improper Middleware Redirect Handling (SSRF)
- GHSA-qpjv-v59x-3qc4: Race Condition to Cache Poisoning
- GHSA-f82v-jwr5-mffw: Authorization Bypass in Middleware

## Security Updates Applied

### 1. Next.js Version Update
- Updated from Next.js 15.0.2 to 15.5.9
- Includes all critical security patches
- All npm audit vulnerabilities resolved (0 vulnerabilities)

### 2. Security Headers
The following security headers have been configured in `next.config.ts`:

- **Strict-Transport-Security**: Enforces HTTPS connections
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-XSS-Protection**: Enables XSS filtering
- **Content-Security-Policy**: Controls resource loading
- **Referrer-Policy**: Controls referrer information
- **Permissions-Policy**: Restricts browser features

### 3. Next.js Security Features Enabled
- React Strict Mode: Enabled for better error detection
- Powered-By Header: Disabled to reduce information leakage
- Image Security: Configured with strict content security policies

## Environment Variables

### Setup
1. Never commit `.env`, `.env.local`, or any files containing secrets
2. Use `.env.example` as a template (already in `.gitignore`)
3. Store sensitive data in environment variables, not in code

### Example Environment Variables
Create a `.env.local` file with:

```bash
# Application
NODE_ENV=development

# Public variables (accessible in browser)
NEXT_PUBLIC_APP_URL=http://localhost:5000

# Private variables (server-side only)
# API_KEY=your_secret_key
# DATABASE_URL=your_database_url
```

## Security Best Practices

### 1. Keep Dependencies Updated
```bash
npm outdated
npm update
```

### 2. Run Security Audits
```bash
npm audit
npm audit fix
```

### 3. Use Official Security Fix Tool
```bash
npx fix-react2shell-next
```

### 4. Input Validation
- Always validate and sanitize user input
- Use TypeScript for type safety
- Implement server-side validation

### 5. Authentication & Authorization
- Use secure session management
- Implement proper role-based access control
- Use HTTP-only cookies for sensitive data

### 6. API Security
- Implement rate limiting
- Use CORS properly
- Validate all API inputs

### 7. Secret Management
- Rotate secrets regularly (especially after security incidents)
- Use environment-specific secrets
- Never hardcode credentials

## Reporting Security Issues

If you discover a security vulnerability:
1. Do NOT open a public issue
2. Contact the maintainers directly
3. Provide detailed information about the vulnerability

## Security Checklist

- [x] Next.js updated to secure version (15.0.7+)
- [x] Security headers configured
- [x] React Strict Mode enabled
- [x] Image security configured
- [x] .gitignore includes .env files
- [x] Powered-by header disabled
- [ ] Environment variables properly configured
- [ ] Regular dependency updates scheduled
- [ ] Security audit process established

## Additional Resources

- [Next.js Security Documentation](https://nextjs.org/docs/advanced-features/security-headers)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Blog](https://nextjs.org/blog/security-update-2025-12-11)

## Last Updated
January 2026

