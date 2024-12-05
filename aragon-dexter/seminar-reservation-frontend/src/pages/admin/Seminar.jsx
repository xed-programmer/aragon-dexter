import React, { useState, useEffect } from 'react';
import axiosService from '../../services/seminarReservationService';

const Seminar = () => {
    const [seminars, setSeminars] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchSeminars = async () => {
            try {
                const response = await axiosService.get('/api/seminars');
                setSeminars(response.message);
            } catch (err) {
                setError('Access denied');
            }
        };

        fetchSeminars();
    }, []);
    console.log(seminars);
    
  return (
    <>
    <div className="overflow-x-auto p-4 m-4">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {seminars && seminars.map((s,i) => {
                return `
                <tr>
                    <th>${i+1}</th>
                    <td>${s.title}</td>
                    <td>${s.description}</td>
                    <td>${s.date}</td>
                </tr>
                `
            })}            
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Seminar;