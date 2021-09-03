import React, { forwardRef, useEffect, useRef, useState } from "react";

import pizzaOptions from "../lib/pizzaOptions.json";

import CheckMark from "./CheckMark";

import { Link } from "react-router-dom";

import {
    AnimatePresence,
    motion,
    useElementScroll,
    useViewportScroll,
} from "framer-motion";

import InViewAnimation from "./InViewAnimation";

export default forwardRef(function MakePizza({ makePizzaRef }) {
    const [pizzaBase, setPizzaBase] = useState();

    const [pizzaToppings, setPizzaToppings] = useState([]);

    const handleSetPizzaToppings = (topping) => {
        if (pizzaToppings.includes(topping)) {
            setPizzaToppings((prevState) => {
                const index = prevState.indexOf(topping);
                return [
                    ...prevState.slice(0, index),

                    ...prevState.slice(index + 1),
                ];
            });

            return;
        }

        setPizzaToppings((prevState) => {
            return [...prevState, topping];
        });
    };

    const getTopping = (topping, typeOfTopping) => {
        return (
            <div>
                <div key={topping}>
                    <InViewAnimation style={{ width: "100%" }}>
                        <label
                            htmlFor={topping}
                            style={{ width: "100%", height: "100%" }}
                        >
                            {topping}
                            <input
                                type='checkbox'
                                id={topping}
                                style={{ display: "none" }}
                                onClick={() => {
                                    console.log("click");
                                    handleSetPizzaToppings(topping);
                                }}
                            />
                            <CheckMark
                                isChecked={pizzaToppings.includes(topping)}
                                //handleSetChecked={handleSetChecked}
                            />
                        </label>
                    </InViewAnimation>
                </div>
            </div>
        );
    };

    const pizzaBaseContainer = useRef();

    const pizzaBaseContainerWidth = useRef();
    const pizzaBaseContainerHeight = useRef();

    useEffect(() => {
        pizzaBaseContainerHeight.current =
            pizzaBaseContainer.current.offsetWidth;
        pizzaBaseContainerWidth.current =
            pizzaBaseContainer.current.offsetWidth;

        console.log(scrollYProgress);
    }, []);

    const scrollY = useRef();
    const { scrollYProgress } = useViewportScroll();
    return (
        <div ref={scrollY}>
            <article
                ref={makePizzaRef}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/paper.jpg)`,
                    backgroundSize: "contain",
                    filter: "brightness(0.8)",
                }}
            >
                <h1 style={{ margin: "5vh 0" }}>Make a pizza</h1>
                <form action=''>
                    <AnimatePresence>
                        <motion.fieldset
                            ref={pizzaBaseContainer}
                            key={"base"}
                            //initial={{ scale: 0 }}
                            //animate={{ scale: 1 }}
                            exit={{ scale: 0, height: 0 }}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "center",
                                width: pizzaBaseContainerWidth.current + 0.5,
                                height: pizzaBaseContainerHeight + 0.5,
                            }}
                        >
                            <legend>Choose pizzabase</legend>
                            <AnimatePresence>
                                {pizzaOptions.bases.map((base) => {
                                    if (
                                        pizzaBase === base ||
                                        pizzaBase === undefined
                                    ) {
                                        return (
                                            <motion.div
                                                exit={{ height: 0 }}
                                                initial={{ height: 0 }}
                                                animate={{ height: "auto" }}
                                                key={base}
                                                style={{
                                                    overflow: "hidden",
                                                    width: "",
                                                }}
                                            >
                                                <div>
                                                    <InViewAnimation
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                    >
                                                        <label htmlFor={base}>
                                                            {base}
                                                            <input
                                                                type='radio'
                                                                id={base}
                                                                style={{
                                                                    display:
                                                                        "none",
                                                                }}
                                                                onClick={() => {
                                                                    setPizzaBase(
                                                                        base
                                                                    );
                                                                }}
                                                            />
                                                            <CheckMark
                                                                isChecked={
                                                                    pizzaBase ===
                                                                    base
                                                                }
                                                            />
                                                        </label>
                                                    </InViewAnimation>
                                                </div>
                                                {pizzaBase === base ? (
                                                    <button
                                                        style={{
                                                            padding: "5%",
                                                            backgroundColor:
                                                                "#441813",
                                                            color: "white",
                                                            fontFamily:
                                                                "inherit",
                                                        }}
                                                        type='button'
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setPizzaBase();
                                                        }}
                                                    >
                                                        Undo
                                                    </button>
                                                ) : null}
                                            </motion.div>
                                        );
                                    }
                                })}
                            </AnimatePresence>
                        </motion.fieldset>
                    </AnimatePresence>

                    {true ? (
                        <motion.fieldset
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                flexDirection: "row",
                                textAlign: "center",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <legend>Choose pizzatopping</legend>
                            {Object.entries(pizzaOptions.toppings).map(
                                (entry) => {
                                    return (
                                        <fieldset key={entry[0]}>
                                            <legend>{entry[0]}</legend>

                                            {entry[1].map((topping) => {
                                                return getTopping(
                                                    topping,
                                                    entry[0]
                                                );
                                            })}
                                        </fieldset>
                                    );
                                }
                            )}
                        </motion.fieldset>
                    ) : null}

                    <Link
                        to={{
                            pathname: "/thank-you",
                            state: {},
                        }}
                    >
                        <button
                            style={{
                                padding: "10%",
                                fontFamily: "inherit",
                                fontSize: "1rem",
                                margin: "3vh 0",
                                background: "rgb(86 36 21)",
                                color: "white",
                                fontWeight: "bold",
                            }}
                            type='button'
                        >
                            Order pizza
                        </button>
                    </Link>
                </form>
            </article>
        </div>
    );
});
