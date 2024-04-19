
import DeleteKey from "./DeleteKey";
import EnterKey from "./EnterKey";
import KeyBoardKey from "./KeyBoardKey";


export default function KeyBoardRow(props:{letters:string}) {
    const len = props.letters.length;
  return (
         len!= 7 ?  (<TwoRows props={props}/>):<LastRow props={props}/>
        )
}
function TwoRows(props:{props:{letters:string}}){
  return(
    <div className="flex w-[35rem] grow gap-1">
     {props.props.letters.split("").map((letter, index) => (
        <KeyBoardKey key={index} letter={letter} index={index} />
      ))}
    </div>
  )
}
function LastRow(props:{props:{letters:string}}){
  return(
    <div className="flex w-[40rem] grow justify-center">
    <div className=" flex items-center mr-1 bg-red-200 rounded-md p-1 px-[3rem]">
         <DeleteKey/>
      </div>

    <div className="flex grow gap-1">
    {props.props.letters.split("").map((letter, index)=>(
            <KeyBoardKey key={index} letter={letter} index={index} />
        ))}
    </div>
    <div className="flex items-center ml-1 bg-green-200 px-[3rem] rounded-md p-1">
         <EnterKey/>
        </div>
    </div>
  )
}