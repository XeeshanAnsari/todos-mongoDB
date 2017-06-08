

export default function (state=[], action) {
    switch (action.type) {
        case "TODOS":
            return action.todos 
        default:
             return state
    }
}