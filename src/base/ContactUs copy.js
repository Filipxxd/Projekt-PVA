import React, { useState } from "react";
import axios from "axios";
import { FaCommentDots } from "react-icons/fa";
import "./addons.css";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      severity: "",
      message: ""
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then(response => {
      if (response.data.status === "success") {
        alert("Odesláno.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Odeslání se nezdařilo.");
      }
    });
  }

  resetForm() {
    this.setState({ subject: "", severity: "", message: "" });
  }

  render() {
    const [isVisible, setVisible] = useState("false");
    return (
      <>
        <FaCommentDots onClick={setVisible(!isVisible)} />
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
          className={`${isVisible ? "shown" : "hidden"}`}
        >
          <div className="form-group">
            <label htmlFor="subject">Předmět</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              value={this.state.subject}
              onChange={this.subjectChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="severity">Závažnost</label>
            <input
              type="severity"
              className="form-control"
              id="severity"
              value={this.state.severity}
              onChange={this.severityChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Zpráva</label>
            <textarea
              className="form-control"
              rows="5"
              id="message"
              value={this.state.message}
              onChange={this.messageChange.bind(this)}
            />
          </div>
          <button type="submit" className="contactSendBtn">
            Submit
          </button>
        </form>
      </>
    );
  }

  subjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  severityChange(event) {
    this.setState({ severity: event.target.value });
  }

  messageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default ContactUs;
