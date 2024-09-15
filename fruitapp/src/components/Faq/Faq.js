import React from "react";
import axios from 'axios';
import "./Faq.css";

function FAQSection() {
    const [faqs, setFaqs] = React.useState([]);
    const [showForm, setShowForm] = React.useState(false);
    const [newFaq, setNewFaq] = React.useState({
        title: "",
        description: "",
        label: ""
    });
    const [editIndex, setEditIndex] = React.useState(null);
    const [errors, setErrors] = React.useState({});

    // Fetch FAQs from API when the component mounts
    React.useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/faq/');
                setFaqs(response.data);
            } catch (error) {
                console.error("Error fetching FAQs:", error);
            }
        };
        fetchFaqs();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewFaq({ ...newFaq, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        // if (!newFaq.image) newErrors.image = "Image URL is required";
        if (!newFaq.title) newErrors.title = "Title is required";
        if (!newFaq.description) newErrors.description = "Description is required";
        if (!newFaq.label) newErrors.label = "Label is required";
        return newErrors;
    };

    const handleAddFaq = async () => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            if (editIndex !== null) {
                // Update FAQ
                const updatedFaqs = faqs.map((faq, index) => 
                    index === editIndex ? newFaq : faq
                );
                await axios.put(`http://localhost:8000/api/faq/${faqs[editIndex].id}/`, newFaq);
                setFaqs(updatedFaqs);
                setEditIndex(null);
            } else {
                // Add new FAQ
                const response = await axios.post('http://localhost:8000/api/faq/', newFaq);
                setFaqs([...faqs, response.data]);
            }
            setNewFaq({  title: "", description: "", label: "" });
            setShowForm(false);
            setErrors({});
        } catch (error) {
            console.error("Error adding/updating FAQ:", error);
        }
    };

    const handleEditFaq = (index) => {
        setNewFaq(faqs[index]);
        setEditIndex(index);
        setShowForm(true);
    };

    const handleDeleteFaq = async (index) => {
        try {
            await axios.delete(`http://localhost:8000/api/faq/${faqs[index].id}/`);
            const updatedFaqs = faqs.filter((_, i) => i !== index);
            setFaqs(updatedFaqs);
        } catch (error) {
            console.error("Error deleting FAQ:", error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto my-auto main">
            <div className="flex justify-between items-center mb-6 head">
                <h1 className="text-2xl font-bold text-center w-full">FAQ Section</h1>
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded" 
                    onClick={() => setShowForm(!showForm)}
                >
                    <i className="fas fa-plus"> </i> 
                </button>
            </div>
            {showForm && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="mb-4">
                            <label className="block text-gray-700">Image URL</label>
                            <input 
                                type="text" 
                                name="image" 
                                // value={newFaq.image} 
                                onChange={handleInputChange} 
                                className="w-full p-2 border rounded"
                            />
                            {/* {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>} */}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Title</label>
                            <input 
                                type="text" 
                                name="title" 
                                value={newFaq.title} 
                                onChange={handleInputChange} 
                                className="w-full p-2 border rounded"
                            />
                            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Description</label>
                            <textarea 
                                name="description" 
                                value={newFaq.description} 
                                onChange={handleInputChange} 
                                className="w-full p-2 border rounded"
                            ></textarea>
                            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Label</label>
                            <input 
                                type="text" 
                                name="label" 
                                value={newFaq.label} 
                                onChange={handleInputChange} 
                                className="w-full p-2 border rounded"
                            />
                            {errors.label && <p className="text-red-500 text-sm">{errors.label}</p>}
                        </div>
                        <button 
                            className="bg-green-500 text-white px-4 py-2 rounded" 
                            onClick={handleAddFaq}
                        >
                            {editIndex !== null ? "Update" : "Add"}
                        </button>
                        <button 
                            className="bg-red-500 text-white px-4 py-2 rounded ml-2" 
                            onClick={() => setShowForm(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
            <div className="space-y-4 cart">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-md flex flex-col md:flex-row items-center">
                        <img src={faq.image} alt="FAQ image" className="w-16 h-16 rounded-full mr-4"/>
                        <div className="flex-1">
                            <h2 className="text-red-500 font-bold">{faq.title}</h2>
                            <p className="text-gray-700">{faq.description}</p>
                            <p className="text-red-500 font-bold">{faq.label}</p>
                        </div>
                        <div className="flex space-x-2 mt-4 md:mt-0">
                            <div className="tooltip">
                                <button 
                                    className="bg-yellow-500 text-white px-2 py-1 rounded" 
                                    onClick={() => handleEditFaq(index)}
                                >
                                    <i className="fas fa-edit"></i>
                                </button>
                                <span className="tooltiptext">Edit</span>
                            </div>
                            <div className="tooltip">
                                <button 
                                    className="bg-red-500 text-white px-2 py-1 rounded" 
                                    onClick={() => handleDeleteFaq(index)}
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                                <span className="tooltiptext">Delete</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQSection;
