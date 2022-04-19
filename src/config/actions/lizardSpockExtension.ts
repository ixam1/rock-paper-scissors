import { Action } from "../../types/Game.types"

const lizardSpockExtension: Action[] = [
	{
		name: "Rock",
		icon: "🗿",
		beats: [
			{ name: "Scissors", type: "breaks" },
			{ name: "Lizard", type: "crushes" },
		],
	},
	{
		name: "Paper",
		icon: "📃",
		beats: [
			{ name: "Spock", type: "disproves" },
			{ name: "Rock", type: "covers" },
		],
	},
	{
		name: "Scissors",
		icon: "✂️",
		beats: [
			{ name: "Lizard", type: "decapitate" },
			{ name: "Paper", type: "cut" },
		],
	},
	{
		name: "Lizard",
		icon: "🦎",
		beats: [
			{ name: "Paper", type: "eats" },
			{ name: "Spock", type: "poisons" },
		],
	},
	{
		name: "Spock",
		icon: "🖖",
		beats: [
			{ name: "Scissors", type: "smashes" },
			{ name: "Rock", type: "vaporizes" },
		],
	},
]

export default lizardSpockExtension
