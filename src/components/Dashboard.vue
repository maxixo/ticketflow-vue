<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600">TicketFlow</h1>
        <button
          @click="handleLogout"
          class="flex items-center gap-2 text-red-600 hover:text-red-700"
        >
          <LogOut :size="20" />
          Logout
        </button>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold mb-8 text-gray-800">Dashboard</h2>
      
      <div class="grid md:grid-cols-4 gap-6 mb-8">
        <div v-for="stat in stats" :key="stat.label" class="bg-white p-6 rounded-xl shadow-md">
          <p class="text-gray-600 text-sm mb-2">{{ stat.label }}</p>
          <p :class="`text-4xl font-bold text-${stat.color}-600`">{{ stat.value }}</p>
        </div>
      </div>

      <router-link
        to="/tickets"
        class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2 inline-flex"
      >
        <Ticket :size="20" />
        Manage Tickets
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { LogOut, Ticket } from 'lucide-vue-next'
import { useAuthStore, useTicketStore } from '../store'

const router = useRouter()
const authStore = useAuthStore()
const ticketStore = useTicketStore()

onMounted(() => {
  ticketStore.loadTickets()
})

const stats = computed(() => [
  { label: 'Total Tickets', value: ticketStore.totalTickets, color: 'blue' },
  { label: 'Open', value: ticketStore.openTickets, color: 'green' },
  { label: 'In Progress', value: ticketStore.inProgressTickets, color: 'yellow' },
  { label: 'Closed', value: ticketStore.closedTickets, color: 'gray' }
])

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>