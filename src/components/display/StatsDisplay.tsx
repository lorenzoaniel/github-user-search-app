"use client";

import React from "react";

interface Props {
	repocount: number;
	followercount: number;
	followingcount: number;
}

const StatsDisplay: React.FC<Props> = ({
	repocount = 0,
	followercount = 0,
	followingcount = 0,
}) => {
	return (
		<aside
			className="stats-display
      bg-secondary
      w-full
      h-[8.5rem]
      flex
      justify-around
      items-center
      p-[1.5rem]
      rounded-[1rem]
      dark:bg-dark-secondary
      lg:w-[48rem]
      lg:self-end
      lg:justify-start
      lg:pl-[3.2rem]
      lg:gap-x-[9.5rem]
      "
		>
			<div
				className="stats-display-reposwrapper
        flex
        flex-col
        w-fit
        h-[4.8rem]
        gap-y-[0.8rem]
        lg:gap-y-0
        "
			>
				<h6
					className="stats-display-reposwrapper-repotitle
          text-statstitle
          text-secondary
          dark:text-dark-primary
          dark:opacity-50
          lg:text-h4
          "
				>
					{"Repos"}
				</h6>
				<h3
					className="stats-display-reposwrapper-repodata
          text-h3
          font-bold
          text-secondary
          dark:text-dark-primary
          text-center
          lg:text-h2
          lg:text-left
          "
				>
					{repocount}
				</h3>
			</div>
			<div
				className="stats-display-followerswrapper
        flex
        flex-col
        w-fit
        h-[4.8rem]
        gap-y-[0.8rem]
        lg:gap-y-0
        "
			>
				<h6
					className="stats-display-followerswrapper-followerstitle
          text-statstitle
          text-secondary
          dark:text-dark-primary
          dark:opacity-50
          lg:text-h4
          "
				>
					{"Followers"}
				</h6>
				<h3
					className="stats-display-followerswrapper-followersdata
          text-h3
          font-bold
          text-secondary
          dark:text-dark-primary
          text-center
          lg:text-h2
          lg:text-left
          "
				>
					{followercount}
				</h3>
			</div>
			<div
				className="stats-display-followingwrapper
        flex
        flex-col
        w-fit
        h-[4.8rem]
        gap-y-[0.8rem]
        lg:gap-y-0
        "
			>
				<h6
					className="stats-display-followingwrapper-followingtitle
          text-statstitle
          text-secondary
          dark:text-dark-primary
          dark:opacity-50
          lg:text-h4
          "
				>
					{"Following"}
				</h6>
				<h3
					className="stats-display-followingwrapper-followingdata
          text-h3
          font-bold
          text-secondary
          dark:text-dark-primary
          text-center
          lg:text-h2
          lg:text-left
          "
				>
					{followingcount}
				</h3>
			</div>
		</aside>
	);
};

export default StatsDisplay;
