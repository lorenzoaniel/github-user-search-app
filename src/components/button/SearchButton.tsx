import React from "react";

const SearchButton: React.FC = () => {
	return (
		<button
			className="search-button
      bg-btn-primary
      h-[4.6rem]
      w-[8.4rem]
      rounded-[1rem]
      text-searchbtn
      text-btn-primary
      dark:bg-dark-btn-primary
      dark:text-dark-btn-primary
      "
		>
			Search
		</button>
	);
};

export default SearchButton;
