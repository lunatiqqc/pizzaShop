import React, { useEffect, useRef, useState } from "react";

import pizzaOptions from "../lib/pizzaOptions.json";

import { Link } from "react-router-dom";

export default function MakePizza() {
    const [pizzaBase, setPizzaBase] = useState();

    const getTopping = (topping, typeOfTopping) => {
        return (
            <div key={topping}>
                <label htmlFor={topping}>{topping}</label>
                <input
                    type='checkbox'
                    id={topping}
                    name={typeOfTopping}
                    value={topping}
                    onClick={() => {
                        setToppings((prevState) => {
                            const copy = prevState;

                            return {
                                copy,
                            };
                        });
                    }}
                />
            </div>
        );
    };

    var obj = {};

    const generateObject = () => {
        Object.keys(pizzaOptions.toppings).forEach((topping) => {
            console.log(topping);
            return (obj[topping] = []);
        });

        return obj;
    };

    const [toppings, setToppings] = useState(generateObject());

    return (
        <div>
            <article>
                <h1>Make a pizza</h1>
                <form
                    action=''
                    onChange={() => {
                        console.log(toppings);
                    }}
                >
                    <fieldset>
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
                                        onClick={() => {
                                            setPizzaBase(base);
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </fieldset>
                    <fieldset style={{ display: "flex", flexWrap: "wrap" }}>
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
            <table>
                <tbody>
                    <tr>
                        <th>base</th>
                    </tr>
                    <tr>
                        <td>{pizzaBase}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
