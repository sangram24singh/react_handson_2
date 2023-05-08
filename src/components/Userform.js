import React, { useState } from "react";
import "./forms.css";
import Result from "./Result";


const Input = () => {
  const [list, setList] = useState([]);
  const [click, setClick] = useState(true);
  const [Userinput, setUserinput] = useState({
    Username: "",
    Department: "",
    rating: "",
  });

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserinput({ ...Userinput, [name]: value });
  };
  const clickhandler = (e) => {
    e.preventDefault();

    const newrecord = { ...Userinput };
    setList([...list, newrecord]);
    console.log(list);

    setUserinput({
      Username: "",
      Department: "",
      rating: "",
    });

    setClick(!click)
  };


  const goback = () => {
    setClick(!click);
  };

  return (
    <>
      {click ? (

          <form action="">
            <label className="main"  for="Name">
              Name:
            </label>
            <input
              type="text"
              className="main_name"
              name="Username"
              id="Username"
              required
              value={Userinput.Username}
              onChange={handlechange}
            />
            <br />
            <label className="main"  for="Department">
              Department:
            </label>
            <input
              type="text"
              className="main_name"
              name="Department"
              id="Department"
              required
              value={Userinput.Department}
              onChange={handlechange}
            />
            <br />
            <label className="main" for="rating">
              Rating:
            </label>
            <input
              type="number"
              className="main_name"
              name="rating"
              id="rating"
              required
              value={Userinput.rating}
              onChange={handlechange}
            />
            <br />
            <button onClick={clickhandler}  className="submit1" >submit</button>
          </form>

      ) : (
        <Result lists={list} gobacks={()=>goback()} />
      )}
    </>
  );
};
export default Input;