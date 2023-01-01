import axios from "axios";
import React from "react";
import { useState } from "react";
import "./Contact.css";
import swal from "sweetalert";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    description: "",
  });
  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    try {
      if (!input.name || !input.email || !input.description) {
        swal({
          title: "All fields are required",
          text: "Please filled up the form",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        });
      } else {
        axios
          .post("/api/me/mail", input)
          .then((res) => {
            swal("success", "Message send successful", "success");
            setInput({
              name: "",
              email: "",
              description: "",
            });
          })
          .catch((error) => {
            console.log(error);
            swal("failed", "Message send failed", "failed");
          });
      }
    } catch (error) {
      console.log(error);

      swal("failed", "Message send failed", "failed");
    }
  };
  return (
    <>
      <div className="contact">
        <h1>Contact</h1>
        <div className="container">
          <div className="form-wrap">
            <div className="left-form" data-aos="fade-up-right">
              <div className="form-info">
                <div className="form-content-wrap">
                  <div className="form-info-icon">
                    <a href="tel: 01865243109">
                      <i class="fa-solid fa-phone"></i>
                    </a>
                  </div>
                  <div className="form-info-text">
                    <a href="tel:01865243109">+8801865243109</a>
                  </div>
                </div>

                <div className="form-content-wrap">
                  <div className="form-info-icon">
                    <a href="mailto: sajjadhossainctg26@gmail.com">
                      <i class="fa fa-envelope"></i>
                    </a>
                  </div>
                  <div className="form-info-text">
                    <a href="mailto:sajjadhossainctg26@gmail.com">
                      sajjadhossainctg26@gmail.com
                    </a>
                  </div>
                </div>

                <div className="form-content-wrap">
                  <div className="form-content-wrap">
                    <div className="form-info-icon">
                      <i class="fa fa-map-location-dot"></i>
                    </div>
                    <div className="form-info-text">
                      <a>Lohagara Amirabad Chittagong</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-form" data-aos="fade-up-left">
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleInput}
                  value={input.name}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleInput}
                  value={input.email}
                />
                <textarea
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={handleInput}
                  value={input.description}
                />
                <button className="hero_btn" type="submit">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
