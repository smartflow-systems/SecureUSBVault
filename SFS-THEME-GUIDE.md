# SFS Family Theme - Implementation Guide

**SmartFlow Systems Design System v1.0.0**
Created by: Gareth Bowers

---

## 🎨 Overview

The SFS Family Theme is a luxurious design system featuring sparkling gold accents against a dark marble brown-tinted black background. This theme uses glassmorphism effects, circuit flow animations, and a carefully crafted color palette to create a premium, cohesive user experience across all SmartFlow applications.

### Brand Identity

- **No Blue**: This theme exclusively uses gold as the primary accent color
- **Primary Colors**: Deep black (#0D0D0D), Brown (#3B2F2F), Sparkling Gold (#FFD700)
- **Typography**: Inter for UI, JetBrains Mono for code
- **Effects**: Glassmorphism with gold-tinted borders and subtle hover glows

---

## 📦 Theme Files

The theme pack includes 4 essential files located in `client/src/styles/sfs-theme/`:

### 1. **sfs-complete-theme.css**
Complete design system with:
- CSS custom properties (variables)
- Glassmorphism utilities (`.glass-card`, `.glass-card-sm`, `.glass-card-lg`)
- Color utilities (`.bg-sf-gold`, `.text-sf-beige`, etc.)
- Button styles (`.btn-sf-gold`, `.btn-sf-outline`, `.btn-sf-glass`)
- Input styles (`.input-sf-glass`)
- Animation keyframes
- Hover effects (`.hover-elevate`, `.hover-glow`)

### 2. **sfs-circuit-flow.js**
Golden circuit background animation:
- Flowing particles and nodes
- Performance-optimized with RAF
- Handles resize and visibility
- Configurable particle count and speed

### 3. **sfs-globals.css**
Global base styles:
- CSS resets
- Typography defaults
- Smooth scrolling
- Custom scrollbars
- Form element resets

### 4. **sfs-theme-config.json**
Configuration values:
- Spacing scale
- Border radii
- Shadow definitions
- Breakpoints
- Z-index scale

---

## 🚀 Installation

### Step 1: Import CSS Files

Add to your main CSS file (e.g., `index.css`):

```css
/* SFS Theme Files */
@import './styles/sfs-theme/sfs-globals.css';
@import './styles/sfs-theme/sfs-complete-theme.css';
```

### Step 2: Add Circuit Flow Component

Use the React component `<SFSCircuitFlow />`:

```tsx
import { SFSCircuitFlow } from '@/components/SFSCircuitFlow';

function MyPage() {
  return (
    <div className="relative min-h-screen bg-sf-black overflow-hidden">
      {/* Circuit Background */}
      <SFSCircuitFlow />

      {/* Your Content */}
      <div className="relative z-10">
        <h1 className="text-sf-beige">Welcome</h1>
      </div>
    </div>
  );
}
```

---

## 🎨 Using the Theme

### Glass Cards

Create beautiful glassmorphism cards:

```tsx
<div className="glass-card p-6 hover-elevate">
  <h3 className="text-sf-beige text-xl font-semibold mb-2">Card Title</h3>
  <p className="text-sf-secondary">Card description with glass effect</p>
</div>
```

**Variants:**
- `.glass-card` - Standard glass card (16px blur)
- `.glass-card-sm` - Small glass card (12px blur)
- `.glass-card-lg` - Large glass card (20px blur)

**Hover Effects:**
- `.hover-elevate` - Lifts on hover with gold glow
- `.hover-glow` - Gold glow effect on hover

### Buttons

```tsx
<!-- Primary Gold Button -->
<button className="btn-sf-gold">
  Get Started
</button>

<!-- Outline Button -->
<button className="btn-sf-outline">
  Learn More
</button>

<!-- Glass Button -->
<button className="btn-sf-glass">
  View Details
</button>
```

### Text Colors

```tsx
<h1 className="text-sf-beige">Main Heading</h1>
<p className="text-sf-secondary">Secondary text</p>
<span className="text-sf-gold">Gold accent</span>
<div className="gradient-gold">Gold Gradient Text</div>
```

### Backgrounds

```tsx
<div className="bg-sf-black">Deep black background</div>
<div className="bg-sf-surface">Brown-tinted surface</div>
<div className="bg-sf-gold">Gold background</div>
<div className="gradient-gold-bg">Gold gradient background</div>
```

### Inputs

```tsx
<input
  type="text"
  className="input-sf-glass w-full"
  placeholder="Enter text..."
/>
```

---

## 🎯 Design Tokens

### Colors

```css
--sf-black: #0D0D0D          /* Deep black */
--sf-brown: #3B2F2F          /* Marble brown */
--sf-gold: #FFD700           /* Sparkling gold */
--sf-gold-accent: #E6C200    /* Darker gold (hover) */
--sf-beige: #F5F5DC          /* Light text */
```

### Spacing

```css
--sf-space-1: 0.25rem   (4px)
--sf-space-2: 0.5rem    (8px)
--sf-space-3: 0.75rem   (12px)
--sf-space-4: 1rem      (16px)
--sf-space-6: 1.5rem    (24px)
--sf-space-8: 2rem      (32px)
--sf-space-12: 3rem     (48px)
--sf-space-16: 4rem     (64px)
--sf-space-20: 5rem     (80px)
```

### Border Radius

```css
--sf-radius-sm: 0.375rem   (6px)
--sf-radius-md: 0.5rem     (8px)
--sf-radius-lg: 0.75rem    (12px)
--sf-radius-xl: 1rem       (16px)
--sf-radius-2xl: 1.5rem    (24px)
--sf-radius-full: 9999px   (Fully rounded)
```

### Transitions ("Crickit Flow")

```css
--sf-transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--sf-transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1)
--sf-transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1)
--sf-transition-bounce: 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

---

## ✨ Animation Examples

### Fade In

```tsx
<div className="animate-sf-fade-in">
  Fades in from bottom
</div>
```

### Slide In

```tsx
<div className="animate-sf-slide-in-left">
  Slides in from left
</div>

<div className="animate-sf-slide-in-right">
  Slides in from right
</div>
```

### Pulse Gold

```tsx
<div className="animate-sf-pulse-gold">
  Pulses with gold glow
</div>
```

---

## 📐 Layout Patterns

### Hero Section

```tsx
<section className="relative min-h-screen overflow-hidden">
  <SFSCircuitFlow />

  <div className="relative z-10 container section">
    <h1 className="text-6xl font-bold mb-6">
      <span className="text-sf-beige">Your Product</span>{" "}
      <span className="gradient-gold">Amazing Tagline</span>
    </h1>

    <p className="text-xl text-sf-secondary mb-8">
      Description of your amazing product
    </p>

    <div className="flex gap-4">
      <button className="btn-sf-gold">Get Started</button>
      <button className="btn-sf-outline">Learn More</button>
    </div>
  </div>
</section>
```

### Feature Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map((feature, i) => (
    <div key={i} className="glass-card p-6 hover-elevate">
      <div className="w-12 h-12 bg-sf-gold/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-sf-gold" />
      </div>

      <h3 className="text-xl font-semibold text-sf-beige mb-2">
        {feature.title}
      </h3>

      <p className="text-sf-secondary">
        {feature.description}
      </p>
    </div>
  ))}
</div>
```

### Dashboard Stats

```tsx
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {stats.map((stat, i) => (
    <div key={i} className="glass-card-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-sf-gold/10 rounded-lg">
          <Icon className="w-6 h-6 text-sf-gold" />
        </div>
      </div>

      <h3 className="text-sm text-sf-secondary mb-1">
        {stat.label}
      </h3>

      <p className="text-3xl font-bold text-sf-beige">
        {stat.value}
      </p>
    </div>
  ))}
</div>
```

---

## 🎛️ Circuit Flow Configuration

Customize the circuit animation in `SFSCircuitFlow.tsx`:

```typescript
const config = {
  particleCount: 30,      // Number of moving particles
  nodeCount: 15,          // Number of static nodes
  pathCount: 12,          // Number of connections
  particleSpeed: 0.5,     // Speed multiplier
};
```

---

## 📱 Responsive Design

The theme includes mobile-first responsive utilities:

```tsx
<!-- Hide on mobile -->
<div className="hidden-mobile">Desktop only</div>

<!-- Hide on desktop -->
<div className="hidden-desktop">Mobile only</div>

<!-- Container with responsive padding -->
<div className="container section">
  Responsive content
</div>
```

---

## ♿ Accessibility

All theme components include:
- Proper focus states (gold outline)
- ARIA labels support
- Screen reader utilities (`.sr-only`)
- Keyboard navigation support
- Reduced motion support

```tsx
<!-- Focus visible states automatically applied -->
<button className="btn-sf-gold">
  Accessible Button
</button>

<!-- Screen reader only text -->
<span className="sr-only">Hidden from view</span>
```

---

## 🎨 Example: Complete Page

```tsx
import { SFSCircuitFlow } from '@/components/SFSCircuitFlow';
import { Shield, Lock, Zap } from 'lucide-react';

export default function ProductPage() {
  return (
    <div className="relative min-h-screen bg-sf-black overflow-hidden">
      {/* Circuit Background */}
      <SFSCircuitFlow />

      {/* Hero Section */}
      <section className="relative z-10 container section">
        <h1 className="text-6xl font-bold mb-6 animate-sf-fade-in">
          <span className="text-sf-beige">Secure</span>{" "}
          <span className="gradient-gold">Authentication</span>
        </h1>

        <p className="text-xl text-sf-secondary mb-8 max-w-2xl">
          Next-generation USB-based authentication with military-grade security
        </p>

        <div className="flex gap-4">
          <button className="btn-sf-gold">
            <Zap className="w-4 h-4 mr-2" />
            Get Started
          </button>
          <button className="btn-sf-outline">Learn More</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container section">
        <h2 className="text-4xl font-bold text-sf-beige mb-12 text-center">
          Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 hover-elevate">
            <div className="w-12 h-12 bg-sf-gold/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-sf-gold" />
            </div>
            <h3 className="text-xl font-semibold text-sf-beige mb-2">
              Hardware Security
            </h3>
            <p className="text-sf-secondary">
              Military-grade encryption with tamper-proof design
            </p>
          </div>

          <div className="glass-card p-6 hover-elevate">
            <div className="w-12 h-12 bg-sf-gold/10 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-sf-gold" />
            </div>
            <h3 className="text-xl font-semibold text-sf-beige mb-2">
              Cold Storage
            </h3>
            <p className="text-sf-secondary">
              Offline credential storage with air-gap security
            </p>
          </div>

          <div className="glass-card p-6 hover-elevate">
            <div className="w-12 h-12 bg-sf-gold/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-sf-gold" />
            </div>
            <h3 className="text-xl font-semibold text-sf-beige mb-2">
              Instant Access
            </h3>
            <p className="text-sf-secondary">
              Authentication in under 200ms with biometric verification
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
```

---

## 📋 Checklist for New Projects

When starting a new SmartFlow app:

- [ ] Copy `client/src/styles/sfs-theme/` folder to your project
- [ ] Import theme CSS in `index.css`
- [ ] Copy `SFSCircuitFlow.tsx` component
- [ ] Use `bg-sf-black` on main containers
- [ ] Apply `.glass-card` to feature cards
- [ ] Use `.btn-sf-gold` for primary actions
- [ ] Add `.gradient-gold` to headings
- [ ] Include circuit flow on hero sections
- [ ] Add "Created by Gareth Bowers" in footer
- [ ] Test responsive breakpoints
- [ ] Verify accessibility (keyboard nav, focus states)

---

## 🎯 Best Practices

1. **Consistency**: Use theme utilities instead of custom colors
2. **Performance**: Circuit flow auto-pauses when page is hidden
3. **Glassmorphism**: Use on darker backgrounds for best effect
4. **Typography**: Use gradient gold sparingly for emphasis
5. **Spacing**: Follow the spacing scale for consistency
6. **Animations**: Use provided animations for smooth transitions
7. **Accessibility**: Always include ARIA labels on interactive elements

---

## 🌟 SFS Family Apps

This theme is used across all SmartFlow Systems products:
- SecureAuth Pro (USB Authentication)
- SecureUSBVault (This app)
- Future SmartFlow applications

All apps share the same luxurious dark gold aesthetic for a unified brand experience.

---

**Created by Gareth Bowers**
SmartFlow Systems Design System v1.0.0
© 2024 SmartFlowSystems. All rights reserved.
