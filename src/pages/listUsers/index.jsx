import { useEffect, useState } from "react";
import api from "../../services/api";
import TopBackground from "../../components/TopBackground";
import Button from "../../components/Button";

function ListUsers() {
    const [users, setUsers] = useState([]);
        
    

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get("/usuarios");
            setUsers(data);
            console.log(data);
        }

        getUsers();
    }, []);

    return (
        <div>
            <TopBackground />
            <h1>Listagem de Usuários</h1>
            
            {users.map((user) => (
                <div key={user.id}>{user.name} <br /> {user.email} <br /> {user.age}</div>
            ))}
            <Button>ok ok</Button>
        </div>
    );
}

export default ListUsers;
