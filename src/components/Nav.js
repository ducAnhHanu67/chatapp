import React from 'react'
import { useSelector } from 'react-redux';

export const Nav = () => {
    const data123 = useSelector(state => state.auth.login.currentUser);
    return (
        <div className='navbar' >
            <div className='user'>
                <span>{data123.name}</span>

            </div>

        </div>
    )
}
