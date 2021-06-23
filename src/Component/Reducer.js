export default function reducer (state, action) {

    switch (action.type) {
        case "EDIT":
            return [...state, action.payload]

        default:
            return action.payload
    }

}