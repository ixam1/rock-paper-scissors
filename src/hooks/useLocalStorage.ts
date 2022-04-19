import { useCallback, useState, useEffect } from "react"

export default function useLocalStorage<T>(
	key: string,
	defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
	const getFromLocalStorage = () => {
		const jsonValue = window.localStorage.getItem(key)
		if (jsonValue != null) return JSON.parse(jsonValue)

		if (typeof defaultValue === "function") {
			return defaultValue()
		} else {
			return defaultValue
		}
	}

	const [value, setValue] = useState<T>(getFromLocalStorage)

	useEffect(() => {
		setValue(getFromLocalStorage())
	}, [key])

	useEffect(() => {
		if (value === undefined) window.localStorage.removeItem(key)
		else window.localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
}
