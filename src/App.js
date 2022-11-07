import "./styles.css";
import { db } from "../src/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import React, { useState } from "react";
function App() {
  console.log(db);
  const userCollectionRef = collection(db, "store");

  const [loader, setLoader] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    birthday: "",
    gender: "",
    experience:"",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(db);
    addDoc(userCollectionRef, {
      name: values.name,
      email: values.email,
      gender: values.gender,
      birthday: values.birthday,
      experience:values.experience
    });
  };

  const [gender, setGender] = useState("Male");

  function onChangeValue(event) {
    setGender(event.target.value);
    console.log(event.target.value);

  }

  const handleChange = (e) => {
    console.log(e.target.checked);
    setValues({
      ...values,
      [e.target.name]: e.target.value
    
    });

    console.log(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Submit form</h1>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <label>Birthday</label>
        <input
          type="date"
          name="birthday"
          onChange={handleChange}
          placeholder="Birthday"
        />
        <label>Gender</label>
        <select onChange={handleChange} name="gender" id="selectList">
          <option value="male">Male</option> {" "}
          <option value="female">Female</option>
        </select>
        <label>Experience in computer</label>

        <div className="radiocontainer" onChange={handleChange}  >
          <div className="containerone"     >
            <div>
              <label>
                {" "}
                <input
                  type="radio"
              
                  value="worse"
                  name="experience"
           
                  checked={values.experience==="worse"}
                />
                Worse
              </label>
            </div>
            <div>
              <label>
                {" "}
                <input
                  type="radio"
            
                  value="average"
                  name="experience"
                  checked={values.experience==="average"}
                />
                Average
              </label>
            </div>
            <div>
              <label>
                {" "}
                <input
                  type="radio"
             
                  name="experience"
                  value="good"
               
                  checked={values.experience ==="good"}
                />
                Good
              </label>
            </div>
          </div>
          <div>
            <div>
              <label>
                {" "}
                <input
                  type="radio"
    
                  name="experience"
                  value="better"
                
                  checked={values.experience ==="better"}
                />
                Better
              </label>
            </div>
            <div>
              <label>
                {" "}
                <input
                  type="radio"
              
                  name="experience"
                  value="best"
  
                  checked={values.experience ==="best"}
                />
                Best
              </label>
            </div>
            <div>
              <label>
                {" "}
                <input
                  type="radio"

                  value="pro"
                  name="experience"
            
                  checked={values.experience ==="pro"}
                />
                Pro
              </label>
            </div>
            <div>
              <label>
                {" "}
                <input
                  type="radio"
     
                  value="other"
                  name="experience"

                  checked={values.experience ==="other"}
                />
                Other
              </label>
            </div>
          </div>
        </div>
        <div></div>
        <button
          type="submit"
          style={{ background:" rgb(29, 122, 110)" },{borderRadius:"10px"}}
        >
          Submit
        </button>


  
        
      </form>
    </div>
  );
}

export default App;
