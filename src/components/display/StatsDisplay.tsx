import React from "react";

interface Props {
	repocount: number;
	followercount: number;
	followingcount: number;
}

const StatsDisplay: React.FC<Props> = ({ repocount, followercount, followingcount }) => {
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
      "
		>
			<div
				className="stats-display-reposwrapper
        flex
        flex-col
        w-fit
        h-[4.8rem]
        gap-y-[0.8rem]
        "
			>
				<h6
					className="stats-display-reposwrapper-repotitle
          text-statstitle
          text-secondary
          dark:text-dark-primary
          "
				>
					{"Repos"}
				</h6>
				<h3
					className="stats-display-reposwrapper-repodata
          text-h3
          text-primary
          dark:text-dark-primary
          text-center
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
        "
			>
				<h6
					className="stats-display-followerswrapper-followerstitle
          text-statstitle
          text-secondary
          dark:text-dark-primary
          "
				>
					{"Followers"}
				</h6>
				<h3
					className="stats-display-followerswrapper-followersdata
          text-h3
          text-primary
          dark:text-dark-primary
          text-center
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
        "
			>
				<h6
					className="stats-display-followingwrapper-followingtitle
          text-statstitle
          text-secondary
          dark:text-dark-primary
          "
				>
					{"Following"}
				</h6>
				<h3
					className="stats-display-followingwrapper-followingdata
          text-h3
          text-primary
          dark:text-dark-primary
          text-center
          "
				>
					{followingcount}
				</h3>
			</div>
		</aside>
	);
};

export default StatsDisplay;
