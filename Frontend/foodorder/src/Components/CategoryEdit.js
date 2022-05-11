import React from 'react'
import Axios from "axios";
// import { Publish } from "@material-ui/icons";
function CategoryEdit() {
  const UpdateCategoryHandler=(id)=>{
    Axios.put(`http://localhost:5000/admin/update/category/${id}`)
  }
  return (
    <div>
      <div className="userUpdate">
        <span className="userUpdateTitle">Edit</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Category Name</label>
              <input
                type="text"
                placeholder="Breakfast"
                className="userUpdateInput"
              />
            </div>
          </div>
        </form>
        <div className="userUpdateRight">
          <button className="userUpdateButton">Update</button>
        </div>
      </div>
    </div>
  )
}

export default CategoryEdit