import React from 'react';

import './about.css'
function About() {
    return (
        <div className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 rounded-3xl p-8 max-w-md mx-auto md:max-w-2xl lg:max-w-4xl">
            <div className="flex justify-center mb-8">
            <div className="img1"></div>
                {/* <img src="https://placehold.co/100x100" alt="Logo 1" className="mx-2" /> */}
                <img src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Logo 2" className="mx-2 h-20 rounded-2xl" />
                {/* <img src="https://placehold.co/100x100" alt="Logo 3" className="mx-2" /> */}
            </div>
            <div className="bg-white rounded-3xl p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Fruit.AI</h1>
                <p className="text-gray-600 mb-6">
                    Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
                </p>
                <button className="bg-black text-white py-2 px-6 rounded-full font-bold">ABOUT</button>
            </div>
        </div>
    );
}

export default About;