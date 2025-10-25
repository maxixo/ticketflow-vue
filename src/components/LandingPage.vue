
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div class="text-center">
          <h1 class="text-5xl font-bold mb-4">TicketFlow</h1>
          <p class="text-xl mb-8 max-w-2xl mx-auto">
            Streamline your support workflow with our powerful ticket management system
          </p>
          <div class="flex gap-4 justify-center">
            <router-link
              to="/auth/login"
              class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Login
            </router-link>
            <router-link
              to="/auth/signup"
              class="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Get Started
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Decorative Circle -->
      <div class="absolute top-20 right-10 w-64 h-64 bg-white opacity-10 rounded-full"></div>
      
      <!-- Wavy Bottom -->
      <svg class="absolute bottom-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,64 C480,120 960,0 1440,64 L1440,120 L0,120 Z" fill="#f9fafb"></path>
      </svg>
    </div>

    <!-- Features Section -->
    <div class="max-w-7xl mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose TicketFlow?</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(feature, idx) in features" :key="idx" 
             class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-3 text-gray-800">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Decorative Circle -->
    <div class="relative">
      <div class="absolute -bottom-32 left-10 w-48 h-48 bg-purple-200 opacity-30 rounded-full"></div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8 mt-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; 2025 TicketFlow. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>


const features = [
  { title: 'Easy Management', desc: 'Create, update, and track tickets effortlessly' },
  { title: 'Real-time Updates', desc: 'Stay informed with instant status changes' },
  { title: 'Secure & Reliable', desc: 'Your data is protected with enterprise-grade security' }
]
</script>