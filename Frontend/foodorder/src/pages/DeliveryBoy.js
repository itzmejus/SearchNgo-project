import React from 'react'
import { Link } from "react-router-dom";

function DeliveryBoy() {
    return (
        <div className='container'>
            <div style={{ marginLeft: '20px', paddingLeft: "20px" }}>
                <Link to='/admin/add/deliveryboy'>
                    <button className="userUpdateButton">Add DeliveryBoy</button>

                </Link>
                <Link to='/admin/view/deliveryboy'>

                    <button className="userUpdateButton">View DeliveryBoys</button>
                </Link>
            </div>

        </div>
    )
}

export default DeliveryBoy