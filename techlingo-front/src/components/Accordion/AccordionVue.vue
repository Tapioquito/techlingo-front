<template>
  <div class="bg-white rounded-md dropdown flex flex-col">
    <div class="rounded flex flex-row justify-around items-center pt-8" @click="isOpen = !isOpen">
      <h1 class="text-indigo-900 poppins-medium text-xl"><slot name="title"></slot></h1>
      <div
        class="w-10 h-10 text-indigo-900 poppins-regular text-4xl bg-slate-200 cursor-pointer flex flex-col items-center justify-center rounded-md"
        :class="isOpen ? 'hidden' : 'block'"
      >
        +
      </div>
      <div
        class="w-10 h-10 text-white poppins-regular text-4xl bg-red-500 cursor-pointer flex flex-col items-center justify-center rounded-md"
        :class="isOpen ? 'block' : 'hidden'"
      >
        -
      </div>
    </div>

    <div class="w-full h-auto rounded-md bg-white p-6" :class="isOpen ? 'flex z-50' : 'hidden'">
      <p class="text-slate-400 poppins-medium text-justify text-lg">
        <slot name="content"></slot>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
export default defineComponent({
  props: {
    questions: { type: Object, required: true, default: () => ({}) }
  },
  name: 'AccordionVue',
  setup() {
    const isOpen = ref(false)
    return {
      isOpen
    }
  }
})
</script>
<style scoped>
.dropdown {
  width: 572px;
  height: 89px;
}
</style>
