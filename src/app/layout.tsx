import "@/styles/globals.css";

export const metadata = {
	title: "Github User Search App",
	description: "Frontend Mentor Challenge(junior) - NextJS/TailWindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className="app
					h-fit
          flex
					flex-col
          justify-start
          items-center
					gap-y-[5rem]
          bg-secondary
					px-[2.4rem]
					pt-[3.1rem]
					pb-[7.9rem]
          font-monospace
          dark:bg-dark-secondary
					md:px-[9.7rem]
					md:pt-[14rem]
					md:pb-[23.6rem]
					lg:px-[35.5rem]
					lg:pt-[14.4rem]
					lg:pb-[17rem]
			"
			>
				{children}
				<div
					className="attribution
					text-primary 
					dark:text-dark-primary
					"
				>
					{"Challenge by" + " "}
					<a
						className="attribution-link
						text-link-primary 
						dark:text-dark-link-primary"
						href="https://www.frontendmentor.io?ref=challenge"
						target="_blank"
					>
						Frontend Mentor
					</a>
					. Coded by
					<a
						className="attribution-link
						text-link-primary 
						dark:text-dark-link-primary"
						href="https://www.frontendmentor.io/profile/lorenzoaniel"
					>
						{" "}
						Mikhail Lorenzo Aniel
					</a>
					.
				</div>
			</body>
		</html>
	);
}
