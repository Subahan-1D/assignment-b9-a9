import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const PrivateRoute = ({}) => {
    const {user} = useContext(AuthContext)
    if(user) {
        return chi
    }
};

export default PrivateRoute;