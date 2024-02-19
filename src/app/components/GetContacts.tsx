import { useState } from "react";
import { MdCancel } from "react-icons/md";
import React from "react";

type Props = {
  setmodal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContactForm = ({ setmodal }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [loading, setloading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    if (!formData.name || !formData.phoneNumber || !formData.email) {
      return alert("Provide all details");
    }
    try {
      setloading(true);
      const respData = await fetch("./api/email", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          number: formData.phoneNumber,
          email: formData.email,
        }),
      });

      const resp = await respData.json();
      setloading(false);
      if (resp.status == 200) {
        alert("Details submitted");
      } else {
        alert("!!Not sent try again");
      }
    } catch (error) {
      setloading(false);
    }
  };

  return (
    <div className=" max-w-xl  w-full md:w-1/2 fixed top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <MdCancel
          className="text-2xl cursor-pointer "
          onClick={() => setmodal(false)}
        />
        <p>Provide the requested information and we will get back to you</p>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          {loading ? (
            <p>Loading..... Please wait</p>
          ) : (
            <button
              className="bg-green-400 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
