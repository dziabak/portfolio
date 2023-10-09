const themeButton = document.querySelector(".theme-button");

const toggleTheme = () => {
	if (localStorage.theme === "dark") {
		// document.documentElement.classList.add("light");
		// document.documentElement.classList.remove("dark");
		localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
        
	} else {
		// document.documentElement.classList.add("dark");
		// document.documentElement.classList.remove("light");
		localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
	}
};

themeButton.addEventListener("click", toggleTheme);
