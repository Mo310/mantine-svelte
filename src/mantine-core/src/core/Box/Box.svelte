<script lang="ts">
  export let component: string = 'div';
  export let ref: HTMLDivElement | undefined = undefined;
</script>

<svelte:element this={component} class="box" bind:this={ref}>test</svelte:element>

<slot />

<style lang="scss">
  .box {
    color: #fff;
  }
</style>
