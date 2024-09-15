import React from "react";
import { Link } from "react-router-dom";
function HelloChat() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
            <i className="fas fa-comment-alt text-purple-500 text-3xl mb-4"></i>
            <h1 className="text-3xl font-semibold text-gray-800">Hello</h1>
            <h2 className="text-3xl font-semibold text-purple-500">Chat.</h2>
            <p className="text-gray-500 mt-2 mb-4">The last chat app you'll ever need.</p>

            <Link to="/chatbot"><button className={`py-2 px-4 rounded-full w-full bg-purple-500 text-white `} >
                    Continue
                </button>
                </Link>
        </div>
    );
}
export default HelloChat;