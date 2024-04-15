import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/v1/dashboard");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-4">Dashboard</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="border px-4 py-2 text-center">{item.name}</td>
                                <td className="border px-4 py-2 text-center">{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;
