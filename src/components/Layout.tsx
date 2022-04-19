import { useEffect } from "react"

function Layout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		function appHeight() {
			const doc = document.documentElement
			doc.style.setProperty("--vh", window.innerHeight * 0.01 + "px")
		}

		window.addEventListener("resize", appHeight)
		appHeight()

		return () => window.removeEventListener("resize", appHeight)
	}, [])

	return (
		<div
			className="flex flex-col min-h-screen w-full p-2 antialiased bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100"
			style={{
				minHeight: "calc(var(--vh, 1vh) * 100)",
			}}
		>
			<div className="w-full sm:w-96 mx-auto">{children}</div>
		</div>
	)
}

export default Layout
