import Image from "next/image";
import React from "react";

import DarkModeToggleButton from "@/components/button/DarkModeToggleButton";
import SearchButton from "@/components/button/SearchButton";
import SearchBar from "@/components/searchbar";
import AvatarDisplay from "@/components/display/AvatarDisplay";
import StatsDisplay from "@/components/display/StatsDisplay";
import LinksDisplay from "@/components/display/LinksDisplay";
import Links from "@/components/links";

const Home: React.FC = () => {
	const userData = null;
	const img_src = {
		searchbaricon: "./assets/images/icon-search.svg",
	};

	//TODO when user clicks search button call useUserStore and grab the value of searchbar and place value into hook

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
        md:w-[57.3rem]
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
        md:w-[57.3rem]
        md:h-[6.9rem]
        "
			>
				<Image
					className="searchbar-icon
          ml-[0.85rem]
          md:ml-[1.7rem]
          md:h-[2.4rem]
          md:w-[2.4rem]
          "
					width={20}
					height={20}
					src={img_src.searchbaricon}
					alt=""
				/>
				<SearchBar />
				<span
					className="divider
          hidden
          w-[3rem]
          h-full
          md:inline
          "
				>
					{""}
				</span>
				<span
					className={`error-user-not-found
          hidden
          w-fit
          text-body
          text-red-500
          md:opacity-0
          md:inline
          ${userData ?? "md:opacity-100"}
          `}
				>
					{"No results"}
				</span>
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
        md:w-[57.3rem]

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
          text-h4
          text-primary
          dark:text-dark-primary
          dark:opacity-75
          "
				>
					{"TEST BIO INFO REPLACE WITH API RESPONSE"}
				</p>
				<StatsDisplay repocount={8} followercount={3938} followingcount={9} />
				<LinksDisplay>
					<Links variant={"location"} linkData={"San Francisco"} />
					<Links variant={"blog"} linkData={null} />
					<Links variant={"twitter"} linkData={null} />
					<Links variant={"company"} linkData={null} />
				</LinksDisplay>
			</main>
		</>
	);
};

export default Home;
