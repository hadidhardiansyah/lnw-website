import './App.css'
import Navbar from "./scenes/navbar/Navbar.tsx";
import {useState} from "react";
import {SelectedPage} from "./common/types.ts";
import Home from "./scenes/home/Home.tsx";

function App() {

    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home,
    );

    return (
        <>
            <Navbar
                isTopOfPage={true}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Home/>
        </>
    )
}

export default App
