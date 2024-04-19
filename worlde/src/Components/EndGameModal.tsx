import { useEffect, useRef, useState } from "react"
import { useEndModalStore } from "../utils/endModalStore"
import { useMainWord } from "../utils/mainWordContext"


export default function EndGameModal() {
  const {lost, won,setLoss,setWin} = useEndModalStore()
  const {mainWord}= useMainWord()
  const [clicked,setClicked] =useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)
  const handleNewGame=()=>{
    window.location.reload()
  }
  useEffect(() => {
    console.log("effect")
    const handleClickOutside=(event:MouseEvent)=>{
      if(ref.current && !ref.current.contains(event.target as Node)){
        setLoss(false)
        setWin(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
      return ()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
  },[clicked,setLoss,setWin])
  return (
    won ? (
    <div onClick={()=>setClicked(!clicked)} className="h-full fixed z-30 top-0 w-full bg-gray-500 bg-opacity-30  ">
      <div ref={ref} className="h-[30rem] w-[25rem]  fixed top-[10%] left-[36%] shadow-lg rounded-md text-center bg-gray-200 ">
        <div className="bg-emerald-300 text-xl h-[3rem] p-2 border-b-4 text-white">
          You Won!
        </div>
        <div className="flex flex-col h-full">
        <div className="flex text-xl tracking-widest basis-[20%] self-center items-center ">
          Play again
        </div>
        <div className="flex grow items-start justify-center ">
          <button onClick={handleNewGame} className="bg-green-400 hover:bg-emerald-400 w-[10rem] text-white text-lg p-4 mb-[7rem] rounded-lg">
            New Game
          </button>
        </div>
        </div>
    </div>
      </div>
    ) : lost ? (
      <div onClick={()=>setClicked(!clicked)}  className="h-full fixed z-30 top-0 w-full bg-gray-500 bg-opacity-30  ">
      <div ref={ref} className="h-[30rem] w-[25rem]  fixed top-[10%] left-[36%] shadow-lg rounded-md text-center bg-gray-200 ">
        <div className="bg-red-300 text-xl h-[3rem] p-2 border-b-4 text-white">
          You Lost!
        </div>
        <div className="flex flex-col mt-4 items-center gap-4">
        <div>
          The answer was:
        </div>
        <div className="bg-red-200 p-4 rounded-lg font-semibold text-xl tracking-widest ">
          {mainWord}
        </div>
        </div>
        <div className="flex h-full items-center justify-center">
          <button onClick={handleNewGame} className="bg-green-400 hover:bg-emerald-400 w-[10rem]  text-white text-lg p-4 mb-[20rem] rounded-lg">
            New Game
          </button>
        </div>
    </div>
      </div>
    ) : null
  )
}
