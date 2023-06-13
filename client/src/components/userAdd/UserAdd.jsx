import React from 'react'

const UserAdd = () => {
  return (
    <>
    <div>
    <form action="">
            <div>
                <input type="text" placeholder='First Name' />
            </div>
            <div>
                <input type="text" placeholder='Last Name' />
            </div>
        
            <button type='submit' className='btn btn-success'>Add User</button>
        </form>
    </div>

    </>
  );
}

export default UserAdd;