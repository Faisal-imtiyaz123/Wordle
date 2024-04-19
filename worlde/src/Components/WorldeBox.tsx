import { useWorldeGrid } from "../utils/gridContext"
import { useShakeStore } from "../utils/shakeStore"

export default function WorldeBox(props:{color:string,letter:string,rowI:number}) {
  const {shake,flip} = useShakeStore(s=>s) 
  const {rowIndex}= useWorldeGrid()
  const isFlipTrue=rowIndex-1===props.rowI
  let {color}=props
  if(color=="w"){
    color="bg-gray-200"
  }else if(color=="y"){
    color="bg-yellow-200"
  }else if(color=="g"){
    color="bg-green-200"
  }else{
    color=""
  }
  console.log(shake)
  return (
    <div className={`relative grow ${isFlipTrue?(flip?"rotateY":""):""} rounded-md ${color?color:"bg-red-100"} ${shake && rowIndex==props.rowI?"animate-shake":""}`}>
        <span className={`absolute ${isFlipTrue?(flip?"rotateY":""):""} ${props.letter=="0"?"":"pop"} top-[20%] text-5xl left-[24%] text-gray-500 `}>
            {props.letter=="0"?"":props.letter}
        </span>
    </div> 
  )
}
