import classNames from "../../util/classNames"

function PrimaryButton({
	children,
	className,
	small,
	...props
}: React.PropsWithChildren<
	React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> & {
		small?: boolean
	}
>) {
	return (
		<button
			className={classNames(
				"relative overflow-hidden uppercase tracking-wider font-medium bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg shadow-inner group",
				className,
				small
					? "text-[0.6rem] sm:text-xs px-3 py-2"
					: "text-xs sm:text-sm px-5 py-3"
			)}
			{...props}
		>
			<span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-slate-600 dark:border-slate-300 group-hover:w-full"></span>
			<span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-slate-600 dark:border-slate-300 group-hover:w-full"></span>
			<span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-slate-600 dark:bg-slate-300 group-hover:h-full"></span>
			<span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-slate-600 dark:bg-slate-300 group-hover:h-full"></span>
			<span className="absolute inset-0 w-full h-full duration-300 delay-300 opacity-0 bg-slate-900 dark:bg-slate-50 group-hover:opacity-100"></span>
			<span className="relative transition-colors duration-300 delay-200 text-slate-600 dark:text-slate-300 group-hover:text-slate-50 dark:group-hover:text-slate-600">
				{children}
			</span>
		</button>
	)
}

export default PrimaryButton
