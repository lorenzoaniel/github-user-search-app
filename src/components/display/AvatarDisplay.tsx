"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

interface Props {
	username?: string | null;
	githubhandle?: string | null;
	joindate?: string | null;
	avatarimgsrc?: string;
	bio?: string | null;
}

const AvatarDisplay: React.FC<Props> = ({
	username = "Not Available",
	githubhandle = "Not Available",
	joindate = null,
	avatarimgsrc = "/",
	bio = "This profile has no bio",
}) => {
	const [userData, setUserData] = useState({ username, githubhandle, joindate, avatarimgsrc, bio });
	const formatDate = useCallback((dateString: string | number | Date) => {
		const monthNames = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];

		const date = new Date(dateString);
		const day = date.getDate();
		const monthIndex = date.getMonth();
		const year = date.getFullYear();

		const suffix =
			day % 10 === 1 && day !== 11
				? "st"
				: day % 10 === 2 && day !== 12
				? "nd"
				: day % 10 === 3 && day !== 13
				? "rd"
				: "th";

		return `${monthNames[monthIndex]} ${day}${suffix}, ${year}`;
	}, []);

	useEffect(() => {
		setUserData((curr) => ({
			...curr,
			...(username !== curr.username && { username }),
			...(githubhandle !== curr.githubhandle && { githubhandle }),
			...(joindate !== curr.joindate && { joindate }),
			...(avatarimgsrc !== curr.avatarimgsrc && { avatarimgsrc }),
			...(bio !== curr.bio && { bio }),
		}));
	}, [username, githubhandle, joindate, avatarimgsrc, bio]);

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
				rounded-full
				row-span-1
				col-span-1
				self-center
				justify-self-center
				md:w-[11.7rem]
				md:h-[11.7rem]
				lg:row-span-2
				lg:mr-[5rem]
				lg:ml-[2rem]
				lg:w-[13rem]
				lg:h-[13rem]
				"
				width={70}
				height={70}
				src={userData.avatarimgsrc}
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
					truncate
          text-h3
					font-bold
          text-secondary
          dark:text-dark-primary
					md:text-h1
					lg:col-span-2
					lg:row-span-1
          "
				>
					{userData.username}
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
					{"@" + userData.githubhandle}
				</h4>
				<h4
					className="avatar-display-descwrapper-joindate
          text-h4
          text-toggle
          dark:text-dark-primary
					md:text-body
					lg:col-start-3
					lg:row-start-1
					lg:justify-self-end
          "
				>
					{userData.joindate ? formatDate(userData.joindate) : "Not Available"}
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
				{userData.bio ?? "Not Available"}
			</p>
		</div>
	);
};

export default AvatarDisplay;
