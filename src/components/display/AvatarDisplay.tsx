import Image from "next/image";
import React from "react";

interface Props {
	username: string;
	githubhandle: string;
	joindate: string;
	avatarimgsrc: string;
	bio: string;
}

const AvatarDisplay: React.FC<Props> = ({
	username,
	githubhandle,
	joindate,
	avatarimgsrc,
	bio,
}) => {
	return (
		<div
			className="avatar-display
      grid
			grid-cols-4
			grid-rows-[minmax(0, 1fr)_fit-content]
      w-fit
      h-fit
      gap-x-[1.95rem]
			gap-y-[3.3rem]
      "
		>
			<Image
				className="avatar-display-img
				row-span-1
				col-span-1
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
				row-span-1
				col-span-2
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
			<p
				className="avatar-display-bio
					truncate
					hover:overflow-y-scroll
					hover:whitespace-normal
					row-span-2
					col-span-4
          h-[7.5rem]
          w-full
          text-h4
          text-primary
          dark:text-dark-primary
          dark:opacity-75
					lg:h-[5rem]
					lg:col-start-2
					lg:col-end-5
          "
			>
				{bio}
			</p>
		</div>
	);
};

export default AvatarDisplay;
