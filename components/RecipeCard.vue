<template>
  <div class="border p-3 rounded-md shadow-lg flex flex-col gap-3">
    <h1>{{name}}</h1>
    <div class="mt-3 text-sm">
      {{ ingrediants  }}
    </div>
  </div>
  
</template>

<script lang="ts" setup>

const props = defineProps({
  name:String,
  ingrediants:String
})

</script>

<style>

</style>