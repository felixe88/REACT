import React from "react";

const Welcome = ({ name = 'Felice' }) => {

    return (
        <p>Welcome, {name}</p>
    )
}
export default Welcome;