# GSAP Learning Projects - Notes & Documentation

A collection of interactive GSAP (GreenSock Animation Platform) animation projects demonstrating various animation techniques and concepts.

---

## 📑 Project Overview

This workspace contains multiple GSAP animation projects, each showcasing different animation patterns, effects, and interactions.

### Key GSAP Concepts Covered
- **gsap.to()** - Animate from initial to final state
- **gsap.from()** - Animate from final to initial state (reverse)
- **Timelines** - Sequential animations with timeline control
- **ScrollTrigger** - Scroll-based animations
- **Stagger** - Delayed animation of multiple elements
- **Easing functions** - Power, elastic, and custom easing
- **Interactions** - Mouse events with dynamic animations
- **SVG animations** - Path morphing and SVG attribute manipulation

---

## 📁 Project Breakdown

### 🎯 Root Project (index.html, script.js, style.css)
**Concept:** Basic GSAP Animation Introduction

**Key Techniques:**
- **gsap.to()** - Box animates with rotation, scale, color change, infinite repeat with yoyo effect
- **gsap.from()** - Second box animates from a transformed state back to original
- **Text Animation** - Multiple h1 elements with staggered fade-in animations

**Learning Notes:**
- `duration` - Controls animation speed in seconds
- `delay` - Waits before animation starts
- `repeat: -1` - Infinite repetition
- `yoyo: true` - Animation reverses back to start
- `stagger: 0.3` - Delays each element by 0.3s

---

### 📝 Breaking Text
**Location:** `breaking text/`

**Concept:** Text splitting and sequential character animation

**Key Techniques:**
- **Text Breaking** - Splits text into individual character spans
- **Class-based Separation** - First half gets class 'a', second half gets class 'b'
- **Staggered Animation** - Characters animate in from opposite directions

**How It Works:**
1. Extracts h1 text content
2. Splits into individual characters
3. Wraps each character in a span with class assignment based on position
4. First half animates from top with positive stagger delay (+0.15)
5. Second half animates from top with negative stagger delay (-0.15) for converging effect

**Code Pattern:**
```javascript
gsap.from("h1 .a", { opacity:0, duration:0.7, y:50, stagger:0.15 })
gsap.from("h1 .b", { opacity:0, duration:0.7, y:50, stagger:-0.15 })
```

---

### 🎯 Cursor
**Location:** `cursor/`

**Concept:** Custom interactive cursor with hover effects

**Key Techniques:**
- **Mouse Tracking** - Cursor follows mouse movement with smooth animation
- **Scale Effects** - Cursor scales up on hover over images
- **Dynamic Text** - Cursor displays "view more" text on element hover

**Functionality:**
- Custom cursor element positioned via `gsap.to()`
- `mousemove` event tracks clientX/clientY coordinates
- `mouseenter` triggers scale: 4 effect with text display
- `mouseleave` reverts to scale: 1 and clears text
- `duration: 0.3` provides smooth following animation

**Notes:**
- Requires HTML structure with `#main`, `#cursor`, and `#image` elements
- Default browser cursor should be hidden via CSS (cursor: none)

---

### 🔬 Experiments
**Location:** `experiments/`

**Concept:** ScrollTrigger introduction with text transformation

**Key Techniques:**
- **ScrollTrigger Plugin** - Requires gsap ScrollTrigger extension
- **Transform on Scroll** - Text translates horizontally as user scrolls
- **Scrub Effect** - Animation speed tied to scroll speed (scrub: 2)
- **Pin** - Element stays fixed during animation playback

**Configuration:**
```javascript
scrollTrigger: {
    trigger: '#page2',           // Element that triggers animation
    scroller: 'body',            // Scrollable element
    start: 'top 0%',             // Animation starts when trigger hits top
    end: 'top -150%',            // Continues as user scrolls
    scrub: 2,                    // 2-second smoothing lag
    pin: true                    // Pins element during animation
}
```

---

### 🧭 Nav (Navigation)
**Location:** `nav/`

**Concept:** Sidebar navigation with timeline control and reversal

**Key Techniques:**
- **Timeline Creation** - `gsap.timeline()` for coordinated animations
- **Play/Pause Control** - Timeline controlled via click events
- **Reverse Animation** - `tl.reverse()` for closing animation
- **Staggered Elements** - Menu items animate with stagger delay

**Animation Sequence:**
1. Full-screen nav slides in from right (right: 0)
2. Menu h4 items fade and slide in with stagger: 0.25
3. Close icon fades in
4. Timeline paused until menu clicked
5. On close click, timeline reverses with smooth out-animation

**Code Pattern:**
```javascript
var tl = gsap.timeline();
tl.to('#full', { right:0, duration:1, ease:"power2.out" })
tl.from('#full h4', { x:100, opacity:0, duration:0.8, stagger:0.25 })
tl.pause();
menu.addEventListener('click', () => tl.play())
close.addEventListener('click', () => tl.reverse())
```

---

### 🎬 SCROLL TRIGGER
**Location:** `SCROLL TRIGGER/`

**Concept:** Scroll-based animations with multiple elements

**Key Techniques:**
- **Initial Animation** - Non-scroll box animates on page load
- **Scroll-triggered Animation** - Second box only animates on scroll
- **Markers** - Debug visualization of trigger start/end points
- **Progressive Scroll Animation** - Box transformation follows scroll position

**Two Animations:**
1. **#page1 #box** - Simple load animation (rotate 360°, fade in, scale up)
2. **#page2 #box** - Scroll-triggered with custom start/end points
   - Starts when box is 60% down viewport
   - Completes when box reaches 30% down viewport
   - Scrub: 1 ties animation to scroll speed smoothly

---

### 🎨 Sidebar Animation
**Location:** `sidebar animation/`

**Concept:** Full-screen sidebar toggle with menu animation

**Key Techniques:**
- **Timeline Pause/Play** - Animation controlled programmatically
- **Ease Functions** - "power2.out" for natural deceleration
- **Coordinated Animation** - Multiple elements animate in sequence
- **Icon Interaction** - Menu icon triggers, close icon reverses

**Animation Flow:**
1. Icon click triggers timeline play
2. Sidebar slides from right edge to 0
3. Menu h4 items cascade in from right with stagger
4. Close icon fades in
5. Icon click triggers reverse animation

**Notes:**
- Demonstrates timeline control beyond simple play/pause
- Shows practical UX pattern for mobile/responsive navigation

---

### 🎭 SVG
**Location:** `SVG/`

**Concept:** SVG path morphing based on mouse position

**Key Techniques:**
- **SVG Path Manipulation** - Real-time path attribute changes
- **Mouse Coordinate Binding** - Path curves follow cursor
- **Quadratic Bezier Curves** - `Q` command for curved paths
- **Attribute Animation** - Using `attr: { d: path }` for SVG properties
- **Elastic Easing** - Path returns with bouncy elastic.out effect

**How It Works:**
1. SVG path defined as quadratic curve: `M 10 100 Q 350 0 690 100`
2. On mousemove, Q control point updates to cursor coordinates
3. gsap animates path change smoothly with 0.3s duration
4. On mouseleave, path morphs back to neutral position with elastic bounce

**Key Properties:**
```javascript
gsap.to('svg path', {
    duration: 0.3,
    attr: { d: path },        // SVG attribute targeting
    ease: "elastic.out(1,0,2" // Bouncy return effect
})
```

**Notes:**
- Requires SVG markup with path element
- Demonstrates advanced gsap attr targeting for SVG
- Shows real-time interactive animation

---

## 🔑 Key GSAP Concepts Recap

| Concept | Usage | Example |
|---------|-------|---------|
| **to()** | Initial → Final state | `gsap.to('#box', { x: 300 })` |
| **from()** | Final → Initial state | `gsap.from('#box', { opacity: 0 })` |
| **duration** | Animation length in seconds | `duration: 2` |
| **delay** | Wait before animation starts | `delay: 1` |
| **stagger** | Delay between multiple elements | `stagger: 0.3` (or -0.3 reverse) |
| **repeat** | Loop count (-1 = infinite) | `repeat: -1` |
| **yoyo** | Reverse animation back | `yoyo: true` |
| **ease** | Animation curve | `ease: "power2.out"` |
| **scrollTrigger** | Scroll-based animation | ScrollTrigger plugin required |
| **timeline** | Sequential animations | `gsap.timeline()` for coordination |

---

## 📦 Dependencies

All projects use:
- **GSAP 3.13.0+** - Core animation library
- **HTML5 Canvas API** - For interactive features
- **CSS3** - For styling and transformations

ScrollTrigger projects require:
- **gsap ScrollTrigger Plugin** - For scroll-based animations

---

## 💡 Learning Path

Recommended progression:
1. **Root project** - Understand basic gsap.to() and gsap.from()
2. **Breaking Text** - Learn text manipulation and stagger effects
3. **Cursor** - Understand event-driven animations and real-time updates
4. **Nav** - Learn timeline control and reverse animations
5. **SCROLL TRIGGER** - Introduction to scroll-based animations
6. **Experiments** - Advanced ScrollTrigger configuration
7. **Sidebar Animation** - Practical UX pattern implementation
8. **SVG** - Complex interactive animations with SVG paths

---

## 🎓 Notes & Best Practices

- Use timelines for coordinated multi-element animations
- Stagger values can be positive (sequential) or negative (reverse sequential)
- ScrollTrigger requires the plugin to be loaded separately
- Easing functions significantly impact animation feel
- Mouse events combined with gsap.to() create responsive interactions
- SVG attr() targeting allows animating any SVG property
- Always consider performance with infinite repeating animations

---

*Last Updated: January 2026*
*GSAP Documentation: https://greensock.com/docs/*
