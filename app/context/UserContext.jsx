import React, { createContext } from 'react'
import users from '../data/user'


const UsersContext = createContext({})

export const UsersProvaider = props => {
    return (
        <UsersContext.Provider value={{
            state: {
                users
            }
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}


export default UsersContext