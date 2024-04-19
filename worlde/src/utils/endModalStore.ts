import { create } from 'zustand'

interface EndModalState{
  lost: boolean,
  won:boolean,
  setWin:(val:boolean)=>void,
  setLoss:(val:boolean)=>void,
  
}

export const useEndModalStore = create<EndModalState>()((set) => ({
 lost:false,
 won:false,
 setWin:(val)=>set(()=>({won:val})),
 setLoss:(val)=>set(()=>({lost:val})),
}))