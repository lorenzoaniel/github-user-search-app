"use client";

import Image from "next/image";

import DarkModeToggleButton from "@/components/button/DarkModeToggleButton";
import SearchButton from "@/components/button/SearchButton";
import SearchBar from "@/components/searchbar";
import AvatarDisplay from "@/components/display/AvatarDisplay";
import StatsDisplay from "@/components/display/StatsDisplay";
import LinksDisplay from "@/components/display/LinksDisplay";
import Links from "@/components/links";
import { useUserStore } from "@/state_management/useUserStore";

/* 
  DUE TO THE API REQUEST LIMIT FOR GITHUB UNAUTHORIZED REQ (no personal token passed to req) OF 60 REQS/HR, I HAVE DECIDED TO PLACE STATIC VALUES FOR THE INITIAL RENDER,
  BUT IF YOU WOULD LIKE TO HAVE EVERYTHING DYNAMIC, SIMPLY ADD YOUR OWN PERSONAL TOKEN(5000 REQS/HR) WITH THE REQUEST
  SO THAT YOU CAN GET A SIGNIFICANTLY HIGHER LIMITS AND REPLACE THE INITIAL VALUES WITH NULLS INCASE OF ANY RES ERRORS. 
  DYNAMIC VALUES STILL APPLY ONCE YOU SEARCH FOR A USER 
*/

const Home: React.FC = () => {
	let user: any = useUserStore((state) => state.user);

	const img_src = {
		searchbaricon: "./assets/images/icon-search.svg", //default
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
        md:w-[57.3rem]
        lg:w-[73rem]
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
        lg:w-[73rem]
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
          lg:w-[15rem]
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
          ${user.message === "Not Found" ? "md:opacity-100" : ""}
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
        
        gap-y-[2.5rem]
        dark:bg-dark-primary
        dark:shadow-dark-container
        md:w-[57.3rem]
        md:p-[4rem]
        md:h-[48.1rem]
        md:gap-y-[3rem]
        lg:w-[73rem]
        lg:h-[41.9rem]
        lg:justify-between
        "
			>
				<AvatarDisplay
					username={user?.name}
					githubhandle={user?.login}
					joindate={user?.created_at}
					avatarimgsrc={user?.avatar_url}
					bio={user?.bio}
				/>
				<StatsDisplay
					repocount={user?.public_repos}
					followercount={user?.followers}
					followingcount={user?.following}
				/>
				<LinksDisplay>
					<Links linkData={user?.location} variant={"location"} />
					<Links linkData={user?.blog} variant={"blog"} />
					<Links linkData={user?.twitter_username} variant={"twitter"} />
					<Links linkData={user?.company} variant={"company"} />
				</LinksDisplay>
			</main>
		</>
	);
};

export default Home;
