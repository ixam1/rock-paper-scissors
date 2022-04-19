import { useCallback, useState } from "react"
import useLocalStorage from "./useLocalStorage"
import {
	Action,
	ConfigHistory,
	GameConfiguration,
	GameState,
} from "../types/Game.types"

export default function useGame() {
	const [state, setState] = useState<GameState>({
		stage: "config",
	})

	const [configHistory, setConfigHistory] = useLocalStorage<ConfigHistory>(
		state.config?.historyId ?? "",
		[]
	)

	const resetConfig = useCallback(() => {
		setState({
			stage: "config",
			player1Pick: undefined,
			player2Pick: undefined,
			whoWon: undefined,
			config: undefined,
		})
	}, [setState])

	const resetGame = useCallback(() => {
		setState((state) => ({
			...state,
			stage: "player1Picking",
			player1Pick: undefined,
			player2Pick: undefined,
			whoWon: undefined,
		}))
	}, [setState])

	const resetConfigHistory = useCallback(() => {
		setConfigHistory([])
	}, [setConfigHistory])

	const setConfig = useCallback(
		(config: GameConfiguration) => {
			setState((state) => ({
				...state,
				config,
			}))
			resetGame()
		},
		[resetGame]
	)

	const setPlayer1Pick = useCallback(
		(action: Action) => {
			setState((state) => ({
				...state,
				stage: "player2Picking",
				player1Pick: action,
			}))
		},
		[setState]
	)

	const setPlayer2Pick = useCallback(
		(action: Action) => {
			setState((state) => ({
				...state,
				stage: "showdown",
				player2Pick: action,
			}))
		},
		[setState]
	)

	const determineWinner = useCallback(() => {
		const { player1Pick, player2Pick } = state

		if (!player1Pick || !player2Pick) return

		let whoWon: GameState["whoWon"]

		if (player1Pick.name === player2Pick.name) whoWon = "tie"

		if (player1Pick.beats.some((beats) => beats.name === player2Pick.name))
			whoWon = "player1"

		if (player2Pick.beats.some((beats) => beats.name === player1Pick.name))
			whoWon = "player2"

		if (whoWon) {
			setConfigHistory((prev) => [
				...prev,
				{
					player1Pick: state.player1Pick,
					player2Pick: state.player2Pick,
					whoWon,
				},
			])

			setState((state) => ({
				...state,
				stage: "reveal",
				whoWon,
			}))
		}
	}, [state, setState])

	return {
		setConfig,
		resetConfig,
		resetConfigHistory,
		resetGame,
		determineWinner,
		setPlayer1Pick,
		setPlayer2Pick,
		state,
		configHistory,
	}
}
