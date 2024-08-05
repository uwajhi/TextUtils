import React, {useState} from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('');
    const [findText, setFindText] = useState('');
    const [length, setLength] = useState(0);

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Text has been coverted to Uppercase", "success");
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Text has been coverted to Lowercase", "success");

    }
    const handleOnChange = (event) => {
        const newText = event.target.value; 
        setText(newText);
        setLength(calculteWords(newText));

    }
    const calculteWords = (newText) => {
        const words = newText.split(/\s+/);
        const properWords = words.filter(word => word.length > 0)
        return properWords.length;

    }
    const handleClearClick = () => {
        setText('');
        setFindText('');
        setLength(0);
        props.showAlert("Text has been Cleared", "success");

    }
    const handleAlternatingClick = () => {
        var count = 0;
        var newText = '';
        [...text].forEach(element => {
            if(count % 2 !== 0)
                newText += element.toUpperCase()
            else
                newText += element.toLowerCase();
            count++;
        });
        setText(newText);
        props.showAlert("Text has been coverted to Alternating Case", "success");

    }
    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied", "success");

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Text has cleared of Extra Spaces", "success");

    }
    const handleFindOnChange = (event) => {
        setFindText(event.target.value);
        props.showAlert("Text has been found", "success");
    }
  return (
    <>
        <div className='container' style={{color: props.mode === 'light' ? '#042743' : 'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? '#042743' : 'white' }} id="exampleFormControlTextarea1" placeholder='Enter text here' rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary m-2" onClick={handleLowClick}>Convert to Lower Case</button>
            <button className="btn btn-primary m-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary m-2" onClick={handleAlternatingClick}>Convert to Alternating Case</button>
            <button className="btn btn-primary m-2" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            <h3>Find text:</h3>
            <input type="text" name="find" id="find" value={findText} onChange={handleFindOnChange} />
            <p>Your string location is: {text.indexOf(findText)} </p>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light' ? '#042743' : 'white'}}>
            <h2>Your text summary</h2>
            <p>{length} words, {text.length} characters</p>
            <p>{text.length === 0 ? '0' : text.split(' ').length * 0.008} Minutes read</p>
            <h2>{text.length === 0 ? '' : 'Preview'}</h2>
            <p>{text}</p>

        </div>

    </>
    
  )
}

export default TextForm