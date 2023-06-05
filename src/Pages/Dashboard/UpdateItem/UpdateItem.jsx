import { useForm } from 'react-hook-form';
import SectionTitle from '../../../Components/SectionTitle';
import UseAxios from '../../../hooks/UseAxios';
import Swal from 'sweetalert2';
import { useLoaderData, useParams } from 'react-router-dom';

const UpdateItem = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [axiosSecure] = UseAxios();
    const {id} = useParams();
    const menuItem = useLoaderData()
    
    const onsubmit = data => {
        data.price = parseFloat(data.price);

        axiosSecure.put(`/menu/${id}`, data)
        .then(res => {
            if(res.status === 200) {
                reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Update successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <div className='bg-white py-10'>
            <SectionTitle subHeading="What's new?" heading="Update Item">
            </SectionTitle>
            <form onSubmit={handleSubmit(onsubmit)} className='md:mx-20 p-10 bg-gray-100'>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-bold">Recipe name*</span>
                    </label>
                    <input type="text" {...register('name', { required: true })} defaultValue={menuItem.name} placeholder="Recipe name" className="input input-bordered w-full" />
                    {errors.name && <p>Recipe name is required.</p>}
                </div>
                <div className='flex gap-8 mb-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Category*</span>
                        </label>
                        <select {...register("category", { required: true })}
                            className="input input-bordered w-full"
                            defaultValue={menuItem.category}>
                            <option value="">Category</option>
                            <option value="salad">salad</option>
                            <option value="pizza">pizza</option>
                            <option value="dessert">dessert</option>
                            <option value="drinks">drinks</option>
                            <option value="soup">soup</option>
                            <option value="popular">popular</option>
                        </select>
                        {errors.category && <p>Category is required.</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Price*</span>
                        </label>
                        <input type="number" {...register('price', { required: true })} defaultValue={menuItem.price} placeholder="price" className="input input-bordered w-full" />
                        {errors.price && <p>price is required.</p>}
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">Recipe Details*</span>
                    </label>
                    <textarea {...register('recipe', { required: true })} defaultValue={menuItem.recipe} rows="10"
                        placeholder='Recipe Details' className='resize-none p-5'></textarea>
                    {errors.recipe && <p>Recipe details is required.</p>}
                </div>
                <div className='text-center mt-5'>
                <button className="btn bg-yellow-700 rounded-none">
               Update Recipe Details</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateItem;