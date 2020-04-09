import moment from "moment";

export const INITIAL_STATE = {
    toDoList: [
        {
            id: 123,
            title: "Learn about reducers",
            completed: false,
            due: moment().add(1, "days")
        },
        {
            id: 234,
            title: "Start on project",
            completed: false,
            due: moment().subtract(1, "days")
        },
        {
            id: 3456,
            title: "Finish reducer project",
            completed: false,
            due: moment().add(1, "days")
        },
    ],
    total: 3
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