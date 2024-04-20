
import { useWorldeGrid } from "../utils/gridContext"


export default function DeleteKey() {
  const{rowIndex,colIndex,setColIndex,wordleGrid,setGrid}=useWorldeGrid()
  function handleClickDelete(){
    const newValue ={word:"0",color:"0"};
    const modifiedMatrix = wordleGrid.map((row, i) =>
      i === rowIndex
        ? row.map((cell, j) => (j === (colIndex-1) ? newValue : cell))
        : row
    );
    setGrid(modifiedMatrix);
    if(colIndex!=0){
        setColIndex(colIndex-1)
    }
  }
  return (
    <button className="flex items-center mr-1 bg-red-200 px-[3rem] rounded-md p-1" onClick={handleClickDelete}>
        Delete
    </button>
  )
}
