
import {Route,Routes} from "react-router-dom"
import Contacts from "./Contact"
import Dashboard from "./Chars_and_Maps"
import EditContact from "../Components/Edit_Contact"
import ContactForm from "../Components/ContactForm"
import React from "react";
const AllRoutes=()=>{


    return(
        <Routes >
            <Route path="/" element={<Contacts/>}/>
            <Route path="/contact_form" element={<ContactForm/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/edit/:id" element={<EditContact/>}/>
        </Routes>
    )
}

export default AllRoutes