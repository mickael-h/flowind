# Color Usage Strategy

## Overview

Our design system uses a systematic approach to color usage across light and dark modes. Instead of hardcoding different colors for each mode, we use different shades from the same color palette.

## Color Palette Shades

Each color has 11 shades (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950):

- **50-200**: Very light tints (backgrounds, subtle accents)
- **300-400**: Light shades (borders, secondary elements)
- **500**: Base color (primary elements)
- **600-700**: Darker shades (hover states, emphasis)
- **800-950**: Very dark shades (text, high contrast)

## Light Mode Usage

### Backgrounds

- **Primary backgrounds**: `white` or `gray-50`
- **Secondary backgrounds**: `gray-100` to `gray-200`
- **Card backgrounds**: `white`

### Borders

- **Default borders**: `gray-300`
- **Focus borders**: `primary-500`, `success-500`, `error-500`
- **Hover borders**: `primary-600`, `success-600`, `error-600`

### Text

- **Primary text**: `gray-900`
- **Secondary text**: `gray-600` to `gray-700`
- **Muted text**: `gray-500`
- **Interactive text**: `primary-600`

### Interactive Elements

- **Primary buttons**: `primary-600` background, `white` text
- **Secondary buttons**: `secondary-600` background, `white` text
- **Outline buttons**: `primary-600` border and text
- **Ghost buttons**: `primary-600` text

## Dark Mode Usage

### Backgrounds

- **Primary backgrounds**: `gray-900`
- **Secondary backgrounds**: `gray-800`
- **Card backgrounds**: `gray-800`

### Borders

- **Default borders**: `gray-600`
- **Focus borders**: `primary-400`, `success-400`, `error-400`
- **Hover borders**: `primary-500`, `success-500`, `error-500`

### Text

- **Primary text**: `white`
- **Secondary text**: `gray-300`
- **Muted text**: `gray-400`
- **Interactive text**: `primary-400`

### Interactive Elements

- **Primary buttons**: `primary-500` background, `white` text
- **Secondary buttons**: `secondary-500` background, `white` text
- **Outline buttons**: `primary-400` border and text
- **Ghost buttons**: `primary-400` text

## Key Principles

1. **Use lighter shades in dark mode**: 400 instead of 600, 500 instead of 700
2. **Maintain contrast**: Dark backgrounds need lighter text and borders
3. **Consistent patterns**: Same color family, different shade intensity
4. **Accessibility first**: Ensure sufficient contrast ratios

## Component Examples

### Buttons

- Light: `primary-600` bg, `white` text
- Dark: `primary-500` bg, `white` text

### Inputs

- Light: `gray-300` border, `white` bg, `gray-900` text
- Dark: `gray-600` border, `gray-700` bg, `white` text

### Focus States

- Light: `primary-500` border, `primary-200` ring
- Dark: `primary-400` border, `primary-900/20` ring
