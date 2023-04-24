import Image from "next/image";
import React from "react";

interface Props {
	username: string;
	githubhandle: string;
	joindate: string;
	avatarimgsrc: string;
}

const AvatarDisplay: React.FC<Props> = ({ username, githubhandle, joindate, avatarimgsrc }) => {
	return (
		<div
			className="avatar-display
      flex
      w-fit
      h-fit
      gap-x-[1.95rem]
      "
		>
			<Image
				className="avatar-display-img
				md:w-[11.7rem]
				md:h-[11.7rem]
				"
				width={70}
				height={70}
				src={avatarimgsrc}
				alt="avatar-img"
			/>
			<div
				className="avatar-display-descwrapper
        h-fit
        w-fit
        flex
        flex-col
				self-center
        "
			>
				<h3
					className="avatar-display-descwrapper-username
          text-h3
					font-bold
          text-secondary
          dark:text-dark-primary
					md:text-h1
          "
				>
					{username}
				</h3>
				<h4
					className="avatar-display-descwrapper-githubhandle
          text-h4
          text-link-primary
          dark:text-link-primary
					md:text-h3
          "
				>
					{githubhandle}
				</h4>
				<h4
					className="avatar-display-descwrapper-joindate
          text-h4
          text-toggle
          dark:text-dark-primary
					md:text-body
          "
				>
					{joindate}
				</h4>
			</div>
		</div>
	);
};

export default AvatarDisplay;
