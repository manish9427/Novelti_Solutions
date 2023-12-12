// components/UserForm.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createUser, updateUser, selectUserById } from "../redux/userSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useParams();

  const user = useSelector((state) => selectUserById(state, userId));

  const [formData, setFormData] = useState({
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

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const validateForm = () => {
    let errors = {};
    // Implement validation logic
    if (!formData.firstName || formData.firstName.length < 5) {
      errors.firstName = "First Name must be at least 5 characters";
    }
    // Add validations for other fields

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (userId) {
        dispatch(updateUser({ userId, ...formData }));
      } else {
        dispatch(createUser(formData));
      }

      history.push("/");
    }
  };

  return (
    <div>
      <h2>{userId ? "Edit User" : "Create User"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {formErrors.firstName && (
            <div className="error">{formErrors.firstName}</div>
          )}
        </div>
        {/* Add similar code for other form fields */}
        <button type="submit">{userId ? "Update User" : "Create User"}</button>
      </form>
    </div>
  );
};

export default UserForm;
