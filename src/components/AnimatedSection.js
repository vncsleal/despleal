// components/AnimatedSection.js
import React from "react";
import { motion } from "framer-motion";

const AnimatedSection = ({ children, delay = 0 }) => {
	return (
		<motion.section
			initial={{ opacity: 1, y: 0 }} // Ensure content is visible instantly
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.6, delay }}
			style={{ visibility: "visible" }} // Fallback for non-animated scenarios
		>
			{children}
		</motion.section>
	);
};

export default AnimatedSection;
