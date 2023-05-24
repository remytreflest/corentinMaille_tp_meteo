import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ContentLoader from 'react-content-loader'


function Home() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState([true])
    
    useEffect(() => {
        fetchData()
    }, [])
    

    const fetchData = async () => {
        try {
            const response = await axios.get('mon_api_ici')
            setData(response.data)
            setIsLoading(false);
        } catch (error) {
            console.error(error)
        }
    }
 
    return (
        <div>
            <h1>Liste des éléments :</h1>
            { isLoading ? null : <>
                
            </>
            }
        </div>
    )
}
 
export default Home