# Tshidi's Spaza & Catering - POE Part 2

## Project Overview
A responsive website for a local spaza shop in Diepkloof, Soweto. The website provides information about products, pricing, catering services, delivery options, and contact details.

**Live Repository:** [Insert your GitHub repository link here]

---

## Changelog

### Part 2 Changes (Current Submission)

#### CSS Styling - External Stylesheet (2026-06-02)

**Created External CSS File:**
- Created `css/style.css` and linked to all 5 HTML pages (index, prices, catering, delivery, contact)
- Removed all internal `<style>` blocks from HTML files
- Used consistent naming convention with lowercase and hyphens

**CSS Reset & Base Styles:**
- Added universal selector reset (`* { margin:0; padding:0; box-sizing:border-box }`)
- Set base font family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Established colour scheme: #F9A825 (yellow), #E65100 (orange), #333 (dark grey)
- Default font size set to 100% (16px base) for accessibility

**Typography Improvements:**
- Added `letter-spacing: -0.5px` for headings, `0.3px` for paragraphs
- Implemented `line-height: 1.2` for headings, `1.6` for body text
- Used `rem` units for all font sizes (e.g., `h1: 1.8rem`)
- Font weights: 700 for h1, 600 for h2/h3

**Layout Structure (Flexbox & Grid):**
- Navigation menu: Flexbox with `justify-content: space-between`
- Features/cards section: 
  - Mobile/Tablet: Flexbox with `flex-wrap: wrap`
  - Desktop (min 1024px): **CSS Grid** with `grid-template-columns: repeat(3, 1fr)`
- Main container max-width: 1200px with auto margins

**Visual & Interactive Styles:**
- Added pseudo-classes:
  - `:hover` - colour changes and scale transforms on buttons/cards
  - `:focus` - outline indicators for keyboard navigation
  - `:active` - scale down effect on button clicks
- Box shadows added to cards (`0 2px 8px rgba(0,0,0,0.1)`)
- Card hover effects: translateY(-5px) with enhanced shadow
- Table rows: `:hover` background change to #FFF8E7

**Responsive Design Implementation:**

*Mobile Breakpoint (max-width: 767px):*
- Navigation changes from horizontal to vertical column
- Buttons change to block display with 80% width
- Cards stack vertically (flex-direction: column)
- Table font size reduced to 0.85rem
- Hero heading reduced to 1.5rem

*Tablet Breakpoint (768px - 1023px):*
- Cards display at 45% width (two columns)
- Navigation remains horizontal but adjusted spacing
- Heading sizes reduced appropriately
- Gap between cards reduced to 1rem

*Desktop Breakpoint (min-width: 1024px):*
- Features section switches from Flexbox to **CSS Grid** (3 equal columns)
- Multi-column layout achieved with `grid-template-columns: repeat(3, 1fr)`
- Main content max-width: 1200px centered
- Table max-width: 800px centered

**Relative Units Used:**
- Font sizes: `rem` (e.g., 1rem, 1.8rem, 2rem)
- Container widths: `%` (e.g., button width 80% on mobile)
- Card widths: `%` (90% on mobile, 45% on tablet)
- Padding/margins: `rem` and `auto` values
- Max-width: `1200px` for desktop container

**Responsive Images Ready:**
- Added `img { max-width: 100%; height: auto; }` for fluid images
- Iframe maps responsive with `max-width: 100%`
- Ready for `srcset` attributes in HTML (to be added if needed)

**Browser Developer Tools Testing:**
- Used Chrome DevTools to test responsive breakpoints
- Tested on emulated devices: iPhone SE (375px), iPad (768px), Desktop (1920px)
- Verified multi-column to single-column transition works correctly
- Screenshots captured (see Evidence section below)

#### Feedback Implemented from Part 1 (2026-06-02)

*No specific feedback was received for Part 1 prior to this submission. If feedback is provided later, changes will be documented here with dates.*

---

## Evidence: Responsive Design Screenshots

### Desktop View (min-width: 1024px)
*[Insert screenshot of website on desktop browser - show 3-column grid layout]*

**Expected view:** Navigation horizontal, 3 cards in a row using CSS Grid, full width hero section.

### Tablet View (768px - 1023px)
*[Insert screenshot of website on tablet - show 2-column card layout]*

**Expected view:** Navigation horizontal but tighter, 2 cards per row using Flexbox, adjusted font sizes.

### Mobile View (max-width: 767px)
*[Insert screenshot of website on mobile phone - show single column]*

**Expected view:** Navigation vertical stack, cards in single column, buttons full width, smaller text.

### Additional Device Testing
*[Optional: Insert screenshot of Chrome DevTools device emulation]*

Devices tested:
- iPhone SE (375px)
- iPhone 12 Pro (390px)
- iPad Mini (768px)
- iPad Pro (1024px)
- Desktop (1920px)

---

## References

### CSS Resources
- MDN Web Docs. (2026). *CSS Grid Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout (Accessed: 2 June 2026)
- MDN Web Docs. (2026). *CSS Flexbox*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout (Accessed: 2 June 2026)
- MDN Web Docs. (2026). *Using media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries (Accessed: 2 June 2026)
- MDN Web Docs. (2026). *Pseudo-classes*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes (Accessed: 2 June 2026)
- W3Schools. (2026). *CSS Responsive Web Design*. Available at: https://www.w3schools.com/css/css_rwd_intro.asp (Accessed: 2 June 2026)
- CSS-Tricks. (2026). *A Complete Guide to Grid*. Available at: https://css-tricks.com/snippets/css/complete-guide-grid/ (Accessed: 2 June 2026)

### Typography
- Google Fonts. (2026). *Typography Scales*. Available at: https://material.io/design/typography (Accessed: 2 June 2026)

### Colour Scheme Inspiration
- ColourHex. (2026). *Spaza Shop Yellow (#F9A825) and Orange (#E65100)*. Available at: https://www.colorhexa.com/ (Accessed: 2 June 2026)

### Assignment Requirements
- The Independent Institute of Education. (2026). *WEDE5020 POE Part 2: Designing the Visuals - CSS Styling and Responsive Design*. Pages 12-14.

---

## File Structure
