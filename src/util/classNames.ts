export default function (...classes: any[]) {
	return classes.filter(Boolean).join(" ")
}
