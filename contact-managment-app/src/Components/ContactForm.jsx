// // Importing dependencies
// // This jsx is used to create Contact form using tailwindCss,Redux for storage.
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addContact } from "../Redux/action";
// import React from "react";
// function ContactForm() {
//   const dispatch = useDispatch();

//   const [form, setForm] = useState({
//     first_name: "",
//     last_name: "",
//     mob: "",
//     status: "active",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };
//   function handleSave() {
//     dispatch(addContact(form));
//   }

//   return (
//     <div className="w-1/2 mx-auto my-4 pt-16">
//       <h2 className="text-2xl text-white font-bold mb-4">
//         <button className="rounded-full shadow shadow-slate-700 font-bold bg-slate-700 p-3 text-2xl">
//           Create Contact
//         </button>
//       </h2>
//       <div className="mb-4">
//         <label className="block font-bold mb-2" htmlFor="first-name">
//           First Name
//         </label>
//         <input
//           className="w-full border  border-slate-800 p-2"
//           id="first-name"
//           type="text"
//           name="first_name"
//           value={form.first_name}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block font-bold mb-2" htmlFor="last-name">
//           Last Name
//         </label>
//         <input
//           className="w-full border  border-slate-800 p-2"
//           id="last-name"
//           type="text"
//           name="last_name"
//           value={form.last_name}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block font-bold mb-2" htmlFor="last-name">
//           Mobile Number
//         </label>
//         <input
//           className="w-full border  border-slate-800 p-2"
//           id="last-name"
//           type="number"
//           name="mob"
//           min="10"
//           max="10"
//           value={form.mob}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block font-bold mb-2" htmlFor="status">
//           Status
//         </label>
//         <select
//           className="w-full border  text-bold border-slate-800 p-2"
//           id="status"
//           name="status"
//           value={form.status}
//           onChange={handleChange}
//         >
//           <option value={"active"}>
//             <strong>Active</strong>
//           </option>
//           <option value={"inactive"}>
//             <strong>Inactive</strong>
//           </option>
//         </select>
//       </div>
//       <button
//         className="bg-slate-700 border-slate-900 shadow-md text-white font-bold py-2 px-4 rounded"
//         onClick={handleSave}
//       >
//         Save Contact
//       </button>
//     </div>
//   );
// }

// export default ContactForm;


import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../Redux/action";
import React from "react";

function ContactForm() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    mob: "",
    status: "active",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    const { first_name, last_name, mob, status } = form;

    // Check if all fields are filled
    if (!first_name || !last_name || !mob || !status) {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(addContact(form));
    alert("contact has been added");
    return;
  }

  return (
    <div className="w-1/2 mx-auto my-4 pt-16">
      <h2 className="text-2xl text-white font-bold mb-4">
        <button className=" shadow shadow-slate-700 font-bold bg-slate-700 p-3 text-2xl">
          Create Contact
        </button>
      </h2>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="first-name">
          First Name
        </label>
        <input
          className="w-full border border-slate-800 p-2"
          id="first-name"
          type="text"
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="last-name">
          Last Name
        </label>
        <input
          className="w-full border border-slate-800 p-2"
          id="last-name"
          type="text"
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="mob">
          Mobile Number
        </label>
        <input
          className="w-full border border-slate-800 p-2"
          id="mob"
          type="number"
          name="mob"
          min="1000000000"
          max="9999999999"
          value={form.mob}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="status">
          Status
        </label>
        <select
          className="w-full border text-bold border-slate-800 p-2"
          id="status"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="active">
            <strong>Active</strong>
          </option>
          <option value="inactive">
            <strong>Inactive</strong>
          </option>
        </select>
      </div>
      <button
        className="bg-slate-700 border-slate-900 shadow-md text-white font-bold py-2 px-4 rounded"
        onClick={handleSave}
      >
        Save Contact
      </button>
    </div>
  );
}

export default ContactForm;
