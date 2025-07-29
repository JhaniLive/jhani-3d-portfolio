import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters")
    .required("Message is required"),
});

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await emailjs.send(
        'service_018u8nn',
        'template_tsp19ej',
        {
          from_name: values.name,
          to_name: "Jhani Mohammad",
          from_email: values.email,
          to_email: "jhanilive@gmail.com",
          message: values.message,
        },
        '6x4TJaMH5qYk3lbVT'
      );

      // Success SweetAlert
      Swal.fire({
        title: '🎉 Message Sent Successfully!',
        html: `
          <div style="text-align: center;">
            <p style="font-size: 18px; margin-bottom: 15px;">
              <strong>Awesome! 🚀</strong>
            </p>
            <p style="color: #666; line-height: 1.6;">
              Thank you for reaching out! Your message has been delivered successfully. 
              I'll get back to you within 24 hours with exciting opportunities to discuss!
            </p>
            <p style="margin-top: 15px; color: #915eff; font-weight: bold;">
              ✨ Let's build something amazing together! ✨
            </p>
          </div>
        `,
        icon: 'success',
        confirmButtonText: 'Perfect! 👍',
        confirmButtonColor: '#915eff',
        background: '#1a1a2e',
        color: '#ffffff',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });

      resetForm();
    } catch (error) {
      console.error(error);
      
      // Error SweetAlert
      Swal.fire({
        title: '😔 Oops! Something went wrong',
        html: `
          <p style="color: #666; line-height: 1.6;">
            Don't worry! This happens sometimes. Please try again or reach out directly at 
            <strong style="color: #915eff;">jhanilive@gmail.com</strong>
          </p>
        `,
        icon: 'error',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#ff6b6b',
        background: '#1a1a2e',
        color: '#ffffff'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form ref={formRef} className='mt-12 flex flex-col gap-8'>
              <div className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <Field
                  type='text'
                  name='name'
                  placeholder="What's your good name?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
                <ErrorMessage 
                  name='name' 
                  component='p' 
                  className='text-red-500 text-sm mt-2 ml-2' 
                />
              </div>

              <div className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Email</span>
                <Field
                  type='email'
                  name='email'
                  placeholder="What's your web address?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
                <ErrorMessage 
                  name='email' 
                  component='p' 
                  className='text-red-500 text-sm mt-2 ml-2' 
                />
              </div>

              <div className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Message</span>
                <Field
                  as='textarea'
                  rows={7}
                  name='message'
                  placeholder='What you want to say?'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none'
                />
                <ErrorMessage 
                  name='message' 
                  component='p' 
                  className='text-red-500 text-sm mt-2 ml-2' 
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
