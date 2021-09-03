import { Override, useMotionValue, animate } from "framer";

// Declare the controls variable outside the other functions so we can access it from all of them
let contentOffsetY;

// Apply this override to your scroll component
export function Scroll() {
    contentOffsetY = useMotionValue(0);

    return { contentOffsetY };
}

// Smooth scroll to a value
export function SmoothScroll() {
    return {
        onTap: () => {
            animate(contentOffsetY, -570, { duration: 1.5, ease: "easeOut" });
        },
    };
}
