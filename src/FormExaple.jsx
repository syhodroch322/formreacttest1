import React, { useState } from "react";
import "./FormExample.css";

const FormExample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email) {
      setError("Please fill in both fields.");
    } else {
      setError("");

      const data = { name, email };

      try {
        const response = await fetch("https://yourapi.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          alert("Form submitted successfully!");
          setName("");
          setEmail("");
        } else {
          setError("There was an error submitting the form.");
        }
      } catch (error) {
        setError("Network error. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        />
      </div>
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default FormExample;
