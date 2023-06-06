import React, { useState } from "react";
import "./singup.css";
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/reducer/userSlice";

const Singup = () => {
  const [inputValue, setinputValue] = useState({});

  const dispatch = useDispatch();
  // lấy vuale từ input
  const getInputValue = (e) => {
    setinputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(register(inputValue)).unwrap();
  };
  return (
    <div className="container">
      <form method="post" autoComplete="on" onSubmit={handleSubmit}>
        {/*First name*/}
        <div className="box">
          <label htmlFor="firstName" className="fl fontLabel">
            First Name:
          </label>
          <div className="new iconBox">
            <i className="fa fa-user" aria-hidden="true" />
          </div>
          <div className="fr">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="textBox"
              autofocus="on"
              required=""
            />
          </div>
          <div className="clr" />
        </div>
        {/*First name*/}
        {/*Second name*/}
        <div className="box">
          <label htmlFor="secondName" className="fl fontLabel">
            Seconed Name:
          </label>
          <div className="fl iconBox">
            <i className="fa fa-user" aria-hidden="true" />
          </div>
          <div className="fr">
            <input
              type="text"
              required=""
              name="secondName"
              placeholder="Last Name"
              className="textBox"
            />
          </div>
          <div className="clr" />
        </div>
        {/*Second name*/}
        {/*-Phone No.----*/}
        <div className="box">
          <label htmlFor="phone" className="fl fontLabel">
            {" "}
            Phone No.:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-phone-square" aria-hidden="true" />
          </div>
          <div className="fr">
            <input
              type="text"
              required=""
              name="phoneNo"
              maxLength={10}
              placeholder="Phone No."
              className="textBox"
            />
          </div>
          <div className="clr" />
        </div>
        {/*-Phone No.--*/}
        {/*-Email ID--*/}
        <div className="box">
          <label htmlFor="email" className="fl fontLabel">
            Email ID:
          </label>
          <div className="fl iconBox">
            <i className="fa fa-envelope" aria-hidden="true" />
          </div>
          <div className="fr">
            <input
              type="email"
              required=""
              name="email"
              placeholder="Email Id"
              className="textBox"
              onChange={getInputValue}
            />
          </div>
          <div className="clr" />
        </div>
        {/*Email ID---*/}
        {/*-Password----*/}
        <div className="box">
          <label htmlFor="password" className="fl fontLabel">
            {" "}
            Password{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-key" aria-hidden="true" />
          </div>
          <div className="fr">
            <input
              type="Password"
              required=""
              name="password"
              placeholder="Password"
              className="textBox"
              onChange={getInputValue}
            />
          </div>
          <div className="clr" />
        </div>
        {/*-Password--*/}
        {/*-Gender---*/}
        {/* <div className="box radio">
          <label htmlFor="gender" className="fl fontLabel">
            {" "}
            Gender:{" "}
          </label>
          <input
            type="radio"
            name="Gender"
            defaultValue="Male"
            required=""
            onChange={getInputValue}
          />{" "}
          Male &nbsp; &nbsp; &nbsp; &nbsp;
          <input
            type="radio"
            name="Gender"
            defaultValue="Female"
            required=""
            onChange={getInputValue}
          />{" "}
          Female
        </div> */}
        {/*-Gender-*/}
        {/*Terms and Conditions----*/}
        {/* <div className="box terms">
          <input type="checkbox" name="Terms" required="" /> &nbsp; I accept the
          terms and conditions
        </div> */}
        {/*Terms and Conditions----*/}
        {/*-Submit Button----*/}
        <div className="box">
          <input
            type="Submit"
            name="Submit"
            className="submit"
            defaultValue="SUBMIT"
          />
        </div>
        {/*-Submit Button---*/}
      </form>
    </div>
  );
};

export default Singup;
