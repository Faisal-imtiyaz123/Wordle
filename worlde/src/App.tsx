import {useState } from "react";
import KeyBoard from "./Components/KeyBoard";
import WordleContainer from "./Components/WordleContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GridProvider from "./utils/gridContext";
import { Toaster } from "react-hot-toast";
import { createPortal } from "react-dom";
import EndGameModal from "./Components/EndGameModal";

export default function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
  
  <QueryClientProvider client={queryClient}>
    <GridProvider>

    <div className="h-full w-full flex flex-col items-center mt-[5rem]">
      <div className="h-[25rem] w-[25rem] ">
      <WordleContainer/>
      </div>
      <KeyBoard/>
    </div>

    </GridProvider>
    <Toaster/>
    {createPortal(<EndGameModal/>,document.body)}
  </QueryClientProvider>

  )
}
