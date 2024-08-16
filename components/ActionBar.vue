<template>
  <div class="flex gap-3">
    <ClientOnly>
      
        <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray" variant="ghost"
          aria-label="Theme" @click="isDark = !isDark" />
        <template #fallback>
          <div class="w-8 h-8" />
        </template>
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
          class="border-2"
        />
        
        
      </ClientOnly>
  </div>
  
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})


</script>

<style>

</style>