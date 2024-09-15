import React from "react";
import { Link } from "react-router-dom";
// import "./loading.css"
function Loading() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(interval);
                    return 100;
                }
                return Math.min(oldProgress + 1, 100);
            });
        }, 50); // 5000ms / 100 = 50ms per increment
    }, []);

    return (
        <div className=" bg-white rounded-lg shadow-md flex flex-col items-center justify-center h-full w-full max-w-md mx-auto p-4 md:p-8 lg:p-12">
            <div className="flex flex-col items-center">
                <div className="text-purple-500 text-3xl mb-4">
                    <i className="far fa-image"></i>
                </div>
                <h1 className="text-gray-800 text-xl font-semibold mb-8 text-center">We’re verifying.</h1>
            </div>
            <div className="w-full mb-4">
                <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                        <div>
                            <span className="text-xs font-semibold inline-block text-gray-500">Restoring... {progress}%</span>
                        </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                        <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                    </div>
                </div>
            </div>
            <Link to="/Chatbot"><button 
                className={`py-2 px-4 rounded-full w-full font-semibold ${progress === 100 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'}`} 
                disabled={progress !== 100}
            >
                Continue
            </button>
            </Link>
        </div>
    );
}
export default Loading;