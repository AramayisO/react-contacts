import { useContext, useEffect, useState } from "react"
import AuthContext from "../contexts/AuthContext";

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        login(username, password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <br />
                <input 
                    placeholder="Password"
                    type="text" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;