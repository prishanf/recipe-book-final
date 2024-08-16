<template>
  <div class="text-right">
    <UButton
          icon="i-heroicons-pencil-square"
          size="sm"
          color="primary"
          variant="solid"
          label="Create New Recipe"
          :trailing="false"
          @click="isOpen = true"
        />
  </div>
  <div class="grid grid-cols-4 gap-10">
    
    <template v-for="item in data">
      <NuxtLink :to="`recipe/${item.Id}`">
          <RecipeCard :name="item?.Name" :ingrediants="item?.Ingredients__c"></RecipeCard>
      </NuxtLink>
    </template>
    
  </div>
  <USlideover v-model="isOpen">
      <div class="p-4 flex-1">
        <div class="h-full">
        <h2>Creat New Recipe</h2>
        <UForm :ref=form :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Name" name="name">
          <UInput v-model="state.Name" />
        </UFormGroup>
        <UFormGroup label="Ingredients" name="ngredients">
          <UTextarea v-model="state.Ingredients__c" />
        </UFormGroup>
        <UFormGroup label="Directions" name="directions">
          <UTextarea v-model="state.Directions__c" />
        </UFormGroup>
        <UButton type="submit">
          Submit
        </UButton>
      </UForm>
      </div>
      </div>
    </USlideover>
</template>

<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';
const toast = useToast()
const isOpen = ref(false)

const { data, pending, error, refresh } = await useFetch('/api/recipe',{
    
})

const state = ref({
  Name: 'a',
  Ingredients__c: 'a',
  Directions__c: 'a',
});

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.Name?.trim()) {
    errors.push({ path: 'name', message: 'Name is required' });
  }
  if (!state.Ingredients__c?.trim()) {
    errors.push({ path: 'ingredients', message: 'Ingredients are required' });
   
  }
  if (!state.Directions__c?.trim()) {
    errors.push({ path: 'directions', message: 'Directions are required' });
  }
  return errors;
};

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
 
    // Form is valid, you can submit it to the server or perform other actions
    console.log('Form submitted:', event.data);
    toast.add({ title: 'Recipe Saved Successfully' })
    let {data,error} = await useFetch('/api/recipe',{
        method:'POST',
        body :event.data
    })
    refresh()
    isOpen.value = false;
    state.value = {
      Name: '',
      Ingredients__c: '',
      Directions__c: ''
    }
};

</script>

<style>

</style>