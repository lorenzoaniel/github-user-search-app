import Image from "next/image";
import React from "react";

import DarkModeToggleButton from "@/components/button/DarkModeToggleButton";
import SearchButton from "@/components/button/SearchButton";
import SearchBar from "@/components/searchbar";
import AvatarDisplay from "@/components/display/AvatarDisplay";
import StatsDisplay from "@/components/display/StatsDisplay";

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
					className="searchbar-icon
          ml-[0.85rem]
          "
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
        flex
        flex-col
        rounded-[1.5rem]
        shadow-container
        mt-[1.6rem]
        px-[2.4rem]
        pt-[3.2rem]
        pb-[4.8rem]
        gap-y-[2.5rem]
        dark:bg-dark-primary
        dark:shadow-dark-container
        "
			>
				<AvatarDisplay
					username={"The Octocat"}
					githubhandle={"@test"}
					joindate={"Jan 25th, 2016"}
					avatarimgsrc={""}
				/>
				<p
					className="main-section-bio
          h-[7.5rem]
          w-full
          text-primary
          dark:text-dark-primary
          "
				>
					{"TEST BIO INFO REPLACE WITH API RESPONSE"}
				</p>
				<StatsDisplay repocount={8} followercount={3938} followingcount={9} />
			</main>
		</>
	);
};

export default Home;
