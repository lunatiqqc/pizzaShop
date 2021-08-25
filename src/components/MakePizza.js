import React from "react";

import pizzabase from "../lib/base.json";
import pizzatoppings from "../lib/toppings.json";

export default function MakePizza() {
    return (
        <div>
            <article>
                <h1>Make a pizza</h1>
                <form action=''>
                    <fieldset>
                        <legend>Choose pizzabase</legend>
                        {pizzabase.map((base) => {
                            return (
                                <div key={base}>
                                    <label htmlFor={base}>{base}</label>
                                    <input
                                        type='checkbox'
                                        id={base}
                                        name='base'
                                        value={base}
                                    />
                                </div>
                            );
                        })}
                    </fieldset>
                    <fieldset>
                        <legend>Choose pizzatopping</legend>
                        {pizzatoppings.map((topping) => {
                            return (
                                <div key={topping}>
                                    <label htmlFor={topping}>{topping}</label>
                                    <input
                                        type='checkbox'
                                        id={topping}
                                        name='toppings'
                                        value={topping}
                                    />
                                </div>
                            );
                        })}
                    </fieldset>

                    <button type='submit'>Order pizza</button>
                </form>
            </article>
        </div>
    );
}
