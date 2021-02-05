import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const LogoutButton = () => {

    const { logout } = useContext(AuthContext);

    return (
        <button onClick={logout}>Logout</button>
    )
}

export default LogoutButton;