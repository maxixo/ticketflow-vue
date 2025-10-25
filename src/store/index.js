import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null
  }),
  actions: {
    login(userData) {
      this.isAuthenticated = true
      this.user = userData
      localStorage.setItem('ticketapp_session', JSON.stringify({
        token: 'mock-token-' + Date.now(),
        email: userData.email
      }))
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
      localStorage.removeItem('ticketapp_session')
    },
    checkAuth() {
      const session = localStorage.getItem('ticketapp_session')
      if (session) {
        this.isAuthenticated = true
        const data = JSON.parse(session)
        this.user = { email: data.email }
      }
    }
  }
})

export const useTicketStore = defineStore('tickets', {
  state: () => ({
    tickets: []
  }),
  getters: {
    totalTickets: (state) => state.tickets.length,
    openTickets: (state) => state.tickets.filter(t => t.status === 'open').length,
    inProgressTickets: (state) => state.tickets.filter(t => t.status === 'in_progress').length,
    closedTickets: (state) => state.tickets.filter(t => t.status === 'closed').length
  },
  actions: {
    loadTickets() {
      const stored = localStorage.getItem('tickets')
      if (stored) {
        this.tickets = JSON.parse(stored)
      }
    },
    saveTickets() {
      localStorage.setItem('tickets', JSON.stringify(this.tickets))
    },
    createTicket(ticket) {
      this.tickets.push({ ...ticket, id: Date.now() })
      this.saveTickets()
    },
    updateTicket(id, ticket) {
      const index = this.tickets.findIndex(t => t.id === id)
      if (index !== -1) {
        this.tickets[index] = { ...ticket, id }
        this.saveTickets()
      }
    },
    deleteTicket(id) {
      this.tickets = this.tickets.filter(t => t.id !== id)
      this.saveTickets()
    }
  }
})