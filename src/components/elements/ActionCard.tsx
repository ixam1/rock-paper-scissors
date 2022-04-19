import classNames from "../../util/classNames"
import { useSpring, animated } from "@react-spring/web"

function ActionCard({
	onClick,
	front,
	back,
	flipped,
	onClickTitle,
}: {
	onClick?: () => void
	front: React.ReactNode
	back?: React.ReactNode
	flipped?: boolean
	onClickTitle?: string
}) {
	const Element = onClick ? "button" : "div"

	const { transform, opacity } = useSpring({
		opacity: flipped ? 1 : 0,
		transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
	})

	const className =
		"absolute inset-0 grid text-2xl font-bold transition-shadow duration-300 bg-white shadow-md rounded-xl group-hover:shadow-xl text-slate-800 dark:bg-slate-200 place-items-center sm:text-5xl"

	return (
		<Element
			className={classNames(
				"aspect-1 w-[70px] sm:w-[110px] relative m-2 sm:m-4 hover:scale-105 transition-all duration-300 group",
				onClick ? "cursor-pointer" : "cursor-default"
			)}
			onClick={onClick}
			title={onClickTitle}
		>
			{typeof back !== "undefined" && (
				<animated.div
					style={{
						opacity: opacity.to({
							range: [0, 0.5, 0.51, 1],
							output: [0, 0, 1, 1],
						}),
						transform,
						rotateY: "180deg",
					}}
					className={className}
				>
					{back}
				</animated.div>
			)}
			<animated.div
				style={{
					opacity: opacity.to({
						range: [0, 0.49, 0.5, 1],
						output: [1, 1, 0, 0],
					}),
					transform,
				}}
				className={className}
			>
				{front}
			</animated.div>
		</Element>
	)
}

export default ActionCard
