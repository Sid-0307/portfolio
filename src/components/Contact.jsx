import React, { forwardRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = forwardRef((props, ref) => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      const contactElement = ref.current;
      if (!contactElement) return;

      const rect = contactElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const gradient = `radial-gradient(circle at ${x}px ${y}px, var(--dark-teal), transparent 30%)`;
      contactElement.style.backgroundImage = gradient;
    };

    const contactElement = ref.current;

    if (contactElement) {
      contactElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (contactElement) {
        contactElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [ref]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const templateParams = {
        to_email: "siddharthshankar03@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        "service_qx3rz0b",
        "template_71yh0oj",
        templateParams,
        "z4hfPLz1tJW9hhcnx"
      );

      setStatus("success");
      setShowToast(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setShowToast(false);
        setStatus("");
      }, 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        setStatus("");
      }, 3000);
    }
  };

  return (
    <div className="contact" ref={ref}>
      <div className="contact-text">
        <h1 className="contact-heading">Let's Connect!</h1>
        <p className="contact-subheading">
          Have a question, a project, or just want to say hi?
        </p>
        <p>I'd love to hear from you!</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject (optional)"
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="contact-button"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {showToast && (
          <div className={`toast ${status}`}>
            {status === "success"
              ? "Message sent successfully!"
              : "Failed to send message. Please try again."}
          </div>
        )}
      </form>
    </div>
  );
});

export default Contact;
