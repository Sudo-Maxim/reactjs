import React, { useState, useEffect } from "react";


export const Counter = () => { // Component
    const [count, setCount] = useState({ number: 0 });

    useEffect(() => {
        console.log("like did mount------------");
    }, []);

    useEffect(() => {
        console.log("like did mount + like did update string");
    }, []);

    useEffect(() => {
        return () => {
            console.log("will unmount");
        };
    }, []);

    useEffect(() => {
        console.log("mount and every update");
    });

    return (
        <div className="Message">
            <button onClick={() => setCount({ number: count.number + 1 })}>increase</button>
            <span>Counter: {count.number}</span>
        </div>
    );

};