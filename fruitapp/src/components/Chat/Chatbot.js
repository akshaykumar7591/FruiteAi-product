import React from "react";
import { Link } from "react-router-dom";

const { useState } = React;

const mockApiData = {
    "orange": {
        name: "Orange",
        price: 8.00,
        quantity: 2,
        description: "Oranges are packed with vitamins, particularly vitamin C, which helps boost your immune system. They also provide a good amount of fiber, which is beneficial for digestion. Oranges are refreshing, juicy, and an easy snack option. Additionally, they contain antioxidants that are known to reduce inflammation and prevent cell damage. These citrus fruits can be eaten on their own, juiced, or added to dishes for a burst of flavor and nutrition."
    },
    "cucumber": {
        name: "Cucumber",
        price: 11.76,
        quantity: 1,
        description: "Cucumbers are composed mostly of water, making them an excellent food for hydration. They are low in calories and contain important nutrients like vitamin K and antioxidants. Cucumbers can help lower blood sugar and promote weight loss. Their crisp texture and mild flavor make them perfect for salads, sandwiches, or as a refreshing snack. Rich in fiber, they support healthy digestion and can also help cool down the body during warm weather."
    },
    "tangerine": {
        name: "Tangerine",
        price: 6.40,
        quantity: 4,
        description: "Tangerines are a small, sweet variety of mandarin oranges with loose, easy-to-peel skin. Known for their bright orange color and sweet-tart taste, tangerines are rich in vitamin C, fiber, and antioxidants. These fruits boost immunity and promote skin health. They are perfect for snacking on the go and are often added to salads, desserts, or fruit bowls. Tangerines also contain anti-inflammatory compounds that support heart health and reduce oxidative stress."
    },
    "apple": {
        name: "Apple",
        price: 5.50,
        quantity: 5,
        description: "Apples are one of the most popular fruits globally, and for good reason. They are rich in fiber, especially pectin, which supports digestive health. Apples are a good source of vitamin C, which enhances skin health and boosts the immune system. Their polyphenols have antioxidant properties, reducing the risk of chronic diseases. Eating apples can promote weight management, improve heart health, and reduce the risk of cancer. They come in a variety of colors and flavors, ranging from sweet to tart."
    },
    "banana": {
        name: "Banana",
        price: 2.00,
        quantity: 7,
        description: "Bananas are an excellent source of quick energy and are packed with important nutrients like potassium, vitamin B6, and vitamin C. They are great for supporting heart health, maintaining healthy blood pressure, and boosting digestive function due to their fiber content. Bananas are a convenient snack, easy to carry, and help to maintain blood sugar levels. Whether eaten raw, blended in smoothies, or added to cereals and desserts, bananas are a versatile and nutritious fruit."
    },
    "grapes": {
        name: "Grapes",
        price: 9.30,
        quantity: 3,
        description: "Grapes come in many varieties, including red, green, and black, and are packed with vitamins C and K. They are loaded with antioxidants, particularly flavonoids, which promote heart health and reduce inflammation. Grapes have been linked to lowering the risk of high blood pressure and diabetes. They are perfect for snacking, adding to salads, or making into juices and wines. The high water content in grapes helps with hydration, while their natural sugars provide a quick energy boost."
    },
    "watermelon": {
        name: "Watermelon",
        price: 4.20,
        quantity: 1,
        description: "Watermelons are a hydrating fruit, consisting of about 90% water, which makes them refreshing, especially in hot weather. They are rich in vitamins A, C, and antioxidants like lycopene, which has been linked to reducing the risk of certain cancers and promoting heart health. Watermelons are also a great source of hydration, making them a perfect summer treat. Their natural sweetness makes them delicious in salads, smoothies, or on their own as a juicy snack."
    },
    "pineapple": {
        name: "Pineapple",
        price: 10.00,
        quantity: 2,
        description: "Pineapples are tropical fruits known for their unique sweet-tart flavor and high vitamin C content. They also contain bromelain, an enzyme that aids digestion and helps reduce inflammation. Pineapples are packed with antioxidants, promoting immune health and protecting against chronic diseases. Whether enjoyed fresh, in a fruit salad, or as part of tropical recipes, pineapples add a burst of flavor and nutrition. Their anti-inflammatory properties make them beneficial for joint health and recovery."
    },
    "strawberry": {
        name: "Strawberry",
        price: 12.50,
        quantity: 4,
        description: "Strawberries are rich in vitamin C, manganese, and antioxidants, which make them a powerful health-boosting fruit. They are known to promote heart health, regulate blood sugar levels, and improve skin health. Strawberries are low in calories but packed with fiber, making them a great choice for weight management. These sweet, juicy fruits can be enjoyed on their own, in smoothies, desserts, or salads, and are an excellent addition to a healthy, balanced diet."
    },
    "mango": {
        name: "Mango",
        price: 3.75,
        quantity: 6,
        description: "Mangoes are tropical fruits, famous for their rich sweetness and juicy texture. They are packed with vitamins A and C, which support immune function, vision, and skin health. Mangoes are also a great source of fiber, promoting digestion and preventing constipation. These fruits are versatile and can be eaten fresh, blended into smoothies, or added to desserts and savory dishes. Their antioxidant properties help fight free radicals, making them beneficial for overall health."
    }
};



const Chatbot = () => {
    const [messages, setMessages] = useState([{
        text: `Here is a list of fruits you can ask about:
    - Orange
    - Cucumber
    - Tangerine
    - Apple
    - Banana
    - Grapes
    - Watermelon
    - Pineapple
    - Strawberry
    - Mango`,
        sender: "bot"
    }]);
    
    const [input, setInput] = useState("");
    const [selectedFruit, setSelectedFruit] = useState(null);


    const handleSend = () => {
        if (input.trim() === "") return;

        const newMessage = { text: input, sender: "user" };
        setMessages([...messages, newMessage]);

        const fruitKey = input.toLowerCase();
        if (mockApiData[fruitKey]) {
            const fruitData = mockApiData[fruitKey];
            const botMessage = { text: fruitData, sender: "bot" };
            setMessages([...messages, newMessage, botMessage]);
        } else {
            const botMessage = { text: "Sorry, I don't have information about that fruit.", sender: "bot" };
            setMessages([...messages, newMessage, botMessage]);
        }

        setInput("");
    };


    const incrementQuantity = (fruit) => {
        fruit.quantity += 1;
        setMessages([...messages]);
    };

    const decrementQuantity = (fruit) => {
        if (fruit.quantity > 0) {
            fruit.quantity -= 1;
            setMessages([...messages]);
        }
    };
    const handleCardClick = (fruit) => {
        setSelectedFruit(fruit);
    };

   

    

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-100 rounded-lg w-full max-w-md p-4 relative">
                <div className="flex items-center mb-4">
                <Link to="/home"><i class="fa-solid fa-arrow-left fa-2x "></i></Link>
                    <img src="https://placehold.co/40x40" alt="User avatar" className="rounded-full w-10 h-10 mr-2 ml-3" />
                    <div>
                        <div className="text-gray-800 font-bold">Fruit Chatbot</div>
                        <div className="text-green-400 text-sm">Online</div>
                    </div>
                </div>
                <div className="overflow-y-auto h-96 mb-4">
                    {messages.map((message, index) => (
                        <div key={index} className={`mb-4 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                            {message.sender === "user" ? (
                                <div className="bg-gray-300 text-gray-800 p-2 rounded-lg inline-block">
                                    {message.text}
                                </div>
                            ) : (
                                <div className="bg-purple-500 text-white p-2 rounded-lg inline-block">
                                    {typeof message.text === "string" ? (
                                        message.text
                                    ) : (
                                        <div className="bg-white p-2 rounded-lg mb-4 flex items-center cursor-pointer" onClick={() => handleCardClick(message.text)}>
                                            <img src="https://placehold.co/40x40" alt={message.text.name} className="rounded-full w-10 h-10 mr-2" />
                                            <div className="flex-1">
                                                <div className="text-red-500 font-bold">{message.text.name}</div>
                                                <div className="text-gray-500">${message.text.price.toFixed(2)}</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-red-500 font-bold">{message.text.quantity}</div>
                                                <div className="text-gray-500">${(message.text.price * message.text.quantity).toFixed(2)}</div>
                                            </div>
                                            <div className="flex items-center ml-2">
                                                <button className="bg-red-500 text-white p-1 rounded-lg mr-1" onClick={(e) => { e.stopPropagation(); decrementQuantity(message.text); }}>-</button>
                                                <button className="bg-green-500 text-white p-1 rounded-lg" onClick={(e) => { e.stopPropagation(); incrementQuantity(message.text); }}>+</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {selectedFruit && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white rounded-lg p-4 w-80">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-bold">{selectedFruit.name}</h2>
                                    <button onClick={() => setSelectedFruit(null)} className="text-red-500">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                             
                                <div className="text-center mb-4">
                                <div className="text-red-500 font-bold">{selectedFruit.name}</div>
                        <div className="text-gray-500 mb-4">{selectedFruit.description}</div>
                        <div className="text-gray-500">Price: ${selectedFruit.price.toFixed(2)}</div>
                        <div className="text-gray-500">Quantity: {selectedFruit.quantity}</div>
                        <div className="text-gray-500">Total: ${(selectedFruit.price * selectedFruit.quantity).toFixed(2)}</div>
                                </div>
                               
                            </div>
                        </div>
                    )} 
                <div className="flex items-center bg-gray-300 p-2 rounded-lg">
                    <input
                        type="text"
                        placeholder="Message..."
                        className="flex-1 bg-gray-300 text-gray-800 p-2 rounded-lg outline-none"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button className="ml-2 bg-purple-500 p-2 rounded-full" onClick={handleSend}>
                        <i className="fas fa-paper-plane text-white"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Chatbot;
