// All contacts are visible here and edit and delete option is also available
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Popup from "../Components/Popup"
import { removeContact } from "../Redux/action"
import React from "react";
const Contacts = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [singleContact, setSingleContact] = useState({})
    let data = undefined
    const AllContacts = useSelector((store) => store.contacts)
    const dispatch = useDispatch()

    const togglePopup = (contact) => {

        setSingleContact(contact)

        setIsOpen(!isOpen)


    }
    useEffect(() => {

    }, [dispatch, AllContacts.length])
    return (
        <div className="justify-center pt-16 text-white  p-4  w-full ">
            <div className="m-4">
                <button className=" shadow shadow-slate-700 font-bold bg-slate-950 p-3 text-2xl">
                    <Link to="/contact_form">
                        Create Contact
                    </Link>
                </button>

            </div>
            {AllContacts.length === 0 && <div className=" m-auto w-fit p-8  bg-slate-950 justify-center">

                
                <img className="m-auto mb-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchkWiJyls3aN4BfOitrlxxuDMRzMT7uYkhw&s" alt="" />

                <h4 className="text-xl">Your contact list is empty. Add a new contact by clicking the button above</h4>
            </div>}
            <div id="contact_list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {
                    AllContacts.map((el) => {
                        return <div key={el.id} className="bg-slate-700  shadow-xl m-4 p-1 hover:cursor-pointer text-center text-white">
                            <div onClick={() => togglePopup(el)} className="w-3/4 m-auto  ">
                                <div className="p-4">
                                    {isOpen &&
                                        <Popup close={() => togglePopup(data)} el={singleContact} />

                                    }
                                </div>    <div className="text-left text">
                                    <p>First Name : {el.first_name}</p>
                                    <p>Last Name  : {el.last_name}</p>
                                    <p>Mobile   : {el.mob}</p>
                                    <p>Status     : {el.status === "active" ? "Active" : "Inactive"}</p>
                                </div>

                            </div>

                            <div className="flex justify-between my-2">
                                <Link to={`edit/${el.id}`}>
                                    <button className=" p-3 px-6 bg-slate-900 text-white">

                                        Edit
                                    </button>
                                </Link>

                                <button onClick={() => dispatch(removeContact(el.id))} className=" p-2 bg-red-600 text-white">Delete</button>
                            </div>
                        </div>
                    })
                }


            </div>

        </div>
    )
}

export default Contacts