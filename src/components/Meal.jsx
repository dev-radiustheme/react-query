import React from 'react'
import { useQuery } from 'react-query'
import { v4 as uuidv4 } from 'uuid';
export default function Meal() {


    const getMealList = async ({ queryKey }) => {
        console.log({ queryKey })
        const mealResponse = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await mealResponse.json()
        return result;
    }
    const { isLoading, error, data } = useQuery(['meals'], getMealList)


    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>

            {data && data.map((data, index) => {
                return <p key={uuidv4()}>{index}-{data.title}</p>

            })}
        </div>
    )
}
