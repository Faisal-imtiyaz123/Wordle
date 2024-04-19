// import { trpc } from "../../utils/trpc"

import { useEffect, useState } from "react";
import { useWorldeGrid } from "../utils/gridContext";

export default function KeyBoardKey(props: {letter: string; index: number }) {
  // const mutation = trpc.key.sendKey.useMutation()
  const x = useWorldeGrid();
  const [keyColor, setKeyColor] = useState<string>('bg-gray-100');
  console.log(x.colIndex,x.rowIndex)
  useEffect(() => {
    // Update key color based on grid state and letter prop
    x.wordleGrid.forEach((row) => {
      row.forEach((cell) => {
        if (cell.word === props.letter) {
          if (cell.color === 'w') {
            setKeyColor('bg-gray-400');
          } else if (cell.color === 'g') {
            setKeyColor('bg-green-200');
          } else if (cell.color === 'y') {
            setKeyColor('bg-yellow-200');
          }
        }
      });
    });
  }, [x.wordleGrid, x.rowIndex, x.colIndex, props.letter]);
   function handleClick() {
    // mutation.mutate({letter:props.letter})
    const newValue ={word:props.letter,color:"0"};

    // Create a new matrix with the modified value
    const modifiedMatrix = x.wordleGrid.map((row, i) =>
      i === x.rowIndex
        ? row.map((cell, j) => (j === x.colIndex ? newValue : cell))
        : row
    );
    x.setGrid(modifiedMatrix);
    if(x.colIndex!=5){
      x.setColIndex(x.colIndex+1)
    }
    // else{
    //   if(modifiedMatrix[x.rowIndex][4].color!=="0"){
    //     x.setRowIndex(x.rowIndex+1)
    //   }
    // }
  }

  // x.wordleGrid.map((row)=>{
  //   return row.map((cell)=>{
  //     if(cell.word===props.letter){
  //       return keyColor=cell.color
  //     }
  //   })
  // })
 
  // if(keyColor==="w"){
  //   keyColor="bg-gray-400"
  // }
  //  if(keyColor==="g"){
  //   keyColor="bg-green-200"
  // }
  // if(keyColor==="y"){
  //   keyColor="bg-yellow-200"
  // }
  // if(!keyColor){
  //   keyColor="bg-gray-100"
  // }
  
 
  return (
    <button
      key={props.index}
      className={`rounded-md ${keyColor} grow`}
      onClick={handleClick}
    >
      {props.letter}
    </button>
  );
}
