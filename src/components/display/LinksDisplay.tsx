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
      "
		>
			{children}
		</div>
	);
};

export default LinksDisplay;
