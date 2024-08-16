<template>
  <div>
    {{$route.params.id}}
    {{data}}
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const { data, pending, error, refresh } = await useFetch('/api/recipe/'+ route.params.id,{
    
})
</script>

<style>

</style>