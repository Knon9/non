import React, { useState } from 'react';
import axios from 'axios';
import './../Styles/GetFetchFromBtn.css'; // นำเข้า CSS

const GetFetchFromBtn = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetched, setFetched] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
            setFetched(true);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoading(false);
    };

    const removeData = () => {
        setUsers([]);
        setFetched(false);
    };

    return (
        <div>
            {!fetched && (
                <button onClick={fetchData} disabled={loading}>
                    {loading ? 'Loading...' : 'Fetch Data'}
                </button>
            )}

            {fetched && users.length > 0 && (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.website}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={removeData}>Remove Fetch Data</button>
                </>
            )}
        </div>
    );
};

export default GetFetchFromBtn;