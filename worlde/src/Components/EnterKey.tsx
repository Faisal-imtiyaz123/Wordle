import { useEndModalStore } from "../utils/endModalStore";
import { GridType, useWorldeGrid } from "../utils/gridContext"
import { useMainWord } from "../utils/mainWordContext"
import { useShakeStore } from "../utils/shakeStore";
import {toast} from "react-hot-toast"
function evaluateRow(row:GridType[], mainWord:string) {
    return row.map((cell,index) => {
        const letter:string = cell.word;
        if (mainWord.includes(letter)) {
            if (letter === mainWord[index]) {
                cell.color = 'g'; // Matched letter
            } else {
                cell.color = 'y'; // Letter in main word but not matched
            }
        }else {
            cell.color = 'w'; // Letter not in main word
        }
        return cell;
    });
}
export default function EnterKey() {
  const {setLoss,setWin}=useEndModalStore()
  const {setShake,setFlip}=useShakeStore(s=>s)
  const {mainWord}= useMainWord()
  const {wordleGrid,rowIndex,setGrid,setColIndex,setRowIndex} = useWorldeGrid()
  
  

  function handleClickEnter(){
    // setLoss(true)
    if(rowIndex>=1){
       if(wordleGrid[rowIndex][0].word=="0" && wordleGrid[rowIndex-1][4].word!=="0"){
        return toast("Enter a Letter")
       }
    }
    if(wordleGrid[rowIndex].filter((cell)=>cell.word==="0").length ){
        setShake()
        toast.error('Enter the Complete Word')
        setTimeout(()=>setShake(),500)
        return
    }
    const modifiedMatrix = wordleGrid.map((row, index) => {
        if (index === (rowIndex)) {
            return evaluateRow(row, mainWord);
        } else {
            return row;
        }
    });
    setGrid(modifiedMatrix);
    if(wordleGrid[rowIndex]?.filter((cell)=>cell.color==="g").length==5) {
        setWin(true)
        console.log("won")
    }else{
        if(rowIndex==4){
            setLoss(true)
        }
    }
    setColIndex(0)
    setRowIndex(rowIndex+1)
    setFlip()
    setTimeout(()=>setFlip(),800)
    
   

  }
  
  return (
    <button onClick={handleClickEnter}>
        Enter
    </button>
  )
}
