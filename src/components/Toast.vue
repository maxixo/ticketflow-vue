<template>
  <div
    :class="['fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg text-white',
             type === 'success' ? 'bg-green-500' : 'bg-red-500']"
  >
    <CheckCircle v-if="type === 'success'" :size="20" />
    <AlertCircle v-else :size="20" />
    <span>{{ message }}</span>
    <button @click="$emit('close')" class="ml-2">
      <X :size="16" />
    </button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { CheckCircle, AlertCircle, X } from 'lucide-vue-next'

defineProps({
  message: String,
  type: String
})

const emit = defineEmits(['close'])

onMounted(() => {
  setTimeout(() => emit('close'), 3000)
})
</script>