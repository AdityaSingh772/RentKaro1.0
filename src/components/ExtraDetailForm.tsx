"use client";

import { useState } from "react";
import axios from "axios";

const Form: React.FC = () => {
    const [formData, setFormData] = useState({
        college:"",
        hall:"",
        room: "",
        phone: "", 
        link: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:5000/submit", formData);
        if (response.status === 201) {
            alert("The form is submitted.");
            setTimeout(() => {
                window.location.href = '/mhome'
            }, 2000);
        } else {
            alert("There was an error while submitting the form.");
        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition duration-500">
            <div className="max-w-4xl mx-auto p-5">
                <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-lg hover:shadow-2xl">
                    <div>
                        <label htmlFor="college" className='block text-sm font-medium text-[#A962FF]'>
                            Select College:
                        </label>
                        <select
                            id="college"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                            required
                            className="w-full border border-[#A962FF] p-2 mb-4 rounded-lg bg-[#333] bg-opacity-5 text-[#DDE6ED]"
                        >
                            <option value="" className="bg-[#27374D]">--Select--</option>
                            <option value="nitr" className="bg-[#27374D]">NIT Rourkela</option>
                            <option value="mit" className="bg-[#27374D]">MIT</option>
                        </select>

                        <label htmlFor="hall" className='block text-sm font-medium text-[#A962FF]'>
                            Select Hall:
                        </label>
                        <select
                            id="hall"
                            name="hall"
                            value={formData.hall}
                            onChange={handleChange}
                            required
                            className="w-full border border-[#A962FF] p-2 mb-4 rounded-lg bg-[#333]  bg-opacity-5 text-[#DDE6ED]"
                        >
                            <option value="" className="bg-[#27374D] " >--Select--</option>
                            <option value="cvr" className="bg-[#27374D] ">CVR</option>
                            <option value="kms" className="bg-[#27374D] ">KMS</option>
                            <option value="gdb" className="bg-[#27374D] ">GDB</option>
                            <option value="vs" className="bg-[#27374D] ">VS</option>
                            <option value="dba" className="bg-[#27374D] ">DBA</option>
                            <option value="hb" className="bg-[#27374D] ">HB</option>
                            <option value="sd" className="bg-[#27374D] ">SD</option>
                            <option value="mv" className="bg-[#27374D] ">MV</option>
                        </select>
                        
                        <label htmlFor="room" className="block text-sm font-medium text-[#A962FF]">
                            Room No.:
                        </label>
                        <input 
                            type="text"
                            id="room"
                            name="room"
                            value={formData.room}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-[#A962FF] rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-transparent text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#A962FF]">
                            Phone No.:
                        </label>
                        <input 
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-[#A962FF] rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-transparent text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="link" className="block text-sm font-medium text-[#A962FF]">
                            Id card link:
                        </label>
                        <input 
                            type="text"
                            id="link"
                            name="link"
                            value={formData.link}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-[#A962FF] rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm bg-transparent text-white"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button type="submit" className="w-32 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
