"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Preloader from '@/components/PreLoader';
import { constrainedMemory } from 'process';

interface FormState {
  type: string;
  brand: string;
  title: string;
  description: string;
  price: number;
  photos: string[];
  college: string;
  phone: string;
  email: string;
}

const PostAdForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    type: '',
    brand: '',
    title: '',
    description: '',
    price: 0,
    photos: [],
    college: '',
    phone: '',
    email: '',
  });
  const [previewPhotos, setPreviewPhotos] = useState<string[]>([]);
  const { isLoading, user, error } = useUser();
  const router = useRouter();
  const email = user ? user.email || '' : '';

  useEffect(() => {
    if (!user && !isLoading) {
      router.push("/defaultPage");
    }
  }, [user, isLoading, router]);

  if (isLoading) return <div><Preloader /></div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const previewArray: string[] = fileArray.map(file => URL.createObjectURL(file));
      setPreviewPhotos(previewArray);

      const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/auto/upload`;
      const uploadedPhotos = await Promise.all(
        fileArray.map(async (file) => {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('cloud_name', 'dzk2mzkb0');
          formData.append('upload_preset', 'a3vjuibq'); 
          const response = await axios.post(cloudinaryUploadUrl, formData);
          console.log(response.data);
          return response.data.secure_url;
        })
      );

      setFormState({
        ...formState,
        photos: uploadedPhotos
      });
      console.log(uploadedPhotos);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { type, brand, title, description, price, photos, college, phone } = formState;

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_API}/api/productadmin`, {
        type,
        brand,
        title,
        description,
        price,
        photos,
        college,
        email,
        phone,
      });
      console.log('Response:', response.data);
      alert("The ad is sent for review from the admin");
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (error) {
      console.error('Error uploading form:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (user ? (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-black border-2 py-[1.5rem] mt-[7rem] mb-[3rem] border-blue-500 p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2">What type of advertisement do you want ?*</label>
          <select
            name="type"
            value={formState.type}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">--Select--</option>
            <option value="rent">Rent</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2">Brand*</label>
          <input
            type="text"
            name="brand"
            value={formState.brand}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2">Ad Title*</label>
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2">Description*</label>
          <textarea
            name="description"
            value={formState.description}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2">Price*</label>
          <input
            type="number"
            name="price"
            value={formState.price}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2">Upload Photos (up to 5)*</label>
          <input
            type="file"
            name="photos"
            accept="image/*"
            multiple
            onChange={handlePhotoChange}
            required
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mt-2 flex flex-wrap">
            {previewPhotos.map((photo, index) => (
              <img key={index} src={photo} alt={`Preview ${index}`} className="w-24 h-24 object-cover m-1 border rounded" />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2">Select the college you want your ad to display*</label>
          <select
            name="college"
            value={formState.college}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">--Select--</option>
            <option value="nitr">NIT Rourkela</option>
            <option value="mit">MIT</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2">Phone no.*</label>
          <input
            type="text"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <button type="submit" className=" block w-full px-4 py-2 hover:bg-white border-2 border-blue-500 hover:border-white bg-black text-white hover:text-black rounded-full  shadow-md hover:shadow-lg">
            Post Now
          </button>
        </div>
      </form>
    </div>
  ) : null);
};

export default PostAdForm;
