import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const Datalist = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://geeta-backend.vercel.app/')
            .then(response => response.json())
            .then(data => {
                console.log(data);

                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);
    const formatDateTime = (isoString) => {
        const date = new Date(isoString);
        
        // Format date as dd/mm/yy
        const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getFullYear()).slice(-2)}`;
        
        // Format time in HH:MM:SS AM/PM
        const formattedTime = date.toLocaleTimeString();
    
        return { formattedDate, formattedTime };
    };
  
    const handleDownload = () => {
        if (data.length === 0) return;

        const formattedData = data.map(({ _id, name, email, phnumber, area, pass, updatedAt }, index) => {
            const { formattedDate, formattedTime } = formatDateTime(updatedAt);
            return {
                No: index + 1,
                ID: _id,
                Name: name,
                Email: email,
                "Phone No.": phnumber,
                Area: area,
                "No. of Pass": pass,
                Date: formattedDate,
                Time: formattedTime,
            };
        });

        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Pass Data");

        XLSX.writeFile(workbook, "Registered_Pass_Data.xlsx");
    };

    if (loading) {
        return (
            <div className="text-center mt-4 d-flex justify-content-center align-items-center vh-100">
                <img src="https://cdn.dribbble.com/userupload/22076800/file/original-8e7ce77dec0edaf0105e8287038f6e60.gif" alt="Loading..." className='img-fluid object-fit-contain ' />
            </div>
        );
    }

    if (error) {
        return <div className="text-center text-danger mt-4">Error: {error.message}</div>;
    }

    const totalPasses = data.reduce((total, item) => total + (item.pass || 0), 0);

    return (
        <>
            <div className='orangecolor text-center p-3 display-6 fw-bold'>REGISTERED PASS DATA</div>
            <div className="container">
                <div className="d-flex justify-content-center justify-content-lg-end mb-3">
                    <button className="btn btn-success" onClick={handleDownload}>
                        Download Excel
                    </button>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead className="table-dark text-center">
                            <tr>
                                <th>No.</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                                <th>Area</th>
                                <th>Pass</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((item, index) => {
                                    const { formattedDate, formattedTime } = formatDateTime(item.updatedAt);
                                    return (
                                        <tr key={item._id} className='text-center'>
                                            <td>{index + 1}</td>
                                            <td>{item._id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phnumber}</td>
                                            <td>{item.area}</td>
                                            <td>{item.pass}</td>
                                            <td>{formattedDate}</td>
                                            <td>{formattedTime}</td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center">No data available</td>
                                </tr>
                            )}
                        </tbody>
                        <tfoot>
                            <tr className="table-warning text-end">
                                <td colSpan="8" className="fw-bold">Total Entry Passes</td>
                                <td className="fw-bold">{totalPasses}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Datalist;
