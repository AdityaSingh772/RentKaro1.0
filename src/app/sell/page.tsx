"use client"
import React, { useState } from 'react';
import axios from 'axios';

interface FormState {
  brand: string;
  title: string;
  description: string;
  price: number;
  photos: File[];
  college: string;
  phone:string;
}

const PostAdForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    brand: '',
    title: '',
    description: '',
    price: 0,
    photos: [],
    college: '',
    phone:'',
  });

  const [previewPhotos, setPreviewPhotos] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setFormState({
        ...formState,
        photos: fileArray
      });

      // photo dikhane ke liye
      const previewArray = fileArray.map(file => URL.createObjectURL(file));
      setPreviewPhotos(previewArray);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('brand', formState.brand);
    formData.append('title', formState.title);
    formData.append('description', formState.description);
    formData.append('price', formState.price.toString());
    formData.append('college', formState.college);
    formData.append('phone', formState.phone);
  
    formState.photos.forEach(photo => {
      formData.append('photos', photo);
    });
  
    try {
      const response = await axios.post('http://localhost:5000/api/productadmin', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
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
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Brand*</label>
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
          <label className="block text-gray-700 font-bold mb-2">Ad Title*</label>
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
          <label className="block text-gray-700 font-bold mb-2">Description*</label>
          <textarea
            name="description"
            value={formState.description}
            
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Price*</label>
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
          <label className="block text-gray-700 font-bold mb-2">Upload Photos (up to 5)*</label>
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
          <label className="block text-gray-700 font-bold mb-2">Select the college you want your ad to display*</label>
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
          <label className="block text-gray-700 font-bold mb-2">Phone no.*</label>
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
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            Post Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostAdForm;
