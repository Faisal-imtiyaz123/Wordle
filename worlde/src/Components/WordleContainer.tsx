import { useWorldeGrid } from "../utils/gridContext"
import WorldeBox from "./WorldeBox"
import WorldeRow from "./WorldeRow"


export default function WordleContainer() {
    const {wordleGrid}=useWorldeGrid()
    return(
        <div className="flex flex-col h-full gap-1 p-2  rounded-lg justify-between">
            {wordleGrid.map((wordleRow,rowIndex)=>
            <WorldeRow key={rowIndex}>
                {wordleRow.map((letter,colIndex)=>
                 <WorldeBox key={`${rowIndex}-${colIndex}`} rowI={rowIndex} letter={letter.word} color={letter.color} />)}
            </WorldeRow>)}
        </div>
    )
}
