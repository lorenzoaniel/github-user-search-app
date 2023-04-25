"use client";

import React from "react";

const SearchBar: React.FC = () => {
	const placeholder = "Search Github username...";

	return (
		<input
			className="search-bar
      bg-primary
      text-primary
      dark:text-dark-primary
      caret-blue-500
      focus:caret-blue-500
      h-[2.5rem]
      w-[18.4rem]
      text-searchbar
      text-ellipsis
      dark:bg-dark-primary
      focus:outline-none
      md:w-[25.4rem]
      md:text-h3
      lg:text-[1.8rem]
      "
			placeholder={placeholder}
		/>
	);
};

export default SearchBar;
