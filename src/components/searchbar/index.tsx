import React from "react";

const SearchBar: React.FC = () => {
	const placeholder = "Search Github username...";

	return (
		<input
			className="search-bar
      bg-primary
      h-[2.5rem]
      w-[18.4rem]
      text-searchbar
      text-ellipsis
      dark:bg-dark-primary
      focus:outline-none
      "
			placeholder={placeholder}
		/>
	);
};

export default SearchBar;
