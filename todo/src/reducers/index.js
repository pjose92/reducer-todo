import moment from "moment";

export const INITIAL_STATE = {
    toDoList: [
        {
            id: 1,
            title: "Walk Millie",
            completed: false,
            due: moment().add(1, "days")
        },
        {
            id: 2,
            title: "Feed Millie",
            completed: false,
            due: moment().add(1, "days")
        },
        {
            id: 3,
            title: "Play with Millie",
            completed: false,
            due: moment().add(1, "days")
        },
        {
            id: 4,
            title: "Make Coffee",
            completed: false,
            due: moment().add(1, "weeks")
        },
    ],
    total: 4
};

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
        return {
            ...state,
            toDoList: [...state.toDoList, action.payload],
            total: state.total + 1
        };

        case "TOGGLE_COMPLETE":
        return {
            ...state,
            toDoList: state.toDoList.map(todo => 
                todo.id === action.payload
                ? {...todo, completed: !todo.completed}
                : todo
                )
        }

        case "CLEAR_COMPLETED":
            return {
                ...state,
                toDoList: state.toDoList.filter(todo => todo.completed === false),
                total: state.toDoList.filter(todo => todo.completed === false).length
            };
            default:
                return state;
    }
}