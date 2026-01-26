# Health Assistant - AI Coding Guidelines

## Project Overview
This is an Expo React Native app using Expo Router for file-based routing, NativeWind for Tailwind CSS styling, and TypeScript. It features a tab-based navigation with Home and Explore screens, supporting light/dark themes and cross-platform deployment.

## Architecture
- **Routing**: Expo Router with file-based structure in `app/` directory. Root layout (`_layout.tsx`) uses Stack navigator with `(tabs)` as anchor. Tab layout defines Home and Explore screens.
- **Navigation**: Bottom tabs with haptic feedback, custom icons via `IconSymbol` component.
- **Theming**: Automatic light/dark mode using `useColorScheme` hook. Colors defined in `constants/theme.ts`, fonts platform-specific.
- **Styling**: NativeWind for utility classes (e.g., `className="flex-1 bg-green-500"`). Mixes with StyleSheet for complex layouts.
- **Experiments**: New architecture enabled, typed routes, React Compiler.

## Key Patterns
- **Imports**: Use `@/*` path alias (maps to `./*`).
- **Components**: Themed components like `ThemedText`, `ThemedView` for consistent styling. Custom UI components in `@/components/ui/`.
- **Hooks**: `useColorScheme` with web hydration handling in `use-color-scheme.web.ts`.
- **Screens**: Simple functional components, no class components.
- **Assets**: Images in `assets/images/`, referenced in `app.json`.

## Developer Workflows
- **Start dev**: `npm start` or `npx expo start` (opens Expo DevTools).
- **Platform specific**: `npm run android/ios/web` to target platforms.
- **Linting**: `npm run lint` (ESLint with Expo config).
- **Reset**: `npm run reset-project` moves current app to `app-example/`, creates blank `app/` for fresh start.
- **Build**: Use Expo Application Services (EAS) for production builds.

## Conventions
- **File naming**: Kebab-case for directories (e.g., `(tabs)`), camelCase for files.
- **Layout files**: `_layout.tsx` for navigation setup.
- **Modal screens**: Define in root layout (e.g., `modal.tsx`).
- **Tailwind config**: Update `content` paths if needed (currently points to `./App.{js,jsx,ts,tsx}` and `./src/**/*` - adjust for `app/` directory).
- **Babel**: Includes `nativewind/babel` plugin for styling.

## Integration Points
- **Expo SDK**: Version ~54, with router, splash-screen, image, etc.
- **React Navigation**: For tabs and stack.
- **NativeWind**: Tailwind in React Native, requires babel plugin.
- **Reanimated**: For animations (imported in root layout).</content>
<parameter name="filePath">/home/someone_practicing/health app/health-assistant/.github/copilot-instructions.md