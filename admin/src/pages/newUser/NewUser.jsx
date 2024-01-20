import React from "react";
import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newuser">
      <h1 className="new-user-title">New User</h1>
      <form className="new-user-form">
        <div className="new-user-item">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="new-user-item">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="new-user-item">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="new-user-item">
          <label htmlFor="">Password</label>
          <input type="text" placeholder="password" />
        </div>
        <div className="new-user-item">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="+91 12345 43231" />
        </div>
        <div className="new-user-item">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="Chennai | India" />
        </div>
        <div className="new-user-item">
          <label htmlFor="">Gender</label>
          <div className="new-user-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="">Female</label>
            <input type="radio" name="gender" id="Other" value="Other" />
            <label htmlFor="">Other</label>
          </div>
        </div>
        <div className="new-user-item">
          <label htmlFor="">Active</label>
          <select name="active" id="active" className="new-user-select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="new-user-bt">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
