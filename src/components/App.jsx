import React, { useState } from "react";
import { ReactDOM } from "react";

function App() {
    let currentTime = new Date().toLocaleTimeString();

    let [time, setTime] = useState(currentTime);
    
    function updateTime() {
        let newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    setInterval(() => {
        updateTime();
        console.log("Updating...");
    }, 1000);

    return <div>
        <h1>{time}</h1>
    </div>
}

export default App;