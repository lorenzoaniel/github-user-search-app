"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const DarkModeToggleButton: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Load the initial dark mode preference from localStorage or prefers-color-scheme on mount
	useEffect(() => {
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const storedDarkMode = localStorage.getItem("darkMode");
		const isDarkMode = storedDarkMode !== null ? storedDarkMode === "true" : prefersDark;
		setIsDarkMode(isDarkMode);
	}, []);

	// Update the localStorage value whenever the dark mode preference is changed
	useEffect(() => {
		localStorage.setItem("darkMode", isDarkMode.toString());
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isDarkMode]);

	// Toggle the dark mode preference when the button is clicked
	const handleToggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<button
			className="theme-toggle-button
			bg-transparent
			h-[4.6rem]
			w-[8.4rem]
			rounded-[1rem]
			flex
			justify-between
			items-center
			text-primary
			dark:bg-transparent
			dark:text-dark-primary
			"
			onClick={handleToggleDarkMode}
		>
			<span
				className="theme-toggle-button-label
				text-themetoggle
				tracking-[0.25rem]
				"
			>
				{isDarkMode ? "LIGHT" : "DARK"}
			</span>
			<Image
				width={20}
				height={20}
				src={"/assets/images/icon-moon.svg"}
				alt={"theme-icon"}
				priority
			/>
		</button>
	);
};

export default DarkModeToggleButton;
