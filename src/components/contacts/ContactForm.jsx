import React, { useState } from "react";
import "./contactForm.css";
import { useDispatch } from "react-redux";
import { addSubmission } from "./store/submissionsSlice";

function ContactForm() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("active");
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newSubmission = {
      firstName: firstName,
      lastName: lastName,
      status: status,
    };
    dispatch(addSubmission(newSubmission));
    setSubmissions([...submissions, newSubmission]);
    setFirstName("");
    setLastName("");
    setStatus("active");
  };
  const handleDelete = (index) => {
    const newSubmissions = [...submissions];
    newSubmissions.splice(index, 1);
    setSubmissions(newSubmissions);
  };

  const handleView = (submission) => {
    setSelectedSubmission(submission);
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  };
  const handleEdit = (index, column, event) => {
    const newSubmissions = [...submissions];
    if (event) {
      newSubmissions[index][column] = event.target.textContent;
    }
    setSubmissions(newSubmissions);
  };
  return (
    <div className="contact-container section__padding">
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              const modal = document.getElementById("myModal");
              modal.style.display = "none";
            }}
          >
            &times;
          </span>
          {selectedSubmission && (
            <div>
              <p>First Name: {selectedSubmission.firstName}</p>
              <p>Last Name: {selectedSubmission.lastName}</p>
              <p>Status: {selectedSubmission.status}</p>
            </div>
          )}
        </div>
      </div>

      <center>
        <h1 style={{marginBottom:"60px"}}>Contact Page</h1>
      </center>

      <form onSubmit={handleSubmit} className="form">
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </label>
        <label style={{ display: "flex" }}>
          Status:
          <label>
            <input
              type="radio"
              value="active"
              checked={status === "active"}
              onChange={handleStatusChange}
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              value="inactive"
              checked={status === "inactive"}
              onChange={handleStatusChange}
            />
            Inactive
          </label>
        </label>
        <input type="submit" value="Submit" />
      </form>
      {submissions.length === 0 ? (
        <div style={{ marginTop: "70px" }}>
          <center>
            <h2>No contacts added</h2>
            <p>Use above form to add contacts</p>
          </center>
        </div>
      ) : (
        <table className="submissions">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>View Contact</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => (
              <tr key={index}>
                <td
                  contentEditable
                  onBlur={(event) => handleEdit(index, "firstName", event)}
                >
                  {submission.firstName}
                </td>
                <td
                  contentEditable
                  onBlur={(event) => handleEdit(index, "lastName", event)}
                >
                  {submission.lastName}
                </td>
                <td
                  contentEditable
                  onBlur={(event) => handleEdit(index, "status", event)}
                >
                  {submission.status}
                </td>
                <td>
                  <button
                    className="editData"
                    onClick={() => handleEdit(index, null)}
                  >
                    Save
                  </button>
                </td>
                <td>
                  <button
                    className="deleteData"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="viewButton"
                    onClick={() => handleView(submission)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ContactForm;
