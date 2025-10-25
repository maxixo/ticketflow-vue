<template>
  <div class="min-h-screen bg-gray-50">
    <Toast v-if="toast" :message="toast.message" :type="toast.type" @close="toast = null" />
    
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600">TicketFlow</h1>
        <div class="flex gap-4">
          <router-link to="/dashboard" class="text-gray-600 hover:text-gray-800">
            <LayoutDashboard :size="20" />
          </router-link>
          <button @click="handleLogout" class="text-red-600 hover:text-red-700">
            <LogOut :size="20" />
          </button>
        </div>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold text-gray-800">Ticket Management</h2>
        <button
          @click="openCreateForm"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
        >
          <Plus :size="20" />
          New Ticket
        </button>
      </div>

      <!-- Ticket Form -->
      <div v-if="showForm" class="bg-white p-6 rounded-xl shadow-md mb-8">
        <h3 class="text-xl font-bold mb-4">{{ editingId ? 'Edit Ticket' : 'Create Ticket' }}</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input
              v-model="formData.title"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <p v-if="errors.title" class="text-red-500 text-sm mt-1">{{ errors.title }}</p>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              v-model="formData.description"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Status *</label>
              <select
                v-model="formData.status"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
              <p v-if="errors.status" class="text-red-500 text-sm mt-1">{{ errors.status }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Priority</label>
              <select
                v-model="formData.priority"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div class="flex gap-4">
            <button
              @click="handleSubmit"
              class="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {{ editingId ? 'Update' : 'Create' }}
            </button>
            <button
              @click="cancelForm"
              class="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      <!-- Ticket List -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="ticket in ticketStore.tickets"
          :key="ticket.id"
          class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg font-semibold text-gray-800">{{ ticket.title }}</h3>
            <span :class="['px-3 py-1 rounded-full text-xs font-semibold', statusColors[ticket.status]]">
              {{ ticket.status.replace('_', ' ') }}
            </span>
          </div>
          
          <p class="text-gray-600 text-sm mb-4">{{ ticket.description || 'No description' }}</p>
          
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">Priority: {{ ticket.priority }}</span>
            <div class="flex gap-2">
              <button @click="handleEdit(ticket)" class="text-blue-600 hover:text-blue-700">
                <Edit2 :size="18" />
              </button>
              <button @click="handleDelete(ticket.id)" class="text-red-600 hover:text-red-700">
                <Trash2 :size="18" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="ticketStore.tickets.length === 0" class="text-center py-12">
        <p class="text-gray-500 text-lg">No tickets yet. Create your first ticket!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { LayoutDashboard, LogOut, Plus, Edit2, Trash2 } from 'lucide-vue-next'
import { useAuthStore, useTicketStore } from '../store'
import Toast from './Toast.vue'

const router = useRouter()
const authStore = useAuthStore()
const ticketStore = useTicketStore()

const showForm = ref(false)
const editingId = ref(null)
const formData = reactive({
  title: '',
  description: '',
  status: 'open',
  priority: 'medium'
})
const errors = ref({})
const toast = ref(null)

const statusColors = {
  open: 'bg-green-100 text-green-800',
  in_progress: 'bg-yellow-100 text-yellow-800',
  closed: 'bg-gray-100 text-gray-800'
}

onMounted(() => {
  ticketStore.loadTickets()
})

const validate = () => {
  const newErrors = {}
  if (!formData.title.trim()) newErrors.title = 'Title is required'
  if (!['open', 'in_progress', 'closed'].includes(formData.status)) {
    newErrors.status = 'Status must be open, in_progress, or closed'
  }
  return newErrors
}

const handleSubmit = () => {
  const newErrors = validate()
  
  if (Object.keys(newErrors).length > 0) {
    errors.value = newErrors
    return
  }

  if (editingId.value) {
    ticketStore.updateTicket(editingId.value, formData)
    toast.value = { message: 'Ticket updated successfully', type: 'success' }
  } else {
    ticketStore.createTicket(formData)
    toast.value = { message: 'Ticket created successfully', type: 'success' }
  }
  
  cancelForm()
}

const handleEdit = (ticket) => {
  Object.assign(formData, ticket)
  editingId.value = ticket.id
  showForm.value = true
}

const handleDelete = (id) => {
  if (confirm('Are you sure you want to delete this ticket?')) {
    ticketStore.deleteTicket(id)
    toast.value = { message: 'Ticket deleted successfully', type: 'success' }
  }
}

const openCreateForm = () => {
  showForm.value = true
  editingId.value = null
  Object.assign(formData, {
    title: '',
    description: '',
    status: 'open',
    priority: 'medium'
  })
}

const cancelForm = () => {
  showForm.value = false
  editingId.value = null
  errors.value = {}
}

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>

