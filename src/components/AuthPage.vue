<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center px-4">
    <Toast v-if="toast" :message="toast.message" :type="toast.type" @close="toast = null" />
    
    <div class="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
      <h2 class="text-3xl font-bold text-center mb-6 text-gray-800">
        {{ mode === 'login' ? 'Welcome Back' : 'Create Account' }}
      </h2>
      
      <div class="space-y-4">
        <div v-if="mode === 'signup'">
          <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            v-model="formData.name"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            v-model="formData.email"
            type="email"
            @keypress.enter="handleSubmit"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            v-model="formData.password"
            type="password"
            @keypress.enter="handleSubmit"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
        </div>
        
        <button
          @click="handleSubmit"
          class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {{ mode === 'login' ? 'Login' : 'Sign Up' }}
        </button>
      </div>
      
      <p class="text-center mt-4 text-gray-600">
        {{ mode === 'login' ? "Don't have an account? " : "Already have an account? " }}
        <router-link
          :to="mode === 'login' ? '/auth/signup' : '/auth/login'"
          class="text-blue-600 font-semibold hover:underline"
        >
          {{ mode === 'login' ? 'Sign Up' : 'Login' }}
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store'
import Toast from './Toast.vue'

const props = defineProps({
  mode: {
    type: String,
    required: true,
    validator: (value) => ['login', 'signup'].includes(value)
  }
})

const router = useRouter()
const authStore = useAuthStore()

const formData = reactive({
  email: '',
  password: '',
  name: ''
})

const errors = ref({})
const toast = ref(null)

const validate = () => {
  const newErrors = {}
  if (!formData.email) newErrors.email = 'Email is required'
  if (!formData.password) newErrors.password = 'Password is required'
  if (props.mode === 'signup' && !formData.name) newErrors.name = 'Name is required'
  return newErrors
}

const handleSubmit = () => {
  const newErrors = validate()
  
  if (Object.keys(newErrors).length > 0) {
    errors.value = newErrors
    return
  }

  if (props.mode === 'login') {
    const stored = localStorage.getItem('ticketapp_user')
    if (stored) {
      const user = JSON.parse(stored)
      if (user.email === formData.email && user.password === formData.password) {
        authStore.login(formData)
        router.push('/dashboard')
        return
      }
    }
    toast.value = { message: 'Invalid credentials', type: 'error' }
  } else {
    localStorage.setItem('ticketapp_user', JSON.stringify(formData))
    toast.value = { message: 'Account created! Please login.', type: 'success' }
    setTimeout(() => router.push('/auth/login'), 1500)
  }
}
</script>