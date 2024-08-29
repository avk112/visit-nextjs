"use client";

import { useState } from "react";
import FormAcceptation from "./FormAcceptation";

const FormOrder = () => {
  class FormToFill {
    name: string;
    email: string;

    constructor(name = "", email = "") {
      this.name = name;
      this.email = email;
    }
  }

  const [formData, setFormData] = useState(new FormToFill());
  const [isSent, setIsSent] = useState(false);

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData(new FormToFill());
    setIsSent(true);
  };

  return !isSent ? (
    <form className="form-order" onSubmit={sendMessage}>
      <input id="name" value={formData.name} placeholder="Enter your name" onChange={handleForm} />
      <input id="email" value={formData.email} placeholder="Enter your email" onChange={handleForm} />
      <button className="standart-button">Join now</button>
    </form>
  ) : (
    <FormAcceptation message="Your booking is accepted! We will contact you soon." />
  );
};

export default FormOrder;
