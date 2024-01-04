import React from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

import { useRef, useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { GoMail } from "react-icons/go";
function Contact() {
  const toast = useRef(null);

  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setLoading(true);
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
          subject: subject,
          message: message,
        }),
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        setLoading(false);
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      // setShowSuccessMessage(true);
      toast.current.show({
        severity: "success",
        summary: "تــم",
        detail: "شكراً لتواصلك ,تم ارسال الرسالة ",

        life: 3000,
      });
      setShowFailureMessage(false);
      setLoading(false);
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(name, email, subject, message);
  };
  return (
    <section className="container bg-white dark:bg-gray-900">
      <Toast position="top-center" ref={toast} />
      <div className="w-full px-6 py-12 mx-auto">
        <div>
          <h1 className="mt-2 text-2xl font-[Mada] font-semibold text-gray-800 md:text-3xl dark:text-white">
            تواصل معي Contact us
          </h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-12 mt-10 lg:grid-cols-2 ">
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="-mx-2 md:items-center md:flex ">
                <div className="flex-1 px-2">
                  <label
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200 font-[Cairo]"
                    htmlFor="name"
                  >
                    الاســم
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    name="name"
                    placeholder="اسمك الكريم"
                    className="block w-full px-5 py-2.5 mt-2 font-[Cairo] text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors?.name && (
                    <p className="text-sm text-red-500">الاسم مطلوب</p>
                  )}
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-0 ">
                  <label
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200 font-[Cairo]"
                    htmlFor="email"
                  >
                    البريد الالكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Email address"
                    className="block font-[Cairo] w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      البريد الالكتروني مطلوب
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200 font-[Cairo]"
                  htmlFor="subject"
                >
                  الموضوع
                </label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  placeholder="الموضوع"
                  className="block font-[Cairo] w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors?.subject && (
                  <p className="text-sm text-red-500">موضوع الرسالة مطلوب</p>
                )}
              </div>
              <div className="w-full mt-4">
                <label
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200 font-[Cairo]"
                  htmlFor="message"
                >
                  الرسالة
                </label>
                <textarea
                  name="message"
                  className="block font-[Cairo] w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                {errors?.message && (
                  <p className="text-sm text-red-500">محتوى الرسالة مطلوب</p>
                )}
              </div>
              <div className="mt-4">
                <Button
                  type="submit"
                  loading={loading}
                  className="w-full font-[Cairo]   text-sm font-medium text-center text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  إرســال
                </Button>
              </div>
              <div className="text-left">
                {showSuccessMessage && (
                  <p className="my-2 text-sm font-semibold text-green-500">
                    شكراً لتواصلك ,تم ارسال الرسالة
                  </p>
                )}
                {showFailureMessage && (
                  <p className="text-red-500">عفواً هناك خطأ</p>
                )}
              </div>
            </form>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <GoMail></GoMail>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Email
              </h2>

              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                alhuwaimel.m@gmail.com
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <AiFillPhone></AiFillPhone>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Phone
              </h2>

              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                +966 505436532
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
