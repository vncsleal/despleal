import clsx from "clsx";

/**
 * A flexible layout component to constrain content width and add consistent padding.
 *
 * @param {string} as - The HTML tag to render (default: "div").
 * @param {string} yPadding - Vertical padding size ("sm", "base", "lg", or "none").
 * @param {boolean} collapsible - If true, allows collapsing via `data-collapsible` for animations.
 * @param {string} maxWidth - Custom maximum width for the container (default: "max-w-6xl").
 * @param {string} className - Additional class names for customization.
 * @param {ReactNode} children - Content to render inside the component.
 */
export function Bounded({
	as: Comp = "div",
	yPadding = "base",
	collapsible = true,
	maxWidth = "max-w-6xl",
	className,
	children,
}) {
	const paddingClasses = clsx({
		"py-8 md:py-10": yPadding === "sm",
		"py-20 md:py-28": yPadding === "base",
		"py-32 md:py-48": yPadding === "lg",
		"py-0": yPadding === "none",
	});

	return (
		<Comp
			data-collapsible={collapsible}
			className={clsx("px-6", paddingClasses, className)}
		>
			<div className={clsx("mx-auto w-full", maxWidth)}>{children}</div>
		</Comp>
	);
}
