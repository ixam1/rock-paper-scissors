import classNames from "../../util/classNames"
import { ConfigHistory, GameConfiguration } from "../../types/Game.types"
import evaluateConfigHistory from "../../helpers/evaluateConfigHistory"

function ConfigHistoryBox({
	history,
	config,
	resetConfigHistory,
}: {
	history: ConfigHistory
	config: GameConfiguration
	resetConfigHistory: () => void
}) {
	const evaluatedHistory = evaluateConfigHistory(history)

	return (
		<div>
			<div className="w-full p-4 mb-2 shadow bg-slate-50 rounded-xl dark:bg-slate-800 sm:mb-4">
				<div className="flex items-center justify-between gap-2">
					<h1 className="font-extrabold leading-none tracking-wider uppercase">
						<div>Rock</div> <div>Paper</div> <div>Scissors</div>
					</h1>
					<h2 className="text-[0.5rem] px-2 py-1 bg-white dark:bg-slate-700 italic rounded-full shadow-md text-center">
						{config.title}
						{config.subtitle && (
							<>
								{" "}
								<span className="whitespace-nowrap">{config.subtitle}</span>
							</>
						)}
					</h2>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-2 text-center sm:gap-4">
				<div className="flex flex-col items-center justify-center px-1 py-2 shadow sm:px-2 bg-slate-50 rounded-xl dark:bg-slate-800">
					<h2 className="text-[0.5rem] sm:text-[0.6rem] font-light">
						{config.player1.name}
					</h2>
					<p
						className={classNames(
							"font-bold text-lg",
							config.highlightWin === "player1" && "text-green-400",
							config.highlightWin === "player2" && "text-red-400"
						)}
					>
						{evaluatedHistory.player1Wins}
					</p>
				</div>

				<div className="flex flex-col items-center justify-center px-1 py-2 shadow sm:px-2 bg-slate-50 rounded-xl dark:bg-slate-800">
					<h2 className="text-[0.5rem] sm:text-[0.6rem] font-light">Ties</h2>
					<p className="text-lg font-bold">{evaluatedHistory.ties}</p>
				</div>

				<div className="flex flex-col items-center justify-center px-1 py-2 shadow sm:px-2 bg-slate-50 rounded-xl dark:bg-slate-800">
					<h2 className="text-[0.5rem] sm:text-[0.6rem] font-light">
						{config.player2.name}
					</h2>
					<p
						className={classNames(
							"font-bold text-lg",
							config.highlightWin === "player2" && "text-green-400",
							config.highlightWin === "player1" && "text-red-400"
						)}
					>
						{evaluatedHistory.player2Wins}
					</p>
				</div>

				<button
					className="flex flex-col items-center justify-center px-1 py-2 transition-all shadow sm:px-2 bg-slate-50 hover:bg-red-300 dark:hover:bg-red-300 hover:text-red-900 rounded-xl dark:bg-slate-800 hover:shadow-xl hover:scale-105"
					onClick={resetConfigHistory}
					title="Reset history"
				>
					<div className="text-[0.5rem] sm:text-[0.6rem] font-light">
						Reset History
					</div>
				</button>
			</div>
		</div>
	)
}

export default ConfigHistoryBox
