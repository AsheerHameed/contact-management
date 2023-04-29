import React, { useState } from "react";
import "./contactForm.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("active");
  const [submissions, setSubmissions] = useState([]);

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

  const handleEdit = (index, column, event) => {
    const newSubmissions = [...submissions];
    newSubmissions[index][column] = event.target.textContent;
    setSubmissions(newSubmissions);
  };
  return (
    <div>
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
        <label>
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
      <table className="submissions">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Form;
