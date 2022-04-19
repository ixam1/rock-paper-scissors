import { GameState } from "../types/Game.types"

export default function (state: GameState) {
	if (state.whoWon === "tie") return "Noone wins this round"

	if (state.whoWon === "player1") {
		const beatType = state.player1Pick?.beats?.find(
			({ name }) => name === state.player2Pick?.name
		)?.type

		return `${state.player1Pick?.icon} ${state.player1Pick?.name} ${beatType} ${state.player2Pick?.name} ${state.player2Pick?.icon}`
	}

	if (state.whoWon === "player2") {
		const beatType = state.player2Pick?.beats?.find(
			({ name }) => name === state.player1Pick?.name
		)?.type

		return `${state.player2Pick?.icon} ${state.player2Pick?.name} ${beatType} ${state.player1Pick?.name} ${state.player1Pick?.icon}`
	}

	return ""
}
