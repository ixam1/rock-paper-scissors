import { useEffect, useState } from "react"
import SecondaryButton from "../elements/SecondaryButton"
import ActionCard from "../elements/ActionCard"
import { GameState } from "../../types/Game.types"

function ShowdownStage({
	determineWinner,
	state,
}: {
	determineWinner: () => void
	state: GameState
}) {
	const [countDown, setcountDown] = useState(3)

	useEffect(() => {
		const id = setInterval(
			() =>
				setcountDown((prev) => {
					if (prev === 0) {
						clearInterval(id)
					}

					return prev - 1
				}),
			1000
		)

		return () => clearInterval(id)
	}, [])

	useEffect(() => {
		const noActionIsHidden =
			!state.config?.player1.hideUntilReveal &&
			!state.config?.player2.hideUntilReveal

		if (countDown === -1 || noActionIsHidden) determineWinner()
	}, [countDown])

	const card1IsFlipped = !!(state.config?.player1.hideUntilReveal && countDown)
	const card2IsFlipped = !!(state.config?.player2.hideUntilReveal && countDown)

	return (
		<>
			<div className="grid grid-cols-3 place-items-center">
				<div>
					<ActionCard
						front={
							!card1IsFlipped && (
								<>
									{state.player1Pick?.icon}
									<div className="sr-only">
										{state.config?.player1.name} picked{" "}
										{state.player1Pick?.name}
									</div>
								</>
							)
						}
						back={countDown}
						flipped={card1IsFlipped}
					/>
				</div>
				<div className="px-10 text-3xl italic font-bold text-center">VS</div>
				<div>
					<ActionCard
						front={
							!card2IsFlipped && (
								<>
									{state.player2Pick?.icon}
									<div className="sr-only">
										{state.config?.player1.name} picked{" "}
										{state.player2Pick?.name}
									</div>
								</>
							)
						}
						back={countDown}
						flipped={card2IsFlipped}
					/>
				</div>
			</div>
			<SecondaryButton className="mx-auto mt-4" onClick={determineWinner}>
				Reveal Now
			</SecondaryButton>
		</>
	)
}

export default ShowdownStage
