import React, { createContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Reducer from './Reducer';

export const ContextProvider = createContext()

function ContextApi({ children }) {

    // Set up bookmark array and dispatch by use reducer
    const [bookmark, dispatch] = useReducer(Reducer)

    // Set bookmark function which receive id title image and price as parameter
    const setBookmark = (id, title, img, price) => {

        // Set those values to dispatch funtion
        dispatch({
            type: "ADD_BOOKMARK", payload: {
                id,
                title,
                img,
                price
            }
        })
    }

    const [state, setState] = useState()

    // Get today and tomorrow date by default fetch parameter
    const today = new Date().toISOString().split("T")[0]
    const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0]

    useEffect(() => {

        // Fetch parameter object
        const options = {
            method: 'GET',
            url: 'https://hotels4.p.rapidapi.com/properties/list',
            params: {
                adults1: '1',
                pageNumber: '1',
                destinationId: '169712',
                pageSize: '25',
                checkOut: tomorrow,
                checkIn: today,
                sortOrder: 'BEST_SELLER',
                locale: 'en_CA',
                currency: 'CAD'
            },
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                'x-rapidapi-host': 'hotels4.p.rapidapi.com'
            }
        };

        // fetch
        axios.request(options).then(function (response) {
            // console.log(response.data);

            // Set state
            setState(response.data.data.body.searchResults.results)
        }).catch(function (error) {
            console.error(error);
        });

    }, [today, tomorrow])

    return (
        <>

            <ContextProvider.Provider value={{ state, dispatch, bookmark, setBookmark, today, tomorrow }}>
                {children}
            </ContextProvider.Provider>

        </>
    )
}

export default ContextApi

