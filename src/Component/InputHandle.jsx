import React, { useState, useContext } from 'react';
import { GridSizeContext } from '../State/GridSizeProvider';

export default function InputHandle() {

    const [inputHeight, setInputHeight] = useState(20);
    const [inputWidth, setInputWidth] = useState(20);
    const [errorMessage, setErrorMessage] = useState('');
    const [gridSize, setGridSize] = useContext(GridSizeContext);

    const handleInputChange = (e, setType) => {
        setType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const height = parseInt(inputHeight, 10);
        const width = parseInt(inputWidth, 10);
        if (height < 3 || height > 40 || width < 3 || width > 40) {
            setErrorMessage('Hi friendly reminder: Height and width must be between 3 and 40.');
            return;
        }
        setGridSize([height, width]);
        setErrorMessage('');
    };
    return (
        <div >
            <div className="input-handle">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="heightInput">Height:</label>
                    <input
                        id="heightInput"
                        type="number"
                        value={inputHeight}
                        onChange={(e) => handleInputChange(e, setInputHeight)}
                        placeholder="Height"
                    />
                    <br></br>
                    <label htmlFor="widthInput">Width: </label>
                    <input
                        id="widthInput"
                        type="number"
                        value={inputWidth}
                        onChange={(e) => handleInputChange(e, setInputWidth)}
                        placeholder="Width"
                    />
                    <br></br>
                    <button type="submit">Update Grid Size</button>
                </form>

                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </div>
    );

}