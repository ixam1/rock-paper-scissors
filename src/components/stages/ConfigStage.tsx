import PrimaryButton from "../elements/PrimaryButton"
import { GameConfiguration } from "../../types/Game.types"

function ConfigStage({
	gameConfigs,
	setConfig,
}: {
	gameConfigs: GameConfiguration[]
	setConfig: (config: GameConfiguration) => void
}) {
	return (
		<div className="flex flex-col items-center gap-8">
			<div className="w-full p-6 shadow sm:p-8 bg-slate-50 sm:w-96 rounded-xl dark:bg-slate-800">
				<h1 className="text-2xl font-extrabold tracking-wider uppercase sm:text-3xl">
					<div>Rock</div> <div>Paper</div> <div>Scissors</div>
				</h1>
			</div>

			<fieldset className="w-full p-6 pt-6 border sm:p-8 border-slate-600 dark:border-slate-300 rounded-xl sm:w-96">
				<legend className="px-2 font-light uppercase text-slate-600 dark:text-slate-300">
					Play now
				</legend>
				<div className="space-y-6 sm:space-y-8">
					{gameConfigs.map((config) => (
						<PrimaryButton
							className="w-full"
							key={config.historyId}
							onClick={() => setConfig(config)}
						>
							{config.title}
							{config.subtitle && (
								<>
									{" "}
									<span className="whitespace-nowrap">{config.subtitle}</span>
								</>
							)}
						</PrimaryButton>
					))}
				</div>
			</fieldset>
		</div>
	)
}

export default ConfigStage
