import React, { useState, useEffect } from 'react'

import axios from 'axios'

export const UserData = () => {
    const [res, setData] = useState("")

    useEffect(() => {
        const getData = async () => {
            try {
                const res1 = await axios.get('https://jsonplaceholder.typicode.com/users');

                console.log(res1)
                setData(res1)

            }
            catch (err) {
                console.log(err)

            }
        };

        getData()
    }, []);
    //console.log(res.length)

    return (
        <>
            {res.data.map((ele) =>
                
                <ul class="list-group">
                    <h4>{ele.name}</h4>
                    <li class="list-group-item">{ele.username}</li>
                    <li class="list-group-item">{ele.email}</li>
                    <li class="list-group-item">{ele.address}</li>
                    <li class="list-group-item">{ele.username}</li>
                    <li class="list-group-item">{ele.username}</li>
                </ul>

            )}
        </>
    )
}
