
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
    <>
         <DeleteKey/>
      </>

    <div className="flex grow gap-1">
    {props.props.letters.split("").map((letter, index)=>(
            <KeyBoardKey key={index} letter={letter} index={index} />
        ))}
    </div>
    <>
         <EnterKey/>
        </>
    </div>
  )
}