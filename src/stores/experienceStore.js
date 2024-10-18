// stores/experienceStore.js
import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'
const url = import.meta.env.VITE_DB_URL
const token = import.meta.env.VITE_DB_TOKEN
const supabase = createClient(url, token)

export const useExperienceStore = defineStore('experienceStore', {
  state: () => ({
    experiences: [],
    isLoaded: false, // Para controlar se os dados já foram carregados
  }),
  actions: {
    async fetchExperiences() {
      if (!this.isLoaded) { // Só faz a requisição se ainda não estiver carregado
        const { data, error } = await supabase
          .from('experiences')
          .select('*')
          .order('period', { ascending: false })

        if (error) {
          console.error('Erro ao buscar experiências:', error)
        } else {
          this.experiences = data
          this.isLoaded = true
        }
      }
    }
  }
})
