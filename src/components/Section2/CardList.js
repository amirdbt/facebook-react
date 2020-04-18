import React from 'react'
import Card from "./Card"

const CardList = ({users}) => {
    return (
        <div>
            {
                users.map((user, i) => (
                    <Card key={i} id={user.id} firstname={user.first_name} lastname={user.last_name} />
                ))
            }
        </div>
    )
}

export default CardList
