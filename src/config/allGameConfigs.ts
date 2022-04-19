import { GameConfiguration } from "../types/Game.types"
import lizardSpockExtension from "./actions/lizardSpockExtension"
import rockPaperScissors from "./actions/rockPaperScissors"
import computer from "./players/computer"
import human from "./players/human"

const allGameConfigs: GameConfiguration[] = [
	{
		title: "You vs. Computer",
		player1: human,
		player2: computer,
		actions: rockPaperScissors,
		historyId: "human-vs-computer",
		highlightWin: "player1",
	},
	{
		title: "Computer vs. Computer",
		player1: { ...computer, name: "Computer 1" },
		player2: { ...computer, name: "Computer 2" },
		actions: rockPaperScissors,
		historyId: "computer-vs-computer",
	},
	{
		title: "You vs. Computer",
		subtitle: "(Lizard Spock)",
		player1: human,
		player2: computer,
		actions: lizardSpockExtension,
		historyId: "human-vs-computer-lizard-spock",
		highlightWin: "player1",
	},
]

export default allGameConfigs
