import { useQuery } from '@tanstack/react-query'
import UseAxios from './UseAxios';
import UseAuth from './UseAuth';

const useCart = () => {
    const { user, loading } = UseAuth();

    const [axiosSecure] = UseAxios();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        },
    })

    return [cart, refetch]

}
export default useCart;