import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

import "./Quizsignup.css";
import db from "../../Firebase.js";
import {
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
} from "firebase/firestore";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer(black)/FooterBlack";
function Quizsignup() {
  function i_information_visible()
  {
    let k=document.getElementById('i_button_content');
    k.style.visibility="visible"
  }
  function i_information_nonvisible()
  {
    let k=document.getElementById('i_button_content');
    k.style.visibility="hidden"
  }
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    semester: "",
    referal: "",
    transaction: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  const routeChange = async (event) => {
    event.preventDefault();
    const { name, email, phone, college, branch, semester, referal } = userData;
    if (name && email && phone && college && branch && semester) {
      if (document.getElementById("agree").checked) {
        window.open("");
        document.getElementById("payform-button2").disabled = false;
        document.getElementById("transaction").disabled = false;
        return true;
      } else {
        alert(
          "Please tick on agree to the Terms and Conditions and Privacy Policy"
        );
        return false;
      }
    } else {
      alert("Please fill the data");
    }
  };
  // connect with firebase
  // const SubmitData = async (ev) => {
  //   ev.preventDefault();
  //   const { name, email, phone, college, branch, semester,referal,transaction } = userData;
  //   if(transaction.length == 0){
  //     alert("Please pay the fees and fill TransactinId")
  //   }
  //   else{
  //     const res = fetch(
  //       "https://tryingquiz-default-rtdb.firebaseio.com/userDataRecords.json",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name, email, phone, college, branch, semester,referal,transaction,
  //         }),
  //       }
  //     );

  //     if (res) {
  //       setUserData({
  //         name: "", email:"", phone:"", college:"", branch:"", semester:"",referal:"",transaction:""
  //       });
  //       alert("Data Stored");
  //     }

  //   }
  // };

  return (
    <>
    <NavBar/>
    <br/>
      <p className="payform-heading">REGISTER FOR QUIZ</p>
      <div className="payform-container">
        <div method="POST" className="payform-form">
          <div className="field">
            {" "}
            <span className="payform-label">Full Name * </span>
            <br />
            <input
              className="payform-input"
              type="text"
              alt="Name"
              name="name"
              id="amb_name"
              required="required"
              value={userData.name}
              onChange={postUserData}
            />{" "}
          </div>
          <div className="field">
            <span className="payform-label">Email id* </span>
            <br />
            <input
              className="payform-input"
              type="Email"
              name="email"
              id="amb_email"
              required="required"
              value={userData.email}
              onChange={postUserData}
            />{" "}
          </div>
          <div className="field">
            <span className="payform-label">Phone No. * </span>
            <br />
            <input
              className="payform-input"
              type="number"
              name="phone"
              required="required"
              id="amb_phone"
              value={userData.phone}
              onChange={postUserData}
            />
          </div>
          <div className="field">
            <span className="payform-label">College</span>
            <br />
            <input
              className="payform-input"
              type="text"
              required="unrequired"
              name="college"
              id="amb_college"
              value={userData.college}
              onChange={postUserData}
            />{" "}
          </div>
          <div className="field">
            <span className="payform-label"> Branch </span>
            <br />
            <input
              className="payform-input"
              type="name"
              name="branch"
              required="unrequired"
              id="amb_branch"
              value={userData.branch}
              onChange={postUserData}
            />
          </div>
          <div className="field">
            {" "}
            <span className="payform-label"> Semester </span>
            <br />
            <input
              className="payform-input"
              type="email"
              name="semester"
              alt="semester"
              id="amb_semester"
              required="unrequired"
              value={userData.semester}
              onChange={postUserData}
            />
          </div>

          <div className="field">
            {" "}
            <span className="payform-label"> Referal Code(optional code) </span>
         
            <br />
           
            <div id="referal_check">
            <input
              className="payform-input"
              type="email"
              name="referal"
              alt=""
              id="referal_code"
              required="unrequired"
              value={userData.referal}
              onChange={postUserData}
            />
               <img id="ref_image"src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-information-camping-dreamstale-lineal-dreamstale.png" 
                onMouseOver={i_information_visible}
                onMouseOut={i_information_nonvisible}
               />
    
               </div>
               
               {/* &nbsp; &nbsp;
            <img
              src="https://img.icons8.com/ios/20/000000/info--v4.png"
              style={{ margin: "-6px" }}
            /> */}
            
          </div>
          {/* <br />
          <br /> */}
          <div id="pay_button">
            <div id="paynow">
          <button onClick={routeChange} className="payform-button">
            ₹ &nbsp; Pay Now
          </button></div>
          <div id="i_button_content">
              <h4>Referal Code Must be correct Code Must be correct</h4>
            </div>
           </div>
          <div className="field">
            {" "}
            <span className="payform-label"> Transaction ID </span>
            <br />
            <input
              id="transaction"
              className="payform-input"
              type=""
              name="transaction"
              alt=""
              id="transaction"
              disabled={true}
              required=""
              value={userData.transaction}
              onChange={postUserData}
            />
          </div>
          <br />

          <button
            onClick={submit}
            id="payform-button2"
            className="payform-button2"
          >
            Confirm Registration
          </button>
        </div>
        <div className="payform-infocontain">
          <div className="payform-info">
            <FaInfoCircle /> &nbsp; <span id="quiz_registration">Instructions</span>
            <p className="instruction_para">
              * Make sure your email id is correct as you will be getting
              confirmation on that email
            </p>
            <p className="instruction_para">
              * After clicking on Pay, <b>NOTE TRANSACTION ID </b>you get from
              RazorPay and add it to Transaction ID Field
            </p>
            <p className="instruction_para">
              * Transaction ID Field will be <b>activated</b> when payment is
              made.
            </p>
          </div>
          <br />
          <div className="payform-checkbox">
            <input type="checkbox" id="agree" name="" value="" />
            <div id="read_content">
            I have read and understood the instructions
            </div>
            <br />
            <br />
          </div>
          <br />
          <br />
        </div>
      </div>
      <br/>
      <Footer/>
    </>
  );
}
function submit() {
  var studentName = document.getElementById("amb_name");
  var collegeName = document.getElementById("amb_college");
  var branch = document.getElementById("amb_branch");
  var semester = document.getElementById("amb_semester");
  var phone = document.getElementById("amb_phone");
  var email = document.getElementById("amb_email");
  var referalcode = document.getElementById("referal_code");
  var transaction = document.getElementById("transaction");
  const docdata = {
    studentName: studentName.value,
    collegeName: collegeName.value,
    branch: branch.value,
    semester: semester.value,
    phone: phone.value,
    email: email.value,
    referalcode: referalcode.value,
    transaction: transaction.value,
  };

  validateForm(docdata);
}

//form validation
function validateForm(docdata) {
  if (
    docdata.studentName == "" ||
    docdata.collegeName == "" ||
    docdata.branch == "" ||
    docdata.phone == "" ||
    docdata.email == "" ||
    docdata.transaction == ""
  ) {
    alert("Please fill up the required fields.");
  } else if (docdata.phone.length != 10) {
    alert("phone number should be of length 10.");
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(docdata.email)
  ) {
    alert("Please enter a valid email address.");
  } else {
    setInfo(docdata);
  }
}
function deletedata() {
  var studentName = document.getElementById("amb_name");
  var collegeName = document.getElementById("amb_college");
  var branch = document.getElementById("amb_branch");
  var semester = document.getElementById("amb_semester");
  var phone = document.getElementById("amb_phone");
  var email = document.getElementById("amb_email");
  var referalcode = document.getElementById("referal_code");
  var transaction = document.getElementById("transaction");
  studentName.value = null;
  collegeName.value = null;
  branch.value = null;
  semester.value = null;
  phone.value = null;
  email.value = null;
  referalcode.value = null;
  transaction.value = null;
}

//save to database
async function setInfo(docdata) {
  document.getElementById("payform-button2").disabled = true;
  document.getElementById("payform-button2").style.backgroundColor = "gray";
  var timestamp = String(new Date().getTime());
  await setDoc(doc(db, "quizsignup", timestamp), docdata);
  alert("Congratulations! Your information saved successfully.");
  deletedata();
  document.getElementById("payform-button2").disabled = false;
  document.getElementById("payform-button2").style.backgroundColor =
    "#E9910DFC";
  // window.location.reload();
}

export default Quizsignup;
