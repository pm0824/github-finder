import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

const Users =(props)=> {
    if(props.loading){
        return <Spinner/>
    }
    else{
        return (
            <div className='grid-3'>
            {
              props.users.map(user=>(
                    <UserItem key={user.id} user={user}/>)
                )
            }
            </div>
        )
    }
}
export default Users
