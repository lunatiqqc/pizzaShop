import React from "react";

import { motion } from "framer-motion";

import MakePizza from "../components/MakePizza";

export default function Home() {
    return (
        <div>
            <nav
                style={{
                    backgroundImage: "url(/images/banner.jpg)",
                    height: "41vw",
                    backgroundSize: "cover",
                    display: "flex",
                    alignItems: "center",
                    filter: "",
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
            </nav>
            <MakePizza />
        </div>
    );
}
