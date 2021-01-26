import React,{ useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true);
    const [random, setRandom] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setUsers(true)
                setLoading(null)
                setRandom(true)
            const response = await axios.get(
                'https://www.youtube.com/watch?v=euGHcnyUo84&list=PLh2QSchbA3pk93__efVKdsnx-eugCwT3_'
            );
            setUsers(response.data);
          } catch(e) {
              setRandom(e);
          }
             setLoading(false);
        };
        
        fetchUsers();
    }, [setLoading]);

    if (random) return null;
    if (loading) return null;
    if (!users) return null;
    return (
        <div>
            랜덤
        </div>
    )
}

export default Users;