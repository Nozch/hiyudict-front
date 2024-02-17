import { create } from 'zustand'

interface AdjectiveState {
  adjective: string
  metaphors: string[]
  setAdjective: (adjective: string) => void
  addMetaphor: (metaphor: string) => void
}

const useStore = create<AdjectiveState>(set => ({

  adjective: '',
  metaphors: [],
  setAdjective: (adjective) => set({ adjective }),
  addMetaphor: (metaphor) => set(state => ({ metaphors: [...state.metaphors, metaphor]}))
}))

export default useStore