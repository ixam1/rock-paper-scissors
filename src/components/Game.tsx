import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DarkModeButton from "./elements/DarkModeButton"
import Layout from "./Layout"
import SecondaryButton from "./elements/SecondaryButton"
import allGameConfigs from "../config/allGameConfigs"
import ConfigHistoryBox from "./elements/ConfigHistoryBox"
import useGame from "../hooks/useGame"
import ResetButtons from "./elements/ResetButtons"

import ShowdownStage from "./stages/ShowdownStage"
import ConfigStage from "./stages/ConfigStage"
import RevealStage from "./stages/RevealStage"
import GithubButton from "./elements/GithubButton"

function Game() {
	const game = useGame()

	return (
		<Layout>
			<div className="flex justify-between gap-2 mb-2 sm:mb-4">
				{game.state.stage !== "config" ? (
					<SecondaryButton onClick={game.resetConfig}>
						<FontAwesomeIcon icon={faHome} />
					</SecondaryButton>
				) : (
					<div></div>
				)}
				<div className="flex gap-2">
					<GithubButton />
					<DarkModeButton />
				</div>
			</div>

			{game.state.stage === "config" && (
				<ConfigStage gameConfigs={allGameConfigs} setConfig={game.setConfig} />
			)}

			{game.state.stage !== "config" && (
				<div className="space-y-8">
					{game.state.config && (
						<ConfigHistoryBox
							history={game.configHistory}
							config={game.state.config}
							resetConfigHistory={game.resetConfigHistory}
						/>
					)}

					{game.state.stage === "player1Picking" &&
						game.state.config?.player1.pickAction({
							actions: game.state.config.actions,
							setAction: game.setPlayer1Pick,
						})}

					{game.state.stage === "player2Picking" &&
						game.state.config?.player2.pickAction({
							actions: game.state.config.actions,
							setAction: game.setPlayer2Pick,
						})}

					{game.state.stage === "showdown" && (
						<ShowdownStage
							state={game.state}
							determineWinner={game.determineWinner}
						/>
					)}
					{game.state.stage === "reveal" && (
						<>
							<RevealStage state={game.state} />
							<ResetButtons
								resetConfig={game.resetConfig}
								resetGame={game.resetGame}
							/>
						</>
					)}
				</div>
			)}
		</Layout>
	)
}

export default Game
