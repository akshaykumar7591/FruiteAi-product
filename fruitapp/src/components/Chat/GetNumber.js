import React from "react";
function GetNumber() {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [isValid, setIsValid] = React.useState(false);
    const [isInvalid, setIsInvalid] = React.useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        const isValidNumber = /^\d{10}$/.test(value);
        const isInvalidNumber = /\D/.test(value);
        setPhoneNumber(value);
        setIsValid(isValidNumber);
        setIsInvalid(isInvalidNumber);
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="mb-8">
                <i className="fas fa-comment-alt text-purple-500 text-3xl"></i>
            </div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-8">Get started.</h1>
            <div className="w-full px-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-purple-500">PHONE NUMBER</span>
                    <span className="text-xs text-gray-500">Country set to India. <a href="#" className="text-purple-500">Change</a></span>
                </div>
                <input 
                    type="text" 
                    className={`w-full p-3 rounded-lg bg-gray-100 text-gray-800 mb-4 ${isInvalid ? 'border border-red-500' : ''}`} 
                    placeholder="+91 XXXXX XXXXX" 
                    value={phoneNumber} 
                    onChange={handleChange} 
                />
                <button 
                    className={`w-full p-3 rounded-lg ${isValid ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'}`} 
                    disabled={!isValid}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}
export default GetNumber;