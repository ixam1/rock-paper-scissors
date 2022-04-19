import { ReactNode } from "react"

export type GameConfiguration = {
	title: string
	subtitle?: string
	player1: Player
	player2: Player
	highlightWin?: "player1" | "player2"
	actions: Action[]
	historyId: string
}

export type CurrentGameState = {
	player1Pick?: Action
	player2Pick?: Action
	whoWon?: "player1" | "player2" | "tie"
}

export type GameState = {
	stage: "config" | "player1Picking" | "player2Picking" | "showdown" | "reveal"
	config?: GameConfiguration
} & CurrentGameState

export type ConfigHistory = CurrentGameState[]

export type Player = {
	name: ReactNode
	pickAction: ({
		setAction,
		actions,
	}: {
		setAction: (id: Action) => void
		actions: Action[]
	}) => JSX.Element | null
	hideUntilReveal: boolean
}

export type Action = {
	name: string
	icon: string
	beats: {
		name: string
		type: string
	}[]
}
