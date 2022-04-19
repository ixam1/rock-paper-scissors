import React from "react"
import classNames from "../../util/classNames"

function SecondaryButton({
	children,
	className,
	...props
}: React.PropsWithChildren<
	React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>
>) {
	return (
		<button
			className={classNames(
				"px-3 py-2 rounded-xl dark:bg-slate-900 shadow-sm bg-white text-slate-400 block dark:hover:bg-slate-700 hover:bg-slate-200 transition-colors text-xs border dark:border-slate-700",
				className
			)}
			{...props}
		>
			{children}
		</button>
	)
}

export default SecondaryButton
