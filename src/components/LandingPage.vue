<script setup>
import ZapIcon from './ZapIcon.vue'
import SocialIcon from './SocialIcon.vue'

const socialLinks = [
  {
    href: "#",
    path: "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.15 2.33,6.94C2.33,8.43 3.1,9.75 4.17,10.55C3.42,10.53 2.73,10.32 2.1,10V10.03C2.1,12.11 3.55,13.85 5.59,14.24C5.22,14.34 4.83,14.39 4.42,14.39C4.15,14.39 3.88,14.36 3.62,14.31C4.17,16.02 5.75,17.21 7.61,17.24C6.17,18.36 4.38,19.04 2.42,19.04C2.06,19.04 1.71,19.02 1.36,18.97C3.24,20.18 5.49,20.86 7.9,20.86C16,20.86 20.22,14.13 20.22,8.79C20.22,8.6 20.22,8.4 20.21,8.21C21.08,7.6 21.84,6.86 22.46,6Z"
  },
  {
    href: "#",
    path: "M12,2.4C6.69,2.4 2.4,6.69 2.4,12C2.4,16.22 5.17,19.78 9.11,20.94C9.57,21.02 9.77,20.73 9.77,20.47C9.77,20.24 9.76,19.56 9.76,18.81C7.38,19.26 6.88,18.23 6.72,17.7C6.6,17.38 6.07,16.63 5.7,16.48C5.4,16.36 4.95,15.91 5.68,15.9C6.35,15.89 6.81,16.5 6.96,16.78C7.72,18.06 8.97,17.68 9.53,17.43C9.6,16.88 9.83,16.5 10.08,16.29C8.07,16.06 5.92,15.28 5.92,11.83C5.92,10.74 6.29,9.84 6.92,9.14C6.82,8.91 6.49,7.86 7.02,6.59C7.02,6.59 7.78,6.34 9.75,7.66C10.47,7.46 11.25,7.36 12,7.36C12.75,7.36 13.53,7.46 14.25,7.66C16.22,6.34 16.98,6.59 16.98,6.59C17.51,7.86 17.18,8.91 17.08,9.14C17.71,9.84 18.08,10.74 18.08,11.83C18.08,15.29 15.93,16.06 13.92,16.29C14.24,16.56 14.5,17.13 14.5,18.02C14.5,19.28 14.49,20.29 14.49,20.47C14.49,20.73 14.69,21.03 15.15,20.94C19.09,19.78 21.6,16.22 21.6,12C21.6,6.69 17.31,2.4 12,2.4Z"
  },
  {
    href: "#",
    path: "M19,3H5C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3M8.5,18.5H5.5V10H8.5V18.5M7,8.5C6.17,8.5 5.5,7.83 5.5,7C5.5,6.17 6.17,5.5 7,5.5C7.83,5.5 8.5,6.17 8.5,7C8.5,7.83 7.83,8.5 7,8.5M18.5,18.5H15.5V13.5C15.5,12.57 15.47,11.35 14.2,11.35C12.93,11.35 12.5,12.36 12.5,13.5V18.5H9.5V10H12.5V11.5H12.55C13,10.56 14.1,9.75 15.5,9.75C18.06,9.75 18.5,11.41 18.5,13.5V18.5Z"
  }
]

const features = [
  { title: "Automated Ticketing", desc: "Automatically categorize, assign, and prioritize tickets for faster response times." },
  { title: "Team Collaboration", desc: "Collaborate seamlessly across departments with shared workspaces and comments." },
  { title: "Analytics Dashboard", desc: "Monitor real-time performance metrics and enhance your team's efficiency." }
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-between">

    <nav class="bg-white shadow-md border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-blue-600">TicketFlow</h1>
      <div class="flex gap-4">
        <a href="/auth/logout?redirect=/" class="text-red-600 hover:text-red-700 font-semibold transition">Login</a>
        <a href="/contact=/" class="text-red-600 hover:text-red-700 font-semibold transition">Contacts</a>
         <a href="/tickets/" class="text-red-600 hover:text-red-700 font-semibold transition">Tickets</a>


      </div>
    </div>
  </nav>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div class="text-center">
          <h1 class="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">TicketFlow</h1>
          <p class="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Streamline your support workflow with our next-generation ticket management platform.
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <router-link
              to="/auth/login"
              class="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
            >
              Login
            </router-link>
            <router-link
              to="/auth/signup"
              class="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              Get Started
            </router-link>
          </div>
        </div>
      </div>

      <!-- Decorative Circle -->
      <div class="absolute top-20 right-10 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>

      <!-- Wave SVG -->
      <svg class="absolute bottom-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,64 C480,120 960,0 1440,64 L1440,120 L0,120 Z" fill="#f9fafb"></path>
      </svg>
    </section>

    <!-- Features Section -->
    <section class="max-w-7xl mx-auto px-6 py-20">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose TicketFlow?</h2>
      <div class="grid md:grid-cols-3 gap-10">
        <div v-for="(feature, idx) in features" :key="idx"
             class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <h3 class="text-2xl font-semibold mb-3 text-gray-900">{{ feature.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ feature.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Decorative Accent -->
    <div class="relative">
      <div class="absolute -bottom-32 left-10 w-56 h-56 bg-purple-300 opacity-30 rounded-full blur-2xl"></div>
    </div>

    <!-- UPDATED FOOTER - Full Width with Purple Gradient -->
    <footer class="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-12 mt-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Brand -->
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <ZapIcon class="w-8 h-8 text-white" />
              <h3 class="text-2xl font-bold text-white">AetherCorp</h3>
            </div>
            <p class="text-sm text-gray-100 max-w-xs">
              Pioneering the next wave of digital innovation and seamless user experiences for a connected future.
            </p>
            <div class="flex space-x-4 pt-3">
              <SocialIcon v-for="(link, i) in socialLinks" :key="i" :href="link.href" :path="link.path" />
            </div>
          </div>

          <!-- About -->
          <div>
            <h4 class="font-semibold text-white mb-4">About</h4>
            <ul class="space-y-3 text-sm text-gray-100">
              <li><a href="#" class="hover:text-white transition">Features</a></li>
              <li><a href="#" class="hover:text-white transition">Our Mission</a></li>
              <li><a href="#" class="hover:text-white transition">Careers</a></li>
              <li><a href="#" class="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h4 class="font-semibold text-white mb-4">Legal</h4>
            <ul class="space-y-3 text-sm text-gray-100">
              <li><a href="#" class="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" class="hover:text-white transition">Cookie Policy</a></li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div>
            <h4 class="font-semibold text-white mb-4">Join Our Matrix</h4>
            <p class="text-sm text-gray-100 mb-4">
              Get future-ready updates and exclusive tech insights delivered straight to your inbox.
            </p>
            <form action="#" class="flex flex-col sm:flex-row gap-3">
              <input
                id="email-address"
                type="email"
                autocomplete="email"
                required
                class="flex-1 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md py-2 px-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-white focus:border-transparent"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                class="px-5 py-2 bg-white text-purple-700 font-semibold rounded-md hover:bg-gray-100 transition shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-white border-opacity-20 text-center text-sm text-gray-100">
          <p>&copy; {{ currentYear }} TicketFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>