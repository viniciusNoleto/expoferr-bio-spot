<template>
  <section class="grid grid-cols-[minmax(15rem,auto)_1fr]">
    <HomeAside />

    <main class="flex flex-col *:grow px-10 py-8">
      <slot />
    </main>
  </section>
</template>

<script lang="ts" setup>

</script>
