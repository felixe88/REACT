import React from "react";
import { Counter } from "./Counter";


class App extends React.Component {
    render() {
        return (
            <div>
                <Counter counter={0}/>
            </div>
        );
    }
}
export default App