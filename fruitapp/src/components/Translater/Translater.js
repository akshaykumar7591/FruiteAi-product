import React, { useState } from 'react';
import axios from 'axios';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'hi', name: 'Hindi' },
    { code: 'it', name: 'Italian' },
  ];

  const translateText = async () => {
    const options = {
      method: 'POST',
      url: 'https://free-google-translator.p.rapidapi.com/external-api/free-google-translator',
      params: {
        from: sourceLang,
        to: targetLang,
        query: inputText
      },
      headers: {
        'x-rapidapi-key': '3f060043b6msh0bb4839ad81cb86p1eb8c4jsn2d6f41ceab00',
        'x-rapidapi-host': 'free-google-translator.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        translate: 'rapidapi'
      }
    };

    try {
      const response = await axios.request(options);
      if (response.data && response.data.translation) {
        setTranslatedText(response.data.translation);
      } else {
        setTranslatedText('Translation not available. Please try again.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">Text Translator</h1>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Source Language Selector */}
          <div>
            <label htmlFor="sourceLang" className="block text-sm font-medium text-gray-700">
              Source Language
            </label>
            <select
              id="sourceLang"
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Target Language Selector */}
          <div>
            <label htmlFor="targetLang" className="block text-sm font-medium text-gray-700">
              Target Language
            </label>
            <select
              id="targetLang"
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Input Text Area */}
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-4"
          rows="4"
          placeholder="Enter text to translate..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        {/* Translate Button */}
        <button
          onClick={translateText}
          className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-200"
        >
          Translate
        </button>

        {/* Translated Text Display */}
        {translatedText && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-medium">Translated Text:</h3>
            <p className="text-gray-700 mt-2">{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Translator;
