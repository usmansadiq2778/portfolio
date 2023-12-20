/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
//////////////// tamplate Emai id (template_1ibn85o)
///////service id Gmail(service_25otdik)
//// Name -> Api key (Stq6SOUKeGhRpwrgB)
const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loding, setloding] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setloding(true);
    emailjs
      .send(
        "service_25otdik",
        "template_1ibn85o",
        {
          from_name: form.name,
          to_name: "Muhammad usman sadiq",
          from_email: form.email,
          to_email: "mianusman2488@gmail.com",
          message: form.message,
        },
        "Stq6SOUKeGhRpwrgB"
      )
      .then(
        (response) => {
          setloding(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setform({
            name: "",
            email: "",
            message: "",
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          setloding(false);
          console.log("FAILED...", err);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12  xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            id=""
            value={form.name}
            onChange={handleChange}
            placeholder="What's your good name?"
            className="bg-tertiary py-4  px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium  "
          />
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            id=""
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="bg-tertiary py-4  px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium  "
          />
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
          </label>
          <textarea
            rows="7"
            name="message"
            id=""
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className="bg-tertiary py-4  px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium  "
          />
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none  w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loding ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-[700px] md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
