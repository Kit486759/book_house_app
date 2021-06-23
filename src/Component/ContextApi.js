import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import Reducer from './Reducer';

export const ContextProvider = createContext()

function ContextApi({ children }) {

    const [state, dispatch] = useReducer(Reducer)
    
    const fetchApi = async () => {

        try {
            const apiKey = process.env.REACT_APP_API_KEY
            const res = await axios.get(`https://www.zillow.com/webservice/ProReviews.htm?zws-id=${apiKey}&email=kit486759@gmail.com`)
            console.log(res.data)
            // console.log(apiKey)
            dispatch({type:"default", payload: res.data})
        }
        catch (err) {
            console.log(`There is an error ${err}`)
        }

    }

    useEffect(() => {
        fetchApi()
    }, [])

console.log(state)

    return (
        <ContextProvider.Provider>
            {children}
        </ContextProvider.Provider>
    )
}

export default ContextApi
