import { ConfigHistory } from "../types/Game.types"

export default function (configHistory: ConfigHistory) {
	let player1Wins = 0
	let player2Wins = 0
	let ties = 0
	let difference = 0

	for (const config of configHistory) {
		if (config.whoWon === "player1") {
			player1Wins++
			difference++
		}

		if (config.whoWon === "player2") {
			player2Wins++
			difference--
		}
		if (config.whoWon === "tie") ties++
	}

	return {
		player1Wins,
		player1Advantage: difference,
		player2Wins,
		player2Advantage: -difference,
		ties,
	}
}
