import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editContact } from "../Redux/action";

function EditContact() {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  const AllContact = useSelector((store) => store.contacts);

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    dispatch(editContact({ id, ...form }));
  }

  useEffect(() => {
    AllContact.filter((el) => el.id === id && setForm(el));
  }, []);

  return (
    <div className="w-1/2 mx-auto my-4 pt-16">
      <h2 className="text-2xl text-white font-bold mb-4">
        <button className=" shadow shadow-slate-700 bg-slate-700 p-3 text-2xl">
          Edit Contact
        </button>
      </h2>

      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="first-name">
          First Name
        </label>
        <input
          className="w-full border text-center border-slate-400 p-2"
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
          className="w-full border text-center border-slate-400 p-2"
          id="last-name"
          type="text"
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="last-name">
          Mobile Number
        </label>
        <input
          className="w-full border text-center border-slate-400 p-2"
          id="last-name"
          type="number"
          name="mob"
          value={form.mob}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="status">
          Status
        </label>
        <select
          className="w-full border text-center border-slate-400 p-2"
          id="status"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value={"active"}>Active</option>
          <option value={"inactive"}>Inactive</option>
        </select>
      </div>
      <button
        className="bg-slate-700 hover:bg-salte-600 shadow-md text-white font-bold py-2 px-4 "
        onClick={handleSave}
      >
        Save Contact
      </button>
    </div>
  );
}

export default EditContact;
