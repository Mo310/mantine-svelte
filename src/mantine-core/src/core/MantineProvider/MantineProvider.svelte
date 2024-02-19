<script lang="ts" context="module">
  import { setContext } from 'svelte';
  import { localStorageColorSchemeManager, type MantineColorSchemeManager } from './color-scheme-managers';
  import type { MantineColorScheme, MantineThemeOverride } from './theme.types';
  import { MantineContextKey } from './Mantine.context';

  export interface MantineProviderProps {
    /** Theme override object */
    theme?: MantineThemeOverride;

    /** Used to retrieve/set color scheme value in external storage, by default uses `window.localStorage` */
    colorSchemeManager?: MantineColorSchemeManager;

    /** Default color scheme value used when `colorSchemeManager` cannot retrieve value from external storage, `light` by default */
    defaultColorScheme?: MantineColorScheme;

    /** Forces color scheme value, if set, MantineProvider ignores `colorSchemeManager` and `defaultColorScheme` */
    forceColorScheme?: 'light' | 'dark';

    /** CSS selector to which CSS variables should be added, `:root` by default */
    cssVariablesSelector?: string;

    /** Determines whether theme CSS variables should be added to given `cssVariablesSelector`, `true` by default */
    withCssVariables?: boolean;

    /** Function to resolve root element to set `data-mantine-color-scheme` attribute, must return undefined on server, `() => document.documentElement` by default */
    getRootElement?(): HTMLElement | undefined;

    /** A prefix for components static classes (for example {selector}-Text-root), `mantine` by default */
    classNamesPrefix?: string;

    /** Function to generate nonce attribute added to all generated `<style />` tags */
    getStyleNonce?(): string;

    /** Function to generate CSS variables based on theme object */
    // cssVariablesResolver?: CSSVariablesResolver;
  }
</script>

<script lang="ts">
  /** Theme override object */
  export let theme: MantineThemeOverride | undefined = undefined;

  /** Used to retrieve/set color scheme value in external storage, by default uses `window.localStorage` */
  export let colorSchemeManager: MantineColorSchemeManager = localStorageColorSchemeManager();

  /** Default color scheme value used when `colorSchemeManager` cannot retrieve value from external storage, `light` by default */
  export let defaultColorScheme: MantineColorScheme = 'light';

  /** Forces color scheme value, if set, MantineProvider ignores `colorSchemeManager` and `defaultColorScheme` */
  export let forceColorScheme: 'light' | 'dark' = 'light';

  /** CSS selector to which CSS variables should be added, `:root` by default */
  export let cssVariablesSelector: string = ':root';

  /** Determines whether theme CSS variables should be added to given `cssVariablesSelector`, `true` by default */
  export let withCssVariables: boolean = true;

  /** Function to resolve root element to set `data-mantine-color-scheme` attribute, must return undefined on server, `() => document.documentElement` by default */
  export let getRootElement: () => HTMLElement | undefined = () => document.documentElement;

  /** A prefix for components static classes (for example {selector}-Text-root), `mantine` by default */
  export let classNamesPrefix: string = 'mantine';

  /** Function to generate nonce attribute added to all generated `<style />` tags */
  export let getStyleNonce: (() => string) | undefined = undefined;

  /** Function to generate CSS variables based on theme object */
  // export let cssVariablesResolver: CSSVariablesResolver; //TODO: check if this is needed

  setContext<MantineProviderProps>(MantineContextKey, {
    theme,
    colorSchemeManager,
    defaultColorScheme,
    forceColorScheme,
    cssVariablesSelector,
    withCssVariables,
    getRootElement,
    classNamesPrefix,
    getStyleNonce,
  });
</script>

<slot />
