import useAdmin from "../hooks/UseAdmin";
import UseAuth from "../hooks/UseAuth";


const AdminRoute = () => {
    const {user} = UseAuth();
    const [isAdmin] = useAdmin();
    return (
        <div>
            
        </div>
    );
};

export default AdminRoute;