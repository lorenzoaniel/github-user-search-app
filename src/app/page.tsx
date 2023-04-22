import Image from "next/image";
import React from "react";

import DarkModeToggleButton from "@/components/button/DarkModeToggleButton";
import SearchButton from "@/components/button/SearchButton";
import SearchBar from "@/components/searchbar";

const Home: React.FC = () => {
	const img_src = {
		searchbaricon: "./assets/images/icon-search.svg",
	};

	return (
		<>
			<header
				className="header-section
        bg-transparent
        h-[3.8rem]
        w-[32.7rem]
        flex
        items-center
        justify-between
        "
			>
				<h1
					className="header-section-logo
          h-full
          text-h1
          dark:text-dark-primary
          "
				>
					devfinder
				</h1>
				<DarkModeToggleButton />
			</header>
			<nav
				className="searchbar-section
        bg-primary
        h-[6rem]
        w-[32.7rem]
        flex
        items-center
        justify-between
        p-[0.75rem]
        rounded-[1.5rem]
        shadow-container
        mt-[3.6rem]
        dark:bg-dark-primary
        dark:shadow-dark-container
        "
			>
				<Image
					className="searchbar-icon"
					width={20}
					height={20}
					src={img_src.searchbaricon}
					alt=""
				/>
				<SearchBar />
				<SearchButton />
			</nav>
			<main
				className="main-section
        bg-primary
        h-[51.7rem]
        w-[32.7rem]
        rounded-[1.5rem]
        shadow-container
        mt-[1.6rem]
        dark:bg-dark-primary
        dark:shadow-dark-container
        "
			></main>
		</>
	);
};

export default Home;
