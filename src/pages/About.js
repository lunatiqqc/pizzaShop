import { motion } from "framer-motion";
import React, { forwardRef } from "react";
import InViewAnimation from "../components/InViewAnimation";

export default forwardRef(function About({ aboutRef }) {
    const variants = {
        hidden: {
            x: (window.innerWidth / 1.3) * -1,
        },
        visible: {
            x: 0,
        },
    };
    return (
        <div ref={aboutRef}>
            <article style={{ color: "white", textAlign: "center" }}>
                <h1>About us</h1>
                <InViewAnimation variants={variants}>
                    <motion.div
                        style={{
                            background: `url(${process.env.PUBLIC_URL}/images/about.jpg)`,
                            backgroundSize: "cover",
                        }}
                    >
                        <div style={{ background: "rgba(0,0,0,0.5)" }}>
                            <h2>Values</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eius quisquam iure perferendis
                                aut ut. <br />
                                At ullam harum, optio quos corporis enim
                                delectus magni, tempora perspiciatis asperiores
                                sequi cum. <br />
                                Eius dolores debitis esse atque, animi nihil
                                ipsam a quis sunt aut ullam. Eligendi. <br />
                            </p>
                        </div>
                    </motion.div>
                </InViewAnimation>
                <InViewAnimation variants={variants}>
                    <motion.div
                        style={{
                            background: `url(${process.env.PUBLIC_URL}/images/ingredients.jpg)`,
                            backgroundPosition: "center",
                            margin: "10vh 0",
                        }}
                    >
                        <div style={{ background: "rgba(0,0,0,.7)" }}>
                            <h3>Ingredients</h3>
                            <p>
                                Asperiores architecto at beatae, perspiciatis ad
                                quia, totam est, harum ipsa id velit libero.
                                Dolorem natus incidunt commodi soluta ipsam odit
                                iste, cumque aut quam, similique quod. Non!{" "}
                                <br />
                                Autem, vero corporis odio sint sequi iste,
                                molestiae perspiciatis quis cum aspernatur hic?
                                <br />
                                Recusandae ipsum odit, impedit maiores, quos,
                                quibusdam modi mollitia accusamus sit adipisci
                                cum corrupti. <br />
                            </p>
                        </div>
                    </motion.div>
                </InViewAnimation>
            </article>
        </div>
    );
});
