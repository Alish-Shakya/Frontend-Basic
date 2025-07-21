import React, { useState } from "react";

const Form1 = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [dob, setDOB] = useState("");
  let [gender, setGender] = useState();
  let [isMarreid, setIsMarried] = useState(false);
  let [contactNo, setContactNo] = useState(0);

  let Gender = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Others", value: "other" },
  ];

  const handelSubmit = (e) => {
    e.preventDefault();

    let data = {
      fullName: fullName,
      email: email,
      password: password,
      gender: gender,
      isMarreid: isMarreid,
      contactNo: contactNo,
      dob: dob,
    };
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="fullName">FullName</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={dob}
            onChange={(e) => {
              setDOB(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="isMarried">isMarried</label>
          <input
            type="checkbox"
            name="isMarried"
            id="isMarried"
            value={isMarreid}
            checked={isMarreid === true}
            onChange={(e) => {
              setIsMarried(e.target.checked);
            }}
          />
        </div>

        <div>
          <label>Gender: </label>
          {Gender.map((item, i) => {
            return (
              <span key={i}>
                <label htmlFor={item.value}>{item.label}</label>
                <input
                  type="radio"
                  name={item.value}
                  id={item.value}
                  value={item.value}
                  checked={gender === item.value}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </span>
            );
          })}
          {/* <input
            type="radio"
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          /> */}
        </div>

        <div>
          <label htmlFor="contactNo">Contact: </label>
          <input
            type="number"
            name="contactNo"
            id="contactNo"
            value={contactNo}
            onChange={(e) => {
              setContactNo(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <button type="submit">Submmit</button>
        </div>
      </form>
    </>
  );
};

export default Form1;
