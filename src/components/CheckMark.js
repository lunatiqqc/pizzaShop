import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useState } from "react";

export default function CC_20_SVG_path_length(props) {
    const { isChecked } = props;

    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

    return (
        <div style={{ display: "flex", flexDirection: "" }}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 150 150'
            >
                {isChecked ? (
                    <motion.path
                        d='M38 74.707l24.647 24.646L116.5 45.5'
                        fill='transparent'
                        strokeWidth='20'
                        stroke='#39e'
                        strokeLinecap='round'
                        initial={{ pathLength: 0.0, opacity: 1 }}
                        animate={{ pathLength: 1 }}
                        style={{ pathLength: pathLength, opacity: opacity }}
                    />
                ) : null}
            </svg>
        </div>
    );
}
