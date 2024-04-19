import KeyBoardRow from "./KeyBoardRow";


export default function KeyBoard() {
    const lettersArr = ["QWERTYUIOP","ASDFGHJKL","ZXCVBNM"]
    return (
        <div className="flex flex-col gap-2 justify-between items-center  h-[13rem] w-[35rem]">
          { lettersArr.map((letters,i) =>
            <KeyBoardRow key={i} letters={letters}/>
             )}
        </div>

    );
}
