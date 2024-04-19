import { create } from 'zustand'

interface ShakeState{
  shake: boolean,
  flip:boolean,
  setShake: () => void,
  setFlip:()=>void,
}

export const useShakeStore = create<ShakeState>()((set) => ({
  shake: false,
  flip:false,
  setShake: () => set((state) => ({ shake: !state.shake  })),
  setFlip:()=>set((state)=>({flip:!state.flip}))

}))