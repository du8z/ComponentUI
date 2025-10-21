#!/bin/bash

# ComponentUI Installation Script
# This script sets up the ComponentUI development environment

set -e

echo "🚀 ComponentUI Setup Script"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js version
echo "📋 Checking prerequisites..."
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed${NC}"
    echo "Please install Node.js >= 18.0.0 from https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2)
REQUIRED_VERSION="18.0.0"

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
    echo -e "${RED}❌ Node.js version $NODE_VERSION is too old${NC}"
    echo "Required: >= $REQUIRED_VERSION"
    exit 1
fi

echo -e "${GREEN}✓${NC} Node.js $NODE_VERSION"

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo -e "${YELLOW}⚠ pnpm is not installed${NC}"
    echo "Installing pnpm..."
    npm install -g pnpm
    echo -e "${GREEN}✓${NC} pnpm installed"
else
    PNPM_VERSION=$(pnpm -v)
    echo -e "${GREEN}✓${NC} pnpm $PNPM_VERSION"
fi

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
pnpm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓${NC} Dependencies installed successfully"
else
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi

# Success message
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}🎉 Setup completed successfully!${NC}"
echo ""
echo "Next steps:"
echo ""
echo "  1. Start Storybook:"
echo "     ${GREEN}pnpm dev:docs${NC}"
echo ""
echo "  2. Start development server:"
echo "     ${GREEN}pnpm dev${NC}"
echo ""
echo "  3. Run tests:"
echo "     ${GREEN}pnpm test${NC}"
echo ""
echo "  4. Build library:"
echo "     ${GREEN}pnpm build${NC}"
echo ""
echo "📚 Documentation: http://localhost:6006 (after running pnpm dev:docs)"
echo "📖 Read SETUP.md for more information"
echo "🤝 Read CONTRIBUTING.md to start contributing"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
