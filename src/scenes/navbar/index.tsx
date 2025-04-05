import {SelectedPage} from "@/common/types.ts";
import {useMediaQuery} from "@react-hook/media-query";
import LogoText from "../../assets/logo-text.png";
import Link from "./Link.tsx";
import {useState} from "react";
import {Bars3Icon} from "@heroicons/react/24/solid";

type PageProps = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (selectedPage: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: PageProps) => {

    const flexBetween = "flex items-center justify-between";
    const navbarBackground = isTopOfPage ? "bg-black" : "bg-gray-400";
    const isAboveMediumScreen = useMediaQuery("(min-width: 1080px)");

    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

    return (
        <nav>
            <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-5`}>
                <div className={`${flexBetween} w-5/6 mx-auto`}>
                    <img src={LogoText} alt="logo" width={200} height={100}/>

                    {isAboveMediumScreen ? (
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="About"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Our Services"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact Us"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    ) : (
                        <button
                            className="rounded-full bg-black p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-white"/>
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;