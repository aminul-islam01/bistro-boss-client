import { useForm } from 'react-hook-form';
import SectionTitle from '../../../Components/SectionTitle';
import UseAxios from '../../../hooks/UseAxios';
import Swal from 'sweetalert2';
import { FaUtensils } from 'react-icons/fa';

const AddItem = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [axiosSecure] = UseAxios();

    const image_hosting_api_key = import.meta.env.VITE_image_hosting_api_key;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_api_key}`

    const onsubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imageURL = imageResponse.data.display_url;
                    const { name, recipe, category, price } = data;
                    const newItem = { name, recipe, category, image: imageURL, price: parseFloat(price) }
                    console.log(newItem)
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Added an item successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }

    return (
        <div className='bg-white py-10'>
            <SectionTitle subHeading="What's new?" heading="Add An Item">
            </SectionTitle>
            <form onSubmit={handleSubmit(onsubmit)} className='md:mx-20 p-10 bg-gray-100'>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-bold">Recipe name*</span>
                    </label>
                    <input type="text" {...register('name', { required: true })} placeholder="Recipe name" className="input input-bordered w-full" />
                    {errors.name && <p>Recipe name is required.</p>}
                </div>
                <div className='flex gap-8 mb-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Category*</span>
                        </label>
                        <select {...register("category", { required: true })}
                            className="input input-bordered w-full">
                            <option value="">Category</option>
                            <option value="salad">salad</option>
                            <option value="pizza">pizza</option>
                            <option value="dessert">dessert</option>
                            <option value="drinks">drinks</option>
                            <option value="popular">popular</option>
                        </select>
                        {errors.category && <p>Category is required.</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Price*</span>
                        </label>
                        <input type="number" {...register('price', { required: true })} placeholder="price" className="input input-bordered w-full" />
                        {errors.price && <p>price is required.</p>}
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">Recipe Details*</span>
                    </label>
                    <textarea {...register('recipe', { required: true })} rows="10"
                        placeholder='Recipe Details' className='resize-none p-5'></textarea>
                    {errors.recipe && <p>Recipe details is required.</p>}
                </div>
                <div className="form-control w-full max-w-xs my-5">
                    <input type="file" {...register('image', { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                    {errors.file && <p>Image is required.</p>}
                </div>
                <button className="btn bg-yellow-700 rounded-none">
                Add Item <FaUtensils className='ms-3'></FaUtensils></button>
            </form>
        </div>
    );
};

export default AddItem;