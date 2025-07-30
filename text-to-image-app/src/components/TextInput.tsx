import React, { useState } from 'react';

const TextInput: React.FC<{ onGenerate: (text: string) => void }> = ({ onGenerate }) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onGenerate(inputText);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter text to generate image"
            />
            <button type="submit">Generate Image</button>
        </form>
    );
};

export default TextInput;