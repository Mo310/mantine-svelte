import { getContext } from 'svelte';

import type { MantineProviderProps } from './MantineProvider.svelte';

export const MantineContextKey = 'mantine-context';

export function getMantineContext() {
  const ctx = getContext<MantineProviderProps>(MantineContextKey);

  if (!ctx) {
    throw new Error('[@mantine/core] MantineProvider was not found in tree');
  }

  return ctx;
}

export function getMantineCssVariablesResolver() {
  throw Error('getMantineCssVariablesResolver is not implemented yet');
  // return getMantineContext().cssVariablesResolver;
}

export function getMantineClassNamesPrefix() {
  return getMantineContext().classNamesPrefix;
}

export function getMantineStyleNonce() {
  return getMantineContext().getStyleNonce;
}
