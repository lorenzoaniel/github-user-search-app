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
          bg-secondary
					px-[2.4rem]
					pt-[3.1rem]
					pb-[7.9rem]
          font-monospace
          dark:bg-dark-secondary
			"
			>
				{children}
			</body>
		</html>
	);
}
