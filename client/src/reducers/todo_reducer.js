

export default function (state=[], action) {
    switch (action.type) {
        case "ADD_TODO":
            return Object.assign({}, ...state, { todo: action.todos })
        default:
             return state
    }
}