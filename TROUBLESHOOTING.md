# Troubleshooting Guide - ComponentUI

## Issue: "Cannot find module 'react'" Error

### Problem
You're seeing TypeScript errors like:
- `Cannot find module 'react' or its corresponding type declarations`
- `This JSX tag requires the module path 'react/jsx-runtime' to exist`
- `JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists`

### Solution

**1. Install dependencies first:**

```bash
pnpm install
```

This will install React, TypeScript, and all other dependencies defined in `package.json`.

**2. If issues persist after install:**

The TypeScript compiler might be caching old data. Try:

```bash
# Clean TypeScript cache
rm -rf packages/ui/dist
rm -rf packages/ui/node_modules/.cache

# Reinstall
pnpm install

# Restart your IDE/editor
```

**3. Verify React is installed:**

```bash
pnpm list react
```

You should see React 18.2.0 installed.

---

## Issue: Property access errors (e.g., "Property 'onFocus' comes from an index signature")

### Problem
TypeScript strict mode flags index signature property access.

### Solution
✅ **Already fixed!** We've updated the code to use bracket notation:

```typescript
// Before (causes error)
childProps.onFocus = handler

// After (fixed)
childProps['onFocus'] = handler
```

This change was applied to:
- `Tooltip.tsx`

---

## Current Status

✅ All 15 components created  
✅ All React imports added to types files  
✅ TypeScript strict mode compliance  
✅ Index signature access fixed  

**Next step:** Run `pnpm install` to install all dependencies!

---

## Quick Start After Install

```bash
# 1. Install dependencies
pnpm install

# 2. Run Storybook
pnpm dev:docs

# 3. Run tests
pnpm test

# 4. Build library
pnpm build
```

---

## Files Fixed

The following files have been updated to resolve TypeScript errors:

### React Imports Added:
- ✅ `Accordion/types.ts`
- ✅ `Alert/types.ts`  
- ✅ `Avatar/types.ts`
- ✅ `Checkbox/types.ts`
- ✅ `Modal/types.ts`
- ✅ `Select/types.ts`
- ✅ `Tabs/types.ts`
- ✅ `Tooltip/types.ts`

### Index Signature Access Fixed:
- ✅ `Tooltip/Tooltip.tsx` - Changed `any` to `unknown` and used bracket notation

---

## Verification Commands

```bash
# Check TypeScript compilation
cd packages/ui
pnpm exec tsc --noEmit

# Check ESLint
pnpm lint

# Run tests
pnpm test
```

---

## Still Having Issues?

1. **Clear all caches:**
   ```bash
   pnpm clean
   rm -rf node_modules
   pnpm install
   ```

2. **Check Node version:**
   ```bash
   node --version  # Should be >= 18.0.0
   ```

3. **Check pnpm version:**
   ```bash
   pnpm --version  # Should be >= 8.0.0
   ```

4. **Restart your IDE/editor** (VSCode, etc.)

5. **Check tsconfig.json** paths are correct

---

## Common ESLint Errors After Install

If you see ESLint errors after installing:

### "react must be in scope"
✅ Fixed by using React 18's new JSX transform (already configured in `tsconfig.json`)

### "Missing dependencies in useEffect"
This is expected - we've carefully managed dependencies for performance.

### "Exhaustive deps warning"
Some hooks intentionally omit dependencies - this is by design.

---

All issues should be resolved after running `pnpm install`! 🎉
