import React, {Component} from "react";
class App extends Component {
    render() {
        console.log(this.props);
        const {app, incrementValue, decrementValue} = this.props;
        return (
            <div>
                <input value={app.value} />
                <button onClick={incrementValue}>Increment</button>
                <button onClick={decrementValue}>Decrement</button>
            </div>
        );
    }
}

export default App;
