
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
    <button onClick={handleClickDelete}>
        Delete
    </button>
  )
}
