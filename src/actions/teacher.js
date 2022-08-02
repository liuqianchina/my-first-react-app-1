import * as actions from '../constants/teacher';

export const addTeacher = () => ({
    type: actions.ADD_TEACHER,
    teacher: {
        teacherName: "liuqian",
        teacherAge: "31",
    },
});

export const removeTeacher = () => ({
    type: actions.REMOVE_TEACHER,
    teacher: {
        teacherName: "",
        teacherAge: "",
    },
});


