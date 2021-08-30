import React, { useEffect, useRef, useState } from "react";

import pizzaOptions from "../lib/pizzaOptions.json";

import { Link } from "react-router-dom";

export default function MakePizza() {
    const getTopping = (topping, typeOfTopping) => {
        return (
            <div key={topping}>
                <label htmlFor={topping}>{topping}</label>
                <input
                    type='checkbox'
                    id={topping}
                    name={typeOfTopping}
                    value={topping}
                />
            </div>
        );
    };

    return (
        <div>
            <article
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundImage: "url(/images/paper.jpg)",
                    backgroundSize: "cover",
                }}
            >
                <h1 style={{ margin: "5vh 0" }}>Make a pizza</h1>
                <form action=''>
                    <fieldset
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "center",
                        }}
                    >
                        <legend>Choose pizzabase</legend>
                        {pizzaOptions.bases.map((base) => {
                            return (
                                <div key={base}>
                                    <label htmlFor={base}>{base}</label>
                                    <input
                                        type='radio'
                                        id={base}
                                        name='base'
                                        value={base}
                                    />
                                </div>
                            );
                        })}
                    </fieldset>
                    <fieldset
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: "row",
                            textAlign: "center",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <legend>Choose pizzatopping</legend>
                        {Object.entries(pizzaOptions.toppings).map((entry) => {
                            return (
                                <fieldset key={entry[0]}>
                                    <legend>{entry[0]}</legend>

                                    {entry[1].map((topping) => {
                                        return getTopping(topping, entry[0]);
                                    })}
                                </fieldset>
                            );
                        })}
                    </fieldset>

                    <Link
                        to={{
                            pathname: "/thank-you",
                            state: {},
                        }}
                    >
                        <button type='button'>Order pizza</button>
                    </Link>
                </form>
            </article>
        </div>
    );
}
