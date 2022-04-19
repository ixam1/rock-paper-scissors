import HumanPickingStage from "../../components/stages/HumanPickingStage"
import { Player } from "../../types/Game.types"

const human: Player = {
	hideUntilReveal: false,
	name: "You",
	pickAction: HumanPickingStage,
}

export default human
