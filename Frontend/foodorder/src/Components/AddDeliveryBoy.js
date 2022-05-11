import Axios from 'axios';
import React, { useState } from 'react'
import "../Styles/newUser.css";

function AddDeliveryBoy() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const CreateDeliveryBoyHandler = () => {
        Axios.post("http://localhost:5000/admin/add/deliveryboy", {
            userName: userName,
            email: email,
            password: password,
        }).then(() => {
            alert("added successfully");
        })
            .catch("failed");
    }

    return (
        <div className='container'>
            <div className='newUser'>
                <h1 className="newUserTitle">New Deliveryboy</h1>
                <form className='newUserForm'>
                    <div className='newUserItem'>
                        <label>Username</label>
                        <input type='text' placeholder='enter user name' onChange={(e) => { setUserName(e.target.value) }} />
                    </div>
                    <div className='newUserItem'>
                        <label>Email</label>
                        <input type='email' placeholder='enter user email' onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className='newUserItem'>
                        <label>Password</label>
                        <input type='password' placeholder='enter user Password' onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <button className='newUserButton' onClick={CreateDeliveryBoyHandler}>Create</button>
                </form>

            </div>
        </div>
    )
}

export default AddDeliveryBoy