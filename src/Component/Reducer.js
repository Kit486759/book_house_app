export default function reducer(state, action) {

    switch (action.type) {
        case "ADD_BOOKMARK":
            if (!state) {
                return [action.payload]
            } else {
                return [...state, action.payload]
            }
        case "DEL_BOOKMARK":
            return state.filter((data) => data.id !== action.payload)

        default:
            return action.payload
    }

}