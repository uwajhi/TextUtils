import React, {useState} from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('');
    const [findText, setFindText] = useState('');

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = () => {
        setText('');
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
    }
    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }
    const handleFindOnChange = (event) => {
        setFindText(event.target.value);
    }
  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Enter text here' rows="8" value={text} onChange={handleOnChange}></textarea>
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
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.length === 0 ? '0' : text.split(' ').length} words, {text.length} characters</p>
            <p>{text.length === 0 ? '0' : text.split(' ').length * 0.008} Minutes read</p>
            <h2>{text.length === 0 ? '' : 'Preview'}</h2>
            <p>{text}</p>

        </div>

    </>
    
  )
}

export default TextForm