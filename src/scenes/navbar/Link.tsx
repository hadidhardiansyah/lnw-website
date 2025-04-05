import {SelectedPage} from "@/common/types.ts";
import AnchorLink from "react-anchor-link-smooth-scroll";

type PageProps = {
    page: String;
    selectedPage: String;
    setSelectedPage: (selectedPage: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: PageProps) => {

    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-red-500" : "text-white"} transition duration-500 hover:text-red-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link;