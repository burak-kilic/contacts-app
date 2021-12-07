import React, { useState } from 'react'

function List({contacts}) {
    const [filteredText, setFilteredText] = useState("");

    const filtered = contacts.filter( (item) => {
        return Object.keys(item).some( (key) => item[key].toString().toLowerCase().includes(filteredText.toLowerCase()));
    });


    return (
        <div>
            <input 
            placeholder = "Search"
            value = {filteredText}
            onChange= {(e) => setFilteredText(e.target.value)}
            />
            <ul className= "list">
                {
                    filtered.map( (contact,i) => <li key={i}>  <span>{contact.fullName}</span> <span>{contact.phoneNumber}</span>  </li> )
                }
            </ul>

            <p> Total Contacts: ({filtered.length})  </p>
        </div>
    )
}

export default List
