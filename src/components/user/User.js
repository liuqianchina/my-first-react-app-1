import React, {Component} from "react";
import store from "../../store";

class User extends Component {
    render() {
        console.log(store.getState().app);
        const { user, addUser, removeUser } = this.props;
        const { username, age } = user;
        return (
            <div>
                User Name:<input value={username} />
                Age:<input value={age} />
                <button onClick={addUser}>Add User</button>
                <button onClick={removeUser}>Remove User</button>
            </div>
        );
    }
}

export default User;