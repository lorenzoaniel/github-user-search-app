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
			lg:grid-rows-[7.6rem, fit-content]
			lg:gap-y-0
      "
		>
			<Image
				className="avatar-display-img
				row-span-1
				col-span-1
				md:w-[11.7rem]
				md:h-[11.7rem]
				lg:row-span-2
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
				lg:flex-row
				lg:col-span-3
				lg:grid
				lg:grid-cols-3
				lg:grid-rows-2
				lg:w-full
				lg:self-start
				lg:row-span-1
        "
			>
				<h3
					className="avatar-display-descwrapper-username
          text-h3
					font-bold
          text-secondary
          dark:text-dark-primary
					md:text-h1
					lg:col-span-2
					lg:row-span-1
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
					lg:col-span-2
					lg:row-span-2
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
					lg:col-start-3
					lg:row-start-1
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
					lg:row-start-2
					lg:row-end-2
          "
			>
				{bio}
			</p>
		</div>
	);
};

export default AvatarDisplay;
