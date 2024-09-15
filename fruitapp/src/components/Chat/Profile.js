import React from "react";
function Profile() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    const handleFirstNameChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z]*$/.test(value)) {
            setFirstName(value);
        }
    };

    const handleLastNameChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z]*$/.test(value)) {
            setLastName(value);
        }
    };

    const isFormValid = firstName.trim() !== '';

    return (
        <div className="text-center p-6">
            <div className="text-purple-500 text-3xl mb-4">
                <i className="fas fa-comment-alt"></i>
            </div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-8">Let's get you setup.</h1>
            <div className="mb-8">
                <h2 className="text-sm font-semibold text-purple-500 mb-2">PROFILE IMAGE</h2>
                <div className="relative bg-gray-100 border border-gray-300 rounded-lg p-6 w-64 mx-auto">
                    <div className="text-gray-400">
                        <i className="fas fa-upload text-2xl mb-2"></i>
                        <p>Upload a profile image</p>
                    </div>
                    <a href="#" className="absolute bottom-2 right-2 text-purple-500 text-sm">Browse</a>
                </div>
            </div>
            <div className="flex justify-center space-x-4 mb-8">
                <div className="w-40">
                    <label className="block text-sm font-semibold text-gray-500 mb-2">FIRST NAME</label>
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        value={firstName}
                        onChange={handleFirstNameChange}
                        className={`w-full p-2 border ${firstName.trim() === '' ? 'border-red-500' : 'border-gray-300'} rounded-lg text-center text-gray-500 bg-gray-100`} 
                    />
                </div>
                <div className="w-40">
                    <label className="block text-sm font-semibold text-gray-500 mb-2">LAST NAME</label>
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        value={lastName}
                        onChange={handleLastNameChange}
                        className="w-full p-2 border border-gray-300 rounded-lg text-center text-gray-500 bg-gray-100" 
                    />
                </div>
            </div>
            <button 
                className={`w-full max-w-xs mx-auto p-3 rounded-lg ${isFormValid ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-500'}`}
                disabled={!isFormValid}
            >
                Complete Setup
            </button>
        </div>
    );
}
export default Profile;