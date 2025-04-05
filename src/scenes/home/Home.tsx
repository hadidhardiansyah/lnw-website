import Hero from "../../assets/hero.png";

// type PageProps = {
//     setSelectedPage: (value: SelectedPage) => void;
// };

const Home = () => {
    return (
        <section
            id="home"
            className="flex items-center justify-center bg-black pt-32 md:pt-16"
        >
            <div className="w-5/6 mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left content */}
                <div className="flex-[1] text-center md:text-left">
                    <h1 className="relative before:content-latenightworks before:absolute before:text-red-600 before:text-6xl md:before:text-8xl before:opacity-40 before:-top-8 lg:before:-top-16 before:left-10 md:before:-left-6 z-10 text-white text-3xl md:text-5xl font-bold font-bebas">
                        Late Night Works
                    </h1>
                    <p className="text-gray-300 mt-4 text-sm md:text-base">
                        Custom motorcycle builds and precision metal fabrication done right
                    </p>

                    <button
                        type="button"
                        className="mt-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Our Services Here ↓
                    </button>
                </div>

                {/* Hero image */}
                <div className="flex-[3]">
                    <img
                        src={Hero}
                        alt="hero"
                        className="w-full max-w-md md:max-w-full h-auto object-contain mx-auto"
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;