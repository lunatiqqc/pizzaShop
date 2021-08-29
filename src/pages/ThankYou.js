import React from "react";
import { useLocation } from "react-router-dom";

export default function ThankYou() {
    const location = useLocation();

    console.log(location.state);

    const pizza = location.state;
    return (
        <div>
            <article>
                <h1>Thank you for your order</h1>
                <div>
                    <h2>Order details</h2>
                    <table>
                        <tbody>
                            {Object.entries(pizza).map((entry) => {
                                return (
                                    <tr>
                                        <th>{entry[0]}</th>
                                        <td>{entry[1]}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </article>
        </div>
    );
}
