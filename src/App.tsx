import './App.css'
import Navbar from "./scenes/navbar";
import {useState} from "react";
import {SelectedPage} from "./common/types.ts";

function App() {

    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home,
    );

  return (
    <>
      <Navbar isTopOfPage={true} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </>
  )
}

export default App
