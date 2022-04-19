import { Action, Player } from "../../types/Game.types"

const computer: Player = {
	hideUntilReveal: true,
	name: "Computer",
	pickAction: ({ actions, setAction }) => {
		const randomIndex = Math.floor(Math.random() * actions.length)
		setAction(actions[randomIndex])
		return null
	},
}

export default computer
