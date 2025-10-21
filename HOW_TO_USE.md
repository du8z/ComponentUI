# 🎯 Comment Utiliser ComponentUI - Guide Complet

## 📋 Table des Matières

1. [Vue d'ensemble du projet](#vue-densemble)
2. [Voir les composants avec Storybook](#storybook)
3. [Développement avec Vite](#vite)
4. [Structure du projet](#structure)
5. [Utiliser les composants](#utilisation)
6. [Tester les composants](#tests)

---

## 🏗️ Vue d'Ensemble du Projet

ComponentUI est un **monorepo** avec 2 packages principaux:

```
ComponentUI/
├── packages/
│   ├── ui/        → 📦 La bibliothèque de composants
│   └── docs/      → 📚 Documentation Storybook
```

### Package `ui` - La bibliothèque
- Contient tous les composants React
- Build avec Vite
- Testé avec Vitest
- Stylisé avec Tailwind CSS

### Package `docs` - Documentation
- Storybook 7 pour visualiser les composants
- Stories interactives pour chaque composant
- Tests d'accessibilité intégrés

---

## 📚 Storybook - La Meilleure Façon de Voir les Composants

### Lancer Storybook

```bash
pnpm dev:docs
```

**Storybook démarre sur:** http://localhost:6006

### Ce que vous verrez:

1. **Barre latérale gauche** - Liste de tous les composants
2. **Vue centrale** - Composant en action
3. **Panneau inférieur** - Controls interactifs, Documentation, Actions

### Navigation dans Storybook:

```
📖 Introduction
   └─ Welcome page

🎨 Components
   ├─ Button
   │   ├── Default
   │   ├── Variants (primary, secondary, danger, ghost, outline)
   │   ├── Sizes (xs, sm, md, lg, xl)
   │   ├── Loading
   │   ├── With Icons
   │   └── Playground (testez toutes les props!)
   │
   ├─ Input
   │   ├── Default
   │   ├── Types (email, password, number...)
   │   ├── States (error, success, disabled)
   │   ├── Clearable
   │   └── With Icons
   │
   ├─ Card
   ├─ Badge
   ├─ Avatar
   ├─ Spinner
   └─ ... (tous les autres composants)
```

### Utiliser le Playground:

1. Cliquez sur un composant (ex: Button)
2. Allez sur l'onglet "Playground" en bas
3. Utilisez les **Controls** pour modifier les props en temps réel:
   - Changez le texte
   - Changez la variante (primary → danger)
   - Activez/désactivez loading
   - Ajoutez des icônes
   - Etc.

### Tester l'Accessibilité:

1. Ouvrez un composant dans Storybook
2. Cliquez sur l'onglet **"Accessibility"** en bas
3. Vous verrez les tests WCAG AA automatiques

---

## ⚡ Vite - Développement Rapide

### Lancer le serveur Vite

```bash
pnpm dev
```

**Vite démarre sur:** http://localhost:5173/

### Ce que vous verrez:

Une page de développement simple qui dit:
- "ComponentUI Development"
- Instructions pour utiliser Storybook
- Commandes disponibles

### Utiliser Vite pour tester:

Le fichier `packages/ui/src/main.tsx` est votre playground personnel.

**Exemple - Tester vos composants:**

```tsx
// packages/ui/src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

// Importez vos composants
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Input } from './components/Input'
import { Badge } from './components/Badge'
import { Avatar } from './components/Avatar'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Testez vos composants ici */}
        <Card variant="elevated">
          <Card.Header>
            <div className="flex items-center gap-3">
              <Avatar name="John Doe" status="online" size="lg" />
              <div>
                <h2 className="text-xl font-bold">John Doe</h2>
                <Badge color="success" size="sm">Active</Badge>
              </div>
            </div>
          </Card.Header>
          
          <Card.Body>
            <div className="space-y-4">
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
              />
              
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
              />
            </div>
          </Card.Body>
          
          <Card.Footer>
            <div className="flex gap-3">
              <Button variant="primary" size="md">
                Sign In
              </Button>
              <Button variant="ghost" size="md">
                Cancel
              </Button>
            </div>
          </Card.Footer>
        </Card>

        {/* Testez d'autres composants */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Buttons</h3>
          <div className="flex gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
          </div>
          
          <div className="flex gap-3">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
          
          <Button loading>Loading...</Button>
        </div>

      </div>
    </div>
  )
}

const root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
```

**Avantages de Vite:**
- ⚡ Hot Module Replacement (changements instantanés)
- 🔥 Rechargement ultra-rapide
- 🎨 Testez des layouts complets
- 🧪 Testez des interactions complexes

---

## 📁 Structure du Projet Détaillée

```
ComponentUI/
│
├── packages/ui/src/
│   │
│   ├── components/           ← Tous vos composants
│   │   ├── Button/
│   │   │   ├── Button.tsx           ← Code du composant
│   │   │   ├── Button.test.tsx      ← Tests
│   │   │   ├── Button.stories.tsx   ← Stories Storybook
│   │   │   ├── types.ts             ← Types TypeScript
│   │   │   └── index.ts             ← Exports
│   │   │
│   │   ├── Input/
│   │   ├── Card/
│   │   ├── Badge/
│   │   ├── Avatar/
│   │   ├── Spinner/
│   │   ├── Modal/
│   │   ├── Alert/
│   │   ├── Tooltip/
│   │   ├── Checkbox/
│   │   ├── Select/
│   │   ├── Tabs/
│   │   ├── Accordion/
│   │   ├── Pagination/
│   │   ├── Toast/
│   │   └── index.ts         ← Exporte tous les composants
│   │
│   ├── hooks/               ← Hooks utilitaires
│   │   ├── useDisclosure.ts
│   │   ├── useClickOutside.ts
│   │   ├── useFocusTrap.ts
│   │   ├── useKeyPress.ts
│   │   ├── useMediaQuery.ts
│   │   ├── useToast.ts
│   │   └── index.ts
│   │
│   ├── utils/               ← Fonctions utilitaires
│   │   ├── cn.ts            ← Merge classNames
│   │   └── index.ts
│   │
│   ├── styles.css           ← Styles globaux Tailwind
│   ├── main.tsx             ← Entry point Vite (votre playground)
│   └── index.ts             ← Entry point de la lib
│
└── packages/docs/
    ├── .storybook/          ← Config Storybook
    │   ├── main.ts
    │   ├── preview.ts
    │   └── manager.ts
    │
    └── stories/             ← Documentation MDX
        ├── Introduction.mdx
        └── GettingStarted.mdx
```

---

## 🎨 Utiliser les Composants

### Dans Votre Application

```tsx
// 1. Installer la bibliothèque (une fois publiée)
npm install @componentui/ui

// 2. Importer les styles
import '@componentui/ui/styles.css'

// 3. Importer et utiliser les composants
import { Button, Card, Input } from '@componentui/ui'

function MyApp() {
  return (
    <Card>
      <Card.Header>Mon Formulaire</Card.Header>
      <Card.Body>
        <Input label="Email" type="email" />
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Envoyer</Button>
      </Card.Footer>
    </Card>
  )
}
```

### Pendant le Développement (dans ce projet)

```tsx
// Dans packages/ui/src/main.tsx
import { Button } from './components/Button'
import { Card } from './components/Card'
// etc.

// Utilisez-les directement
```

---

## 🧪 Tester les Composants

### Lancer les tests

```bash
# Tous les tests
pnpm test

# Tests en mode watch (se relance automatiquement)
pnpm test:watch

# Tests avec rapport de couverture
pnpm test:coverage
```

### Voir les résultats:

```
 ✓ packages/ui/src/components/Button/Button.test.tsx (44 tests)
 ✓ packages/ui/src/components/Input/Input.test.tsx (86 tests)
 ✓ packages/ui/src/components/Card/Card.test.tsx (80 tests)
 ...
 
 Test Files  6 passed (6)
      Tests  327 passed (327)
```

---

## 🎯 Workflows Recommandés

### Workflow 1: Découvrir les Composants

```bash
1. pnpm dev:docs
2. Ouvrir http://localhost:6006
3. Explorer les composants dans la sidebar
4. Jouer avec les Controls
5. Lire la documentation de chaque composant
```

### Workflow 2: Développer un Nouveau Composant

```bash
1. Créer le dossier: packages/ui/src/components/MyComponent/
2. Créer les fichiers: MyComponent.tsx, types.ts, index.ts
3. Coder le composant
4. Créer MyComponent.stories.tsx
5. Lancer Storybook: pnpm dev:docs
6. Tester visuellement
7. Créer MyComponent.test.tsx
8. Lancer les tests: pnpm test:watch
```

### Workflow 3: Tester une Intégration Complète

```bash
1. Modifier packages/ui/src/main.tsx
2. Créer une interface complète
3. Lancer: pnpm dev
4. Ouvrir http://localhost:5173
5. Tester les interactions
```

---

## 🚀 Commandes Rapides

```bash
# Installation (déjà fait)
pnpm install

# Voir les composants (RECOMMANDÉ)
pnpm dev:docs          → http://localhost:6006

# Développement rapide
pnpm dev               → http://localhost:5173

# Tests
pnpm test              # Une fois
pnpm test:watch        # Mode watch
pnpm test:coverage     # Avec couverture

# Build
pnpm build             # Build la bibliothèque
pnpm build:docs        # Build Storybook

# Qualité du code
pnpm lint              # ESLint
pnpm format            # Prettier
npx tsc --noEmit       # Vérifier TypeScript
```

---

## 💡 Astuces

### Astuce 1: Dark Mode dans Storybook
- Utilisez le bouton en haut à droite (icône lune/soleil)
- Tous les composants supportent le dark mode!

### Astuce 2: Raccourcis Storybook
- `F` - Fullscreen
- `D` - Toggle dark mode
- `A` - Toggle addons panel
- `/` - Search components

### Astuce 3: Hot Reload
- Vite et Storybook ont le hot reload
- Sauvegardez un fichier → changement instantané!

### Astuce 4: Console Browser
- Ouvrez les DevTools (F12)
- Allez dans Console
- Voyez les logs des composants

---

## 🎓 Exemples d'Utilisation

### Exemple 1: Formulaire de Login

```tsx
import { Button, Input, Card, Alert } from '@componentui/ui'

function LoginForm() {
  const [error, setError] = useState('')

  return (
    <Card variant="elevated" className="max-w-md mx-auto">
      <Card.Header>
        <h2 className="text-2xl font-bold">Connexion</h2>
      </Card.Header>
      <Card.Body>
        {error && (
          <Alert type="error" dismissible onDismiss={() => setError('')}>
            {error}
          </Alert>
        )}
        <div className="space-y-4">
          <Input label="Email" type="email" required />
          <Input label="Mot de passe" type="password" required />
        </div>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" fullWidth>
          Se connecter
        </Button>
      </Card.Footer>
    </Card>
  )
}
```

### Exemple 2: Profile Card

```tsx
import { Card, Avatar, Badge, Button } from '@componentui/ui'

function ProfileCard() {
  return (
    <Card variant="outlined" hoverable>
      <Card.Body>
        <div className="flex items-center gap-4">
          <Avatar
            name="Marie Dupont"
            size="xl"
            status="online"
            src="/marie.jpg"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold">Marie Dupont</h3>
            <p className="text-gray-600">Développeuse Full Stack</p>
            <div className="flex gap-2 mt-2">
              <Badge color="primary">React</Badge>
              <Badge color="secondary">TypeScript</Badge>
              <Badge color="success">Tailwind</Badge>
            </div>
          </div>
          <Button variant="outline">Suivre</Button>
        </div>
      </Card.Body>
    </Card>
  )
}
```

---

## 📖 Documentation Supplémentaire

- **COMPONENTS_CREATED.md** - Liste détaillée de tous les composants
- **README.md** - Documentation principale du projet
- **CONTRIBUTING.md** - Guide pour contribuer
- **SUCCESS.md** - Résumé de l'installation

---

## ❓ FAQ

**Q: Quelle est la différence entre `pnpm dev` et `pnpm dev:docs`?**
- `pnpm dev` → Serveur Vite pour développement libre
- `pnpm dev:docs` → Storybook pour voir tous les composants avec documentation

**Q: Où modifier pour tester mes composants rapidement?**
- `packages/ui/src/main.tsx` avec Vite
- Ou créez des stories dans Storybook

**Q: Comment ajouter un nouveau composant?**
- Créez un dossier dans `packages/ui/src/components/`
- Suivez la structure de Button/Input/Card
- Exportez-le dans `components/index.ts`

**Q: Les tests sont obligatoires?**
- Oui pour production
- 6 composants ont déjà des tests complets
- Suivez leur exemple pour les autres

**Q: Comment changer les couleurs/styles?**
- Modifiez `packages/ui/tailwind.config.js`
- Les composants utilisent les tokens Tailwind

---

╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         🎉 Vous êtes prêt à explorer ComponentUI! 🎉                     ║
║                                                                          ║
║              Lancez: pnpm dev:docs                                       ║
║              Puis ouvrez: http://localhost:6006                          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
