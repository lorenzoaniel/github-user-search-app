import React from "react";

interface Props {
	children: JSX.Element | JSX.Element[];
}

const LinksDisplay: React.FC<Props> = ({ children }) => {
	return (
		<div
			className="links-display
      w-full
      h-fit
      flex
      flex-col
      items-start
      gap-y-[1.6rem]
			md:h-[10rem]
			md:flex-row
			md:w-[42.9rem]
			md:flex-wrap
			md:justify-between
			md:gap-x-[10rem]
			lg:w-[48rem]
      lg:self-end
			lg:h-[6.3rem]
      "
		>
			{children}
		</div>
	);
};

export default LinksDisplay;
