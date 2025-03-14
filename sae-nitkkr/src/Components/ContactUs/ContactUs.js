import React from "react";
import "./ContactUs.css";

import db from "../../Firebase.js";
import {
  collection,
  getDocs,
  Timestamp,
  doc,
  setDoc,
} from "firebase/firestore";

import location from "../../Assets/ContactUs/lc.jpg";
import nx from "../../Assets/ContactUs/nx.jpg";
import ac from "../../Assets/ContactUs/ac.jpg";
import mail from "../../Assets/ContactUs/msg.jpg";

function ContactUS() {
  return (
    <>
      <h1 className="ContactUs_heading">CONTACT <span className="style">US</span></h1>
      <br />
      <br />
      <div className="ContactUs_whole-body">
        <div className="ContactUs_details">
          <div className="ContactUs_abc" id="ContactUs_abcd">
            <div>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <a
              className="ContactUs_location"
              href="https://www.google.com/maps/dir/29.5070878,75.0449986/WRV9%2BW46+Gol+Canteen+(SAE+NITKKR),+NIT,+Thanesar,+Haryana+136119/@29.7293325,74.8076003,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390e3f5100000001:0x7f8e5219d122c23e!2m2!1d76.8178281!2d29.9447794"
            >
              {" "}
              <div className="ContactUs_tt"> Gol,NIT Kurukshetra</div>
              
            </a>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1371.9914590955484!2d76.81686969579629!3d29.944863529234286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e3f5100000001%3A0x348464dd40cfcf28!2sGol%20Canteen!5e0!3m2!1sen!2sin!4v1641211248086!5m2!1sen!2sin" height={150} width={300} allowfullscreen="" loading="lazy"></iframe>
          </div>
     
          <div className="ContactUs_abc" id="ContactUs_space">
            <div>
              {" "}
              <i className="fa fa-envelope" id="ContactUs_env" aria-hidden="true"></i>
            </div>
            <div className="ContactUs_tt"> saenitkurukshetra@gmail.com</div>
          </div>
          <br />
          <br />
          <div className="ContactUs_abc">
            {" "}
            <div className="ContactUs_iconimgnx">
              <img src={nx} alt="" className="ContactUs_dif" />{" "}
            </div>{" "}
            <div className="ContactUs_tt"> teamnitrox@gmail.com</div>
          </div>
          <br />
          <br />
          <div className="ContactUs_abc">
            <div className="ContactUs_iconimgacc">
              {" "}
              <img src={ac} alt="" className="ContactUs_dif"/>
            </div>{" "}
            <div className="ContactUs_tt"> teamaccelerons@gmail.com</div>
          </div>
        </div>

        <div className="ContactUs_container">
          <br />
          <div className="ContactUs_field">
            {" "}
            <input
              type="text"
              alt="Name"
              name="name"
              id="ContactUs_cont_name"
              required="required"
            />{" "}
            <span> Name * </span>
          </div>
          <div className="ContactUs_field">
            {" "}
            <input
              type="email"
              name="email"
              alt="email"
              id="ContactUs_cont_email"
              required="required"
            />
            <span> Email Id * </span>
          </div>
          <div className="ContactUs_field">
            <input type="number" name="phone" id="ContactUs_cont_phone" required="required" />
            <span> Phone No. *</span>
          </div>
          <div className="ContactUs_field">
            <input type="text" name="institute" id="ContactUs_cont_organisation" required="unrequired" />
            <span>Institute/Organisations(optional) </span>{" "}
          </div>
          <div className="ContactUs_field">
            {" "}
            <textarea
              required="required"
              name="message"
              id="ContactUs_cont_message"
              // cols="65"
              // rows="6"
            ></textarea>
            <span>Your Message * </span>
          </div>
          <div className="ContactUs_field">
            Reason to Contact *{" "}
            <select id="ContactUs_s1">
              <option selected hidden value="">
                --Select any one--
              </option>
              <option name="submit blog" value="To submit a blog">
                To submit a blog
              </option>
              <option name="sponsership" value="Sponsorship">
                Sponsorship
              </option>
              <option name="brand_ambassador" value="Brand Ambassador">
                Brand Ambassador
              </option>
              <option name="content was abusive" value="Content was abusive">
                Content was abusive
              </option>
              <option name="other" value="Other">
                Other
              </option>
            </select>
          </div>
          <div className="ContactUs_field">
            Person Contacting us is a *{" "}
            <select id="ContactUs_s2">
              <option selected hidden value="">
                --Select any one--
              </option>
              <option name="club_alumni" value=" Club Alumni">
                Club Alumni
              </option>
              <option name="companyrepresentative" value="Company Representative">
                Company Representative
              </option>
              <option name="student" value="Student">
                Student
              </option>
              <option name="professor" value="Professor">
                Professor
              </option>
              <option name="other" value="Other">
                Other
              </option>
            </select>
          </div>
          <div className="ContactUs_button">
            <button id="contact_button" onClick={submit}> Submit </button>
          </div>
        </div>
      </div>
    </>
  );
}

function submit(){
  var Name = document.getElementById("ContactUs_cont_name");
  var EmailId = document.getElementById("ContactUs_cont_email");
  var PhoneNo = document.getElementById("ContactUs_cont_phone");
  var Organisation = document.getElementById("ContactUs_cont_organisation");
  var Message = document.getElementById("ContactUs_cont_message");
  var s1 = document.getElementById("ContactUs_s1");
  var s2 = document.getElementById("ContactUs_s2");

  const contactUsData = {
    Name: Name.value,
    EmailId: EmailId.value,
    PhoneNo: PhoneNo.value,
    Organisation: Organisation.value,
    Message: Message.value,
    s1: s1.value,
    s2: s2.value,
  };

  validateForm(contactUsData);
}

function validateForm(contactUsData) {
  if (
    contactUsData.Name == "" ||
    contactUsData.EmailId == "" ||
    contactUsData.PhoneNo == "" ||
    contactUsData.Message == "" ||
    contactUsData.s1 == "" ||
    contactUsData.s2 == "" 
  ) {
    alert("Please fill up the required fields.");
  } else if (contactUsData.PhoneNo.length != 10) {
    alert("phone number should be of length 10.");
  } else if (
    !/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(contactUsData.EmailId)
  ) {
    alert("Please enter a valid email address.");
  } else {
    setInfo(contactUsData);
  }
}
function deletedata()
{var Name = document.getElementById("ContactUs_cont_name");
  var EmailId = document.getElementById("ContactUs_cont_email");
  var PhoneNo = document.getElementById("ContactUs_cont_phone");
  var Organisation = document.getElementById("ContactUs_cont_organisation");
  var Message = document.getElementById("ContactUs_cont_message");
  var s1 = document.getElementById("ContactUs_s1");
  var s2 = document.getElementById("ContactUs_s2");
  Name.value=null;
  EmailId.value=null;
  PhoneNo.value=null;
  Organisation.value=null;
  Message.value=null;
  s1.value="--Select any One--";
  s2.value="--Select any One--";
}






async function setInfo(contactUsData) {
  document.getElementById('contact_button').disabled = true
  document.getElementById('contact_button').style.backgroundColor="gray"
  var timestamp = String(new Date().getTime());
  await setDoc(doc(db, "contactUs", timestamp), contactUsData);
  alert("Congratulations! Your information has been saved successfully.");
deletedata();
  // window.location.reload();
  document.getElementById('contact_button').disabled = false
  document.getElementById('contact_button').style.backgroundColor = '#E9910DFC'
}



export default ContactUS;

{/* <div className="abc" id="abcd" ><img src={location} alt="" />
          <a className="location" href="https://www.google.com/maps/dir/29.5070878,75.0449986/WRV9%2BW46+Gol+Canteen+(SAE+NITKKR),+NIT,+Thanesar,+Haryana+136119/@29.7293325,74.8076003,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390e3f5100000001:0x7f8e5219d122c23e!2m2!1d76.8178281!2d29.9447794">  <div className="tt"> Gol,NIT Kurukshetra</div></a>
      </div>
      <div className="abc"> <img src={mail} alt="" />  <div className="tt"> saenitkurukshetra@gmail.com</div></div>
      <br /><br />
      <div className="abc"> <img src={nx} alt="" />  <div className="tt"> teamnitrox@gmail.com</div></div>
      <br /><br />
      <div className="abc"> <img src={ac} alt="" /> <div className="tt"> teamaccelerons@gmail.com</div></div>
</div>

<div className="container">
      <br />
      <div className="field">Name: <div className="input"><input type="text" alt="Name"  /></div></div>
      <div className="field">Email:<div className="input"> <input type="email" name="email" id="" /></div></div>
      <div className="field">Mobile No.: <div className="input"><input type="number" name="" id="" /></div></div>
      <div className="field">Institute: <div className="input"><input type="text" name="" id="" /></div></div>
      <div className="field">Message: <div className="input"><input type="text" name="" id="" /></div></div>
      <div className="field">Reason to contact us:<div className="input"> <select name="--slect any one--" id="s1">
          <option value="option">Want to write a blog</option>
          <option value="option">Sponsership</option>
          <option value="option">Brand Ambassador</option>
          <option value="option">Fault in content on Website</option>
      </select></div></div>
      <div className="field">Person contacting us is: <div className="input"><select name="--select any one--" id="s2">
          <option value="option">Club Alumni</option>
          <option value="option">Company Representative</option>
          <option value="option">Student</option>
          <option value="option">Proffesor</option>
      </select></div></div>
      <div className="button"><button>Submit </button></div> */}