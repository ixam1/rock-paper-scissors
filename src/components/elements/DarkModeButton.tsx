import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import useLocalStorage from "../../hooks/useLocalStorage"
import SecondaryButton from "./SecondaryButton"

function DarkModeButton() {
	const [darkMode, setdarkMode] = useLocalStorage(
		"darkMode",
		window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
	)

	useEffect(() => {
		if (darkMode) document.body.classList.add("dark")
		else document.body.classList.remove("dark")
	}, [darkMode])

	return (
		<SecondaryButton
			title="Toggle dark mode"
			onClick={() => setdarkMode(!darkMode)}
		>
			<FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
		</SecondaryButton>
	)
}

export default DarkModeButton
