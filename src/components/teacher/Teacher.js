import React, { Component } from "react";

class Teacher extends Component {

    render () {
        console.log(this.props);
        const { a, addTeacher, removeTeacher } = this.props;
        const { teacherName, teacherAge } = a;
        console.log(addTeacher);
        return (
            <div>
                <div>Teacher Name:{teacherName}</div>
                <div>Teacher Age :{teacherAge} </div>
                <div>
                    <button onClick={addTeacher}>Add Teacher</button>
                    <button onClick={removeTeacher}>Remove Teacher</button>
                </div>
            </div>
        );
    }
}

export default Teacher;