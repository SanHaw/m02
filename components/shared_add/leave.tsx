'use client'

import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';

const leave = () => {

    const router = useRouter();
    
    const [formData, setFormData] = useState({
        emp_num: "",
        start_leave_date: "",
        end_leave_date: "",
        leave_type: "",
        status: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLSelectElement>) => {
        e.preventDefault();
        try{
            await fetch('/api/leaves', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emp_num: formData.emp_num,
                    start_leave_date: formData.start_leave_date,
                    end_leave_date: formData.end_leave_date,
                    leave_type: formData.leave_type,
                    status: formData.status,
                })
            });
            router.refresh();
        }catch (error) {
            console.log(error);
        }

        setFormData({
            emp_num: "",
            start_leave_date: "",
            end_leave_date: "",
            leave_type: "",
            status: "",
        });
    };

    //fetching for dropdowns
    const [employees, setEmployees] = useState([]);
        const fetchEmployees = async () => {
            const response = await fetch('/api/employees', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            setEmployees(data);
        };
    
    useEffect(() => {
        fetchEmployees().catch(error => console.log(error));
    }, []);

    return (
    <div className= "px-5 pt-5 text-blue-900 justify-center w-screen items-center">
        <div>
            <label className= "px-5 text-2xl font-bold text-blue-900">
            File a Leave Request
            </label>
        </div>
        
        <div>
            <form onSubmit={handleSubmit} className="mt-5 px-5 grid grid-cols-8 gap-2  items-center">
                {/* <Input name="id" type="Int" value={assign_designation.id} /> */}
                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-blue-800 text-right self-center">Employee Number</label>
                </div>
                <div className="col-start-3 col-end-8 border border-blue-300 rounded-md px-4 py-2">
                    {/* <Input name="emp_num" type="Int" placeholder="Employee Number" /> */}
                    <select name="emp_num" value={formData.emp_num} onChange={handleChange}
                        className={`w-full focus:outline-none focus:border-none ${
                            formData.emp_num ? 'text-blue-800' : 'text-gray-400'
                        }`}>
                        <option value="" disabled hidden>Select Employee Number</option>
                        {employees.map((employees: any) => (
                            <option key={employees.emp_num} value={employees.emp_num} className="text-blue-800">
                                {employees.emp_num}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-blue-800 text-right self-center">Start Leave</label>
                </div>
                <div className={`col-start-3 col-end-5s border border-blue-300 rounded-md px-4 py-2 ${
                    formData.start_leave_date ? 'text-blue-800' : 'text-gray-400'}`}>
                    <input name="start_leave_date" type="Date" placeholder="Start Leave" onChange={handleChange} />
                </div>

                <div className="text-right col-start-5 col-end-6">
                    <label className="text-color-blue-800 text-right self-center">End Leave</label>
                </div>

                <div className={`col-start-6 col-end-8 border border-blue-300 rounded-md px-4 py-2 ${
                    formData.end_leave_date ? 'text-blue-800' : 'text-gray-400'}`}>
                    <input name="end_leave_date" type="Date" placeholder="End Leave" onChange={handleChange} />
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-blue-800 text-right self-center">Leave Type</label>
                </div>

                <div className="col-start-3 col-end-5 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                    {/* <Input name="leave_type" type="text" placeholder="Leave Type" /> */}
                    <select name="leave_type" value={formData.leave_type} onChange={handleChange}
                        className={`w-full focus:outline-none focus:border-none ${
                            formData.leave_type ? 'text-blue-800' : 'text-gray-400'
                        }`}>
                        <option value=""          disabled hidden>Select Leave Type</option>
                        <option value="Vacation"  className="text-blue-800">Vacation</option>
                        <option value="Sick"      className="text-blue-800">Sick</option>
                        <option value="Maternity" className="text-blue-800">Maternity</option>
                        <option value="Paternity" className="text-blue-800">Paternity</option>
                    </select>
                </div>

                <div className="text-right col-start-5 col-end-6">
                    <label className="text-color-blue-800 text-right self-center">Status</label>
                </div>
                <div className="col-start-6 col-end-8 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                    {/* <Input name="status" type="text" placeholder="Status" /> */}
                    <select name="status" value={formData.status} onChange={handleChange}
                        className={`w-full focus:outline-none focus:border-none ${
                            formData.status ? 'text-blue-800' : 'text-gray-400'
                        }`}>
                        <option value="" disabled hidden>Status</option>
                        <option value="Pending"  className="text-blue-800">Pending</option>
                        <option value="Approved" className="text-blue-800">Approved</option>
                        <option value="Denied"   className="text-blue-800">Denied</option>
                    </select>
                </div>

            

                
                <div className="col-start-5 col-end-8">
                    <Button type="submit" text="Add"/>
                </div>
            </form>
        </div>
    </div>
      );
}

export default leave