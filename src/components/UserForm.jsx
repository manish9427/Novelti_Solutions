// src/components/UserForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  updateUser,
  deleteUser,
  selectAllUsers,
} from "../redux/userSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [formData, setFormData] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    // Validation logic for each field

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCreateUser = () => {
    if (validateForm()) {
      dispatch(createUser({ ...formData, id: new Date().getTime() }));
      clearForm();
    }
  };

  const handleUpdateUser = () => {
    if (validateForm()) {
      dispatch(updateUser(formData));
      clearForm();
    }
  };

  const handleEdit = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    setFormData(userToEdit);
  };

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  const clearForm = () => {
    setFormData({
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      address1: "",
      address2: "",
      state: "",
      city: "",
      country: "",
      zipCode: "",
    });
  };

  return (
    <div>
      <h2>User Form</h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="address1">Address 1:</label>
          <input
            type="text"
            id="address1"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="address2">Address 2:</label>
          <input
            type="text"
            id="address2"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />
        </div>

        <button
          type="button"
          onClick={formData.id ? handleUpdateUser : handleCreateUser}
        >
          {formData.id ? "Update User" : "Create User"}
        </button>
      </form>

      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {`${user.firstName} ${user.lastName}`}
            <button onClick={() => handleEdit(user.id)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm;
