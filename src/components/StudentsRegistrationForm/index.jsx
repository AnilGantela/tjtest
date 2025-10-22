import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  FormContainer,
  FormCard,
  Title,
  Input,
  Select,
  TextArea,
  Button,
  FormInnerContainer,
  FormImage,
  FormInputContainer1,
  FormInputContainer2,
  FromInputWrapper,
} from "./styledComponents";

const MySwal = withReactContent(Swal);

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    classAtPresent: "",
    referralCode: "",
    course: "",
    courseExperience: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.course
    ) {
      setMessage("Please fill all required fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://backend.talentsjunction.com/user/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setMessage();
        MySwal.fire({
          title: "Thank You!",
          html: `
          <p>Thank you for your interest. Our team will contact you within 2 business days.</p>
        
          <p>A confirmation email has been sent to ${formData.email}</p>
        `,
          icon: "success",
          showConfirmButton: true,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          classAtPresent: "",
          referralCode: "",
          course: "",
          courseExperience: "",
        });
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "❌ Submission failed. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FormContainer>
        <Title>Course Enrollment Form</Title>
        <FormInnerContainer>
          <FormImage src="./profile-data-animate.svg" alt="Profile" />
          <FormCard onSubmit={handleSubmit}>
            {message && (
              <p
                style={{
                  marginTop: "15px",
                  textAlign: "center",
                  color: message.includes("🎉") ? "green" : "red",
                }}
              >
                {message}
              </p>
            )}
            <FromInputWrapper>
              <FormInputContainer1>
                {" "}
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </FormInputContainer1>
              <FormInputContainer2>
                {" "}
                <Input
                  type="text"
                  name="classAtPresent"
                  placeholder="Class at Present (e.g., 10th, 12th, B.Tech)"
                  value={formData.classAtPresent}
                  onChange={handleChange}
                />
                <Select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  defaultValue=""
                  required
                >
                  <option value="" disabled hidden>
                    Select Course
                  </option>
                  <option value="Robotics">Robotics</option>
                  <option value="Internet of Things (IoT)">
                    Internet of Things (IoT)
                  </option>
                </Select>
                <Select
                  name="courseExperience"
                  placeholder="Share your previous experience (if any)"
                  value={formData.courseExperience}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Experience</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </Select>
              </FormInputContainer2>
            </FromInputWrapper>
            <Input
              type="text"
              name="referralCode"
              placeholder="Referral Code (if any)"
              value={formData.referralCode}
              onChange={handleChange}
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </FormCard>
        </FormInnerContainer>
      </FormContainer>
    </>
  );
};

export default Index;
