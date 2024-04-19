import { createContext, useContext, useState } from "react";
export interface GridType{
    word:string,
    color:string,
}
const rows = 5;
const columns = 5;
const grid:GridType[][]= [];
for (let i = 0; i < rows; i++) {
  grid.push([]);
  for (let j = 0; j < columns; j++) {
    grid[i].push({word:"0",color:"0"});
  }
}



interface GridContext{
    wordleGrid:GridType[][],
    rowIndex:number,
    colIndex:number,
    setRowIndex:(rowIndex:number)=>void,
    setColIndex:(colIndex:number)=>void,
    setGrid:(wordleGrid:GridType[][])=>void,
   

}

const GridContext = createContext<GridContext|null>(null)

export default function GridProvider({children}:{children:React.ReactNode}){
    const [rowIndex,setRowIndex] = useState<number>(0);
    const [colIndex,setColIndex] = useState<number>(0);
    const [wordleGrid,setGrid] = useState<GridType[][]>(grid);

    return (
        <GridContext.Provider value={{rowIndex,colIndex,wordleGrid,setColIndex,setRowIndex,setGrid}}>
            {children}
        </GridContext.Provider>
    )

}
export function useWorldeGrid(){
    const context = useContext(GridContext);
    if(!context) throw new Error("useWorldeGrid must be used within a GridProvider");
    return  context;
}