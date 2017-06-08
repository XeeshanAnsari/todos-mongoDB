
export default class TodosActions{
    
    static Todos(todos) {
        return {
            type: "TODOS",
            todos
        }

    }
}