import { Action } from "../../types/Game.types"

const rockPaperScissors: Action[] = [
	{
		name: "Rock",
		icon: "🗿",
		beats: [{ name: "Scissors", type: "breaks" }],
	},
	{
		name: "Paper",
		icon: "📃",
		beats: [{ name: "Rock", type: "covers" }],
	},
	{
		name: "Scissors",
		icon: "✂️",
		beats: [{ name: "Paper", type: "cut" }],
	},
]

export default rockPaperScissors
