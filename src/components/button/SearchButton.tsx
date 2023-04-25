"use client";

import { useUserStore } from "@/state_management/useUserStore";
import React from "react";

const SearchButton: React.FC = () => {
	const fetchGithubUser = useUserStore((state) => state.fetchGithubUser);

	const handleClick = async () => {
		const userName = document.getElementsByClassName("search-bar")[0] as HTMLInputElement;
		if (userName.value) {
			await fetchGithubUser(userName.value);
		}
	};

	return (
		<button
			onClick={handleClick}
			className="search-button
      bg-btn-primary
      h-[4.6rem]
      w-[8.4rem]
      rounded-[1rem]
      text-searchbtn
      text-btn-primary
      dark:bg-dark-btn-primary
      dark:text-dark-btn-primary
      md:h-[5rem]
      md:w-[10.6rem]
      md:text-h3
			dark:hover:bg-dark-hover-btn
			hover:bg-dark-hover-btn
      "
		>
			Search
		</button>
	);
};

export default SearchButton;
