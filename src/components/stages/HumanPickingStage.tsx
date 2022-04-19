import ActionCard from "../elements/ActionCard"
import { Player } from "../../types/Game.types"

const HumanPickingStage: Player["pickAction"] = ({ setAction, actions }) => {
	return (
		<fieldset className="w-full p-2 pt-0 border sm:pt-6 sm:p-8 border-slate-600 dark:border-slate-300 rounded-xl">
			<legend className="px-2 font-light uppercase text-slate-600 dark:text-slate-300">
				Pick One
			</legend>
			<div className="flex flex-wrap justify-center w-full">
				{actions.map((action) => (
					<ActionCard
						key={action.name}
						front={action.icon}
						onClick={() => setAction(action)}
					/>
				))}
			</div>
		</fieldset>
	)
}

export default HumanPickingStage
