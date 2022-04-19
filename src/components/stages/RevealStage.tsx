import ActionCard from "../elements/ActionCard"
import { GameState } from "../../types/Game.types"
import generateWinningText from "../../helpers/generateWinningText"
import Confetti from "react-confetti"
import classNames from "../../util/classNames"

function RevealStage({ state }: { state: GameState }) {
	return (
		<div>
			{state.config?.highlightWin === state.whoWon && (
				<Confetti
					confettiSource={{
						x: window.innerWidth / 2,
						y: window.innerHeight / 2,
						h: 20,
						w: 20,
					}}
					recycle={false}
				/>
			)}
			<div className="flex items-center justify-center mb-4 place-items-center">
				<div>
					<div className="text-[0.5rem] sm:text-xs font-bold text-center">
						{state.config?.player1.name} picked{" "}
						<span className="sr-only">{state.player1Pick?.name}</span>
					</div>
					<ActionCard front={state.player1Pick?.icon} />
				</div>
				<div className="px-6 text-xl italic font-bold text-center sm:px-10 sm:text-3xl">
					VS
				</div>
				<div>
					<div className="text-[0.5rem] sm:text-xs font-bold text-center">
						{state.config?.player2.name} picked{" "}
						<span className="sr-only">{state.player2Pick?.name}</span>
					</div>
					<ActionCard front={state.player2Pick?.icon} />
				</div>
			</div>

			<h2
				className={classNames(
					"mb-2 text-3xl font-bold text-center",
					state.config?.highlightWin === state.whoWon && "text-green-400",
					state.config?.highlightWin &&
						state.config?.highlightWin !== state.whoWon &&
						state.whoWon !== "tie" &&
						"text-red-400"
				)}
			>
				{state.whoWon === "player1" && state.config?.player1.name + "  won!"}
				{state.whoWon === "player2" && state.config?.player2.name + "  won!"}
				{state.whoWon === "tie" && "Tie!"}
			</h2>

			<p className="text-xs italic text-center">{generateWinningText(state)}</p>
		</div>
	)
}

export default RevealStage
