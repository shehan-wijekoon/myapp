import React, { useState } from 'react';

const CreateListingForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        imageUrl: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = {
            title: formData.title,
            description: formData.description,
            price: formData.price,
            imageUrl: formData.imageUrl,
        };


        try {
            const response = await fetch('https://your-api-endpoint.com/submit-listing', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to submit listing');
            }

            const result = await response.json();
            console.log('Form submitted successfully:', result);
            setFormData({
                title: '',
                description: '',
                price: '',
                imageUrl: '',
            });
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <form
            className="w-full max-w-7xl mx-auto p-8 bg-white rounded shadow-xl"
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold mb-4">Create a Listing</h2>

            {/* Title */}
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter a title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                />
            </div>

            {/* Description */}
            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter a description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    required
                ></textarea>
            </div>

            {/* Price */}
            <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium mb-1">
                    Price (Rs)
                </label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter a price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                />
            </div>

            {/* Image URL Upload */}
            <div className="mb-4">
                <label htmlFor="imageUrl" className="block text-sm font-medium mb-1">
                    Image URL
                </label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Paste image URL here"
                    onChange={handleInputChange}
                    required
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Submit Listing
            </button>
        </form>
    );
};

export default CreateListingForm;
