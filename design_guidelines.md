# Design Guidelines: USB Cold Storage Authentication System - Investor Demo Platform

## Design Approach

**Selected Approach:** Reference-Based (Security/Enterprise Tech)
**Primary References:** Stripe's clarity + Linear's modern typography + Apple's product showcase + Ledger's security aesthetics
**Design Principle:** Professional investor-grade presentation with emphasis on trust, innovation, and technical sophistication

## Core Design Elements

### Typography System
- **Primary Font:** Inter or SF Pro Display (Google Fonts CDN)
- **Heading Hierarchy:**
  - H1: Bold, 3xl to 6xl responsive scale, tight tracking for impact
  - H2: Semibold, 2xl to 4xl, section headers
  - H3: Medium, xl to 2xl, subsection titles
  - Body: Regular, base to lg, readable line-height (1.6-1.7)
- **Code/Technical Elements:** JetBrains Mono for API examples and technical specs
- **Emphasis:** Strategic use of gradient text for key value propositions

### Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, m-8, gap-6, etc.)
- Section padding: py-20 to py-32 on desktop, py-12 to py-16 on mobile
- Component spacing: gap-8 for grids, gap-4 for cards
- Content containers: max-w-7xl for full sections, max-w-4xl for text-heavy content

### Component Library

**Navigation:**
- Fixed header with glass-morphism effect (backdrop-blur)
- Logo + main nav links + CTA button ("Request Demo")
- Mobile: Hamburger menu with slide-in panel

**Hero Section (Product-First Approach):**
- Split-screen layout: Left: Bold headline + subheadline + dual CTAs ("See Demo" + "Download Whitepaper")
- Right: 3D product visualization or animated product shot
- No traditional centered hero - immediate product focus

**Product Showcase Section:**
- Large product image/3D render with annotation hotspots
- Side-by-side feature callouts in 2-column grid
- Rotating feature highlights with icon + title + description

**Live Demo Simulation:**
- Interactive mockup showing authentication flow
- Step-by-step visualization: Insert USB → Biometric verify → Instant access
- Progress indicators and status messages
- Split view showing user side and system side simultaneously

**Security Dashboard:**
- 3-column grid for encryption specs, tamper detection, audit logs
- Data visualization cards with charts/graphs
- Real-time status indicators (green checkmarks, security badges)

**Use Case Demonstrations:**
- 3-column cards on desktop (2 on tablet, 1 on mobile)
- Each card: Icon + scenario title + description + mini screenshot/diagram
- Scenarios: Job centers, corporate access, government ID, healthcare

**Comparison Matrix:**
- Full-width table layout
- Column headers: Your Solution | YubiKey | FIDO2 | Traditional Passwords
- Row categories with checkmarks/crosses and detailed feature descriptions
- Highlight column for your product

**Technology Deep-Dive:**
- 2-column layout: Left text explanation, Right technical diagram
- Accordion sections for different tech aspects
- Code snippets showing integration examples
- Architecture diagram with blockchain-inspired visual

**Market Opportunity:**
- 4-column stat cards (breach statistics, market size, cost savings, adoption rates)
- Large numbers with contextual descriptions
- Source citations for credibility

**Integration Panel:**
- Code editor mockup showing API integration
- Tabbed interface: REST API | SDK Examples | Webhooks
- Language switcher (JavaScript, Python, Java, etc.)

**Investor Pitch Section:**
- Problem/Solution framework in alternating rows
- Timeline roadmap with milestones
- Team section with professional headshots (if applicable)

**Footer:**
- 4-column layout: About, Use Cases, Resources, Contact
- Newsletter signup with security-focused copy
- Social proof: "Trusted by X organizations" + logos
- Legal links and certifications/compliance badges

### Images

**Required Images:**
1. **Hero Product Shot:** High-quality render of USB authentication device with dramatic lighting, placed right side of split-screen hero
2. **3D Product Visualization:** Rotating or interactive view showing device from multiple angles, annotated with feature callouts
3. **Authentication Flow Screenshots:** 3-4 UI mockups showing login process from user perspective
4. **Security Dashboard Interface:** Mockup of admin panel with encryption status, logs, and monitoring
5. **Use Case Mockups:** 3-6 contextual images showing device in different scenarios (office desk, job center kiosk, corporate terminal)
6. **Integration Examples:** Screenshots of code editor and API documentation
7. **Architecture Diagrams:** Technical illustrations showing blockchain-inspired credential flow and cold storage mechanism
8. **Comparison Visual:** Infographic-style comparison showing your device vs. competitors
9. **Partner/Client Logos:** If available, for social proof section

**No large traditional hero background image** - using product-first split-screen approach instead.

### Accessibility & Polish
- WCAG AA contrast ratios throughout
- Focus states on all interactive elements with visible ring
- Keyboard navigation support
- Skip-to-content link
- Loading states for interactive demos
- Smooth scroll behavior between sections
- Consistent hover states: subtle scale (1.02) or brightness increase

### Animations
**Minimal, Strategic Use Only:**
- Hero product: Gentle rotation or subtle glow effect
- Section reveals: Fade-in on scroll (intersection observer)
- Interactive demo: State transitions with 200-300ms duration
- Stat counters: Count-up animation on viewport enter
- No parallax, no excessive motion