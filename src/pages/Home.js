import React, { useEffect, useLayoutEffect, useRef } from "react";

import {
    animate,
    motion,
    useElementScroll,
    useSpring,
    useTransform,
    useViewportScroll,
} from "framer-motion";

import MakePizza from "../components/MakePizza";
import About from "./About";

export default function Home() {
    const { scrollYProgress } = useViewportScroll();

    const yRange = useTransform(
        scrollYProgress,
        [0, 1],
        [0, window.innerHeight]
    );

    const makePizzaRef = useRef();

    const aboutRef = useRef();

    const { scrollY } = useViewportScroll();

    useEffect(() => {}, []);

    return (
        <div style={{ backgroundColor: "black" }}>
            <motion.nav
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner.jpg)`,
                    height: "41vw",
                    backgroundSize: "cover",
                    display: "flex",
                    alignItems: "center",
                    filter: "",
                    y: yRange,
                }}
            >
                <motion.div
                    style={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: "white",
                        height: "100%",
                        justifyContent: "space-evenly",
                    }}
                >
                    <motion.h1 style={{ letterSpacing: "0.3rem" }}>
                        Pizza shop
                    </motion.h1>
                    <ul>
                        <motion.li
                            initial={{ x: window.innerWidth * -1 }}
                            animate={{ x: 0 }}
                            style={{
                                margin: "2vh 0",
                                backgroundImage: "linear-gradient(#fff, #fff)",
                                backgroundPosition: "0 100% ",
                                backgroundSize: "0% 2px",
                                backgroundRepeat: "no-repeat",
                            }}
                            transition={{ ease: "easeInOut" }}
                            whileHover={{
                                backgroundSize: "100% 2px",
                            }}
                            onTap={() => {
                                console.log(makePizzaRef);

                                //window.scrollTo({
                                //    top: 100,
                                //    left: 100,
                                //    behavior: "smooth",
                                //});
                                console.log("tapped");
                                animate(0, makePizzaRef.current.offsetTop, {
                                    duration: 1,
                                    onUpdate: (v) => {
                                        window.scrollTo(0, v);
                                    },
                                });
                            }}
                        >
                            Make a pizza
                        </motion.li>
                        <motion.li
                            initial={{ x: window.innerWidth * -1 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.1, ease: "easeInOut" }}
                            style={{
                                margin: "2vh 0",
                                backgroundImage: "linear-gradient(#fff, #fff)",
                                backgroundPosition: "0 100% ",
                                backgroundSize: "0% 2px",
                                backgroundRepeat: "no-repeat",
                            }}
                            transition={{ ease: "easeInOut", delay: 0.1 }}
                            whileHover={{
                                backgroundSize: "100% 2px",
                            }}
                            onTap={() => {
                                console.log(makePizzaRef);

                                //window.scrollTo({
                                //    top: 100,
                                //    left: 100,
                                //    behavior: "smooth",
                                //});
                                console.log("tapped");
                                animate(0, aboutRef.current.offsetTop, {
                                    duration: 1,
                                    onUpdate: (v) => {
                                        window.scrollTo(0, v);
                                    },
                                });
                            }}
                        >
                            About us
                        </motion.li>
                    </ul>
                </motion.div>

                {/* <figure>
                    <img
                        style={{ width: "100%", height: "" }}
                        src='/images/banner.jpg'
                        alt='pizzashop banner'
                    />
                </figure> */}
            </motion.nav>
            <MakePizza makePizzaRef={makePizzaRef} />
            <About aboutRef={aboutRef} />
        </div>
    );
}
