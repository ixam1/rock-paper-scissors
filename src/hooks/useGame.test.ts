import { renderHook, act } from "@testing-library/react-hooks"
import allGameConfigs from "../config/allGameConfigs"
import useGame from "./useGame"

test("useGame with all Game Configs", () => {
	const { result } = renderHook(() => useGame())

	expect(result.current.state.stage).toBe("config")

	allGameConfigs.forEach((gameConfig) => {
		act(() => {
			result.current.setConfig(gameConfig)
		})

		expect(result.current.state.config).toBe(gameConfig)
		expect(result.current.state.stage).toBe("player1Picking")

		const player1Action = gameConfig.actions[0]

		act(() => {
			result.current.setPlayer1Pick(player1Action)
		})

		expect(result.current.state.player1Pick).toBe(player1Action)
		expect(result.current.state.stage).toBe("player2Picking")

		act(() => {
			result.current.setPlayer2Pick(player1Action)
		})

		expect(result.current.state.player1Pick).toBe(player1Action)
		expect(result.current.state.stage).toBe("showdown")

		gameConfig.actions.forEach((player2Action, index) => {
			act(() => {
				result.current.resetGame()
			})

			act(() => {
				result.current.setPlayer1Pick(player1Action)
			})

			act(() => {
				result.current.setPlayer2Pick(player2Action)
			})

			act(() => {
				result.current.determineWinner()
			})

			expect(result.current.state.stage).toBe("reveal")

			if (index === 0) {
				expect(result.current.state.whoWon).toBe("tie")
				return
			}

			if (
				player2Action.beats.some((action) => player1Action.name === action.name)
			)
				expect(result.current.state.whoWon).toBe("player2")
			else expect(result.current.state.whoWon).toBe("player1")
		})

		act(() => {
			result.current.resetGame()
		})

		expect(result.current.state.stage).toBe("player1Picking")
		expect(result.current.state.config).toBe(gameConfig)

		act(() => {
			result.current.resetConfig()
		})

		expect(result.current.state.stage).toBe("config")
		expect(result.current.state.config).toBe(undefined)
	})
})
