import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'


const url = import.meta.env.VITE_DB_URL
const token = import.meta.env.VITE_DB_TOKEN
const supabase = createClient(url, token)

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
    projects: [],
    isLoaded: false, // Para controlar se os dados já foram carregados
  }),
  actions: {
    async fetchProjects() {
      if (!this.isLoaded) { // Só faz a requisição se ainda não estiver carregado
        const { data, error } = await supabase
          .from('projects')
          .select('*')

        if (error) {
          console.error('Erro ao buscar projetos:', error)
        } else {
          this.projects = data
          this.isLoaded = true
        }
      }
    }
  }
})
