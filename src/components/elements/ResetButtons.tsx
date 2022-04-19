import { faRefresh } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PrimaryButton from "./PrimaryButton"

function ResetButtons({
	resetGame,
	resetConfig,
}: {
	resetGame: () => void
	resetConfig: () => void
}) {
	return (
		<div className="flex w-full gap-2">
			<PrimaryButton small className="flex-1" onClick={resetGame}>
				<FontAwesomeIcon icon={faRefresh} /> Rematch
			</PrimaryButton>
			<PrimaryButton small className="flex-1" onClick={resetConfig}>
				Change Mode
			</PrimaryButton>
		</div>
	)
}

export default ResetButtons
