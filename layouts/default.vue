<template>
  <div >
    <UContainer class="h-screen">
      <Header></Header>
      <div class="mt-20">
        <slot />
      </div>
     
    <UNotifications />
  </UContainer>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>