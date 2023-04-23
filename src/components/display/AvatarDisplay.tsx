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
			<Image width={70} height={70} src={avatarimgsrc} alt="avatar-img" />
			<div
				className="avatar-display-descwrapper
        h-[6.9rem]
        w-fit
        flex
        flex-col
        "
			>
				<h3
					className="avatar-display-descwrapper-username
          text-h3
          text-secondary
          dark:text-dark-primary
          "
				>
					{username}
				</h3>
				<h4
					className="avatar-display-descwrapper-githubhandle
          text-h4
          text-link-primary
          dark:text-link-primary
          "
				>
					{githubhandle}
				</h4>
				<h4
					className="avatar-display-descwrapper-joindate
          text-h4
          text-toggle
          dark:text-dark-primary
          "
				>
					{joindate}
				</h4>
			</div>
		</div>
	);
};

export default AvatarDisplay;
