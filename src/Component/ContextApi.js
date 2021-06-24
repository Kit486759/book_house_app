import React, { createContext, useEffect, useReducer, useContext } from 'react';
import axios from 'axios';
import Reducer from './Reducer';

export const ContextProvider = createContext()

function ContextApi({ children }) {

    const [state, dispatch] = useReducer(Reducer)

    const fetchApi = async () => {

        try {
            const apiKey = process.env.REACT_APP_API_KEY
            // const res = await axios.get(`https://www.zillow.com/webservice/ProReviews.htm?zws-id=${apiKey}&email=kit486759@gmail.com`)
            const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
            const data = await res.data.slice(0, 19)


            dispatch({ type: "default", payload: data })
            console.log(data)
        }
        catch (err) {
            console.log(`There is an error ${err}`)
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])



    return (
        <>
            {state && (
            <ContextProvider.Provider value={{ state, dispatch }}>
                {children}
            </ContextProvider.Provider>
           )}
        </>
    )
}

// const Context = () => useContext(ContextProvider)
// export { Context }
export default ContextApi
