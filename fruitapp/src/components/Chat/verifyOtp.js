import React from "react";
function VerifyOTP() {
    const [otp, setOtp] = React.useState('');
    const [isValid, setIsValid] = React.useState(true);

    const handleVerify = () => {
        if (otp === '1234') {
            alert('OTP Verified');
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setOtp(value);
        if (value.length === 4) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col items-center mb-8">
                <i className="fas fa-comment-alt text-purple-500 text-4xl mb-4"></i>
                <h1 className="text-2xl font-semibold text-gray-800">Verify Number</h1>
            </div>
            <div className="w-full px-8">
                <div className="flex justify-between items-center mb-2">
                    <label className="text-purple-500 text-sm font-semibold">OTP</label>
                    <a href="#" className="text-gray-400 text-sm">Didn't receive a code yet? <span className="text-purple-500">Resend</span></a>
                </div>
                <input 
                    type="text" 
                    placeholder="Enter OTP" 
                    className={`w-full p-3 mb-4 border ${isValid ? 'border-gray-300' : 'border-red-500'} rounded-lg focus:outline-none focus:ring-2 ${isValid ? 'focus:ring-purple-500' : 'focus:ring-red-500'}`}
                    value={otp}
                    onChange={handleChange}
                />
                <button 
                    className={`w-full p-3 ${otp.length === 4 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'} rounded-lg`} 
                    onClick={handleVerify}
                    disabled={otp.length !== 4}
                >
                    Verify
                </button>
            </div>
            <div className="mt-4 text-gray-500">
                <p>Hint: OTP is 1234</p>
            </div>
        </div>
    );
}

export default VerifyOTP;