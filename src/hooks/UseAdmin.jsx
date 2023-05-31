import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxios from "./UseAxios";

const useAdmin = () => {
    const {user} = UseAuth();
    const [axiosSecure] = UseAxios();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;