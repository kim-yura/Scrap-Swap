import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createScrap } from '../../store/scraps';

import './ScrapsPostForm.css';

const ScrapsPostForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state.session.user.id);

    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState('');
    const [imageStatus, setImageStatus] = useState('Upload');
    const [yarnWeightId, setYarnWeightId] = useState(0);
    const [fiberContent, setFiberContent] = useState('');
    const [yardage, setYardage] = useState('');
    const [allergens, setAllergens] = useState('');
    const [swapTargetId, setSwapTargetId] = useState(0);
    const [textContent, setTextContent] = useState('');

    const [isRed, setIsRed] = useState(false);
    const [isRedOrange, setIsRedOrange] = useState(false);
    const [isOrange, setIsOrange] = useState(false);
    const [isOrangeYellow, setIsOrangeYellow] = useState(false);
    const [isYellow, setIsYellow] = useState(false);
    const [isYellowGreen, setIsYellowGreen] = useState(false);
    const [isGreen, setIsGreen] = useState(false);
    const [isBlueGreen, setIsBlueGreen] = useState(false);
    const [isBlue, setIsBlue] = useState(false);
    const [isBluePurple, setIsBluePurple] = useState(false);
    const [isPurple, setIsPurple] = useState(false);
    const [isPink, setIsPink] = useState(false);
    const [isWhite, setIsWhite] = useState(false);
    const [isGray, setIsGray] = useState(false);
    const [isBlack, setIsBlack] = useState(false);
    const [isCream, setIsCream] = useState(false);
    const [isBrown, setIsBrown] = useState(false);
    const [isRainbow, setIsRainbow] = useState(false);

    const [validationErrors, setValidationErrors] = useState([]);

    // --------------- //

    const uploadImage = async (e, image, setter, statusSetter) => {
        e.preventDefault();
        statusSetter("Loading...");
        const formData = new FormData();
        formData.append("image", image);
        const res = await fetch('/api/images', {
            method: "POST",
            body: formData
        });
        statusSetter("Uploaded!");
        if (res.ok) {
            let data = await res.json();
            setter(data.url);
        }
    };

    const handleCancel = () => {
        history.push(`/`);
    };

    const handleSubmit = async (e) => {
        window.scrollTo(0, 0);
        e.preventDefault();

        let allColors = ' ';

        if (isRed) allColors += 'red ';
        if (isRedOrange) allColors += 'redorange ';
        if (isOrange) allColors += 'orange ';
        if (isOrangeYellow) allColors += 'orangeyellow ';
        if (isYellow) allColors += 'yellow ';
        if (isYellowGreen) allColors += 'yellowgreen ';
        if (isGreen) allColors += 'green ';
        if (isBlueGreen) allColors += 'bluegreen ';
        if (isBlue) allColors += 'blue ';
        if (isBluePurple) allColors += 'bluepurple ';
        if (isPurple) allColors += 'purple ';
        if (isPink) allColors += 'pink ';
        if (isWhite) allColors += 'white ';
        if (isGray) allColors += 'gray ';
        if (isBlack) allColors += 'black ';
        if (isCream) allColors += 'cream ';
        if (isBrown) allColors += 'brown ';
        if (isRainbow) allColors += 'rainbow ';

        const newScrap = {
            userId,
            title,
            imageURL,
            yarnWeightId,
            fiberContent,
            yardage,
            allergens,
            swapTargetId,
            textContent,
            colors: allColors
        };

        const errors = [];

        if (!title) errors.push('Please enter a title.');
        if (title.length > 50) errors.push('Titles cannot be longer than 50 characters.');

        if (!imageURL) errors.push('Scraps need an image.');

        if (yarnWeightId === 0) errors.push('Please select a yarn weight category.');

        if (!fiberContent) errors.push('Please enter the fiber content of your Scrap.');

        if (!yardage) errors.push('Please enter the yardage of your Scrap.');
        if (yardage === 0) errors.push('You cannot swap 0 yards of yarn!');
        if (yardage < 0) errors.push('You cannot swap negative amounts of yarn!');

        if (swapTargetId === 0) errors.push('Please select a swap target.');

        if (allColors === ' ') errors.push('Please select at least one color.');

        setValidationErrors(errors);

        if (!errors.length) {
            const submittedScrap = await dispatch(createScrap(newScrap));
            history.push(`/scraps/${submittedScrap.id}`);
        };
    };

    // --------------- COLOR BUTTONS --------------- //
    const handleRed = () => {
        setIsRed(!isRed);
    };
    const handleIsRedOrange = () => {
        setIsRedOrange(!isRedOrange);
    };
    const handleIsOrange = () => {
        setIsOrange(!isOrange);
    };
    const handleIsOrangeYellow = () => {
        setIsOrangeYellow(!isOrangeYellow);
    };
    const handleIsYellow = () => {
        setIsYellow(!isYellow);
    };
    const handleIsYellowGreen = () => {
        setIsYellowGreen(!isYellowGreen);
    };
    const handleIsGreen = () => {
        setIsGreen(!isGreen);
    };
    const handleIsBlueGreen = () => {
        setIsBlueGreen(!isBlueGreen);
    };
    const handleIsBlue = () => {
        setIsBlue(!isBlue);
    };
    const handleIsBluePurple = () => {
        setIsBluePurple(!isBluePurple);
    };
    const handleIsPurple = () => {
        setIsPurple(!isPurple);
    };
    const handleIsPink = () => {
        setIsPink(!isPink);
    };
    const handleIsWhite = () => {
        setIsWhite(!isWhite);
    };
    const handleIsGray = () => {
        setIsGray(!isGray);
    };
    const handleIsBlack = () => {
        setIsBlack(!isBlack);
    };
    const handleIsCream = () => {
        setIsCream(!isCream);
    };
    const handleIsBrown = () => {
        setIsBrown(!isBrown);
    };
    const handleIsRainbow = () => {
        setIsRainbow(!isRainbow);
    };

    return (
        <div className='new-scrap-background'>
            <form className='new-scrap-form' onSubmit={handleSubmit}>

                {validationErrors.length ?
                    <div className='form-errors'>
                        {validationErrors.length > 0 &&
                            validationErrors.map(error =>
                                <p className='form-error' key={error}>
                                    {error}
                                </p>)}
                    </div>
                    : ''}

                <div className='form-inputs'>
                    <div className='image-form'>
                        {imageURL ? 'Image successfully uploaded!' : 'Upload an image for your Scrap'}
                        {imageURL ? <img className='image' src={imageURL} alt='Scrap' /> : ''}
                        <input
                            type='file'
                            accept='image/*'
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        <button id='image-upload-button' onClick={(e) => uploadImage(e, image, setImageURL, setImageStatus)}>
                            {imageStatus}
                        </button>
                    </div>

                    <div className='form-fields'>
                        <h2>Create a Scrap!</h2>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            id='title'
                            type='text'
                            placeholder='Enter a title for your Scrap'
                        />
                        <select defaultValue={0} onChange={(e) => setYarnWeightId(e.target.value)}>
                            <option value={0}>Choose a yarn weight for your Scrap</option>
                            <option value={1} required>Thread</option>
                            <option value={2} required>Lace</option>
                            <option value={3} required>Light Fingering</option>
                            <option value={4} required>Fingering</option>
                            <option value={5} required>Sport</option>
                            <option value={6} required>DK</option>
                            <option value={7} required>Worsted</option>
                            <option value={8} required>Aran</option>
                            <option value={9} required>Bulky</option>
                            <option value={10} required>Super Bulky</option>
                            <option value={11} required>Jumbo</option>
                        </select>
                        <p className='colors-label'>Select colors for your Scrap:</p>
                        <div className='colors-buttons'>
                            <button
                                type='button'
                                className={isRed ? 'yes-color' : ''}
                                onClick={handleRed}>Red</button>
                            <button
                                type='button'
                                className={isRedOrange ? 'yes-color' : ''}
                                onClick={handleIsRedOrange}>Red-orange</button>
                            <button
                                type='button'
                                className={isOrange ? 'yes-color' : ''}
                                onClick={handleIsOrange}>Orange</button>
                            <button
                                type='button'
                                className={isOrangeYellow ? 'yes-color' : ''}
                                onClick={handleIsOrangeYellow}>Orange-yellow</button>
                            <button
                                type='button'
                                className={isYellow ? 'yes-color' : ''}
                                onClick={handleIsYellow}>Yellow</button>
                            <button
                                type='button'
                                className={isYellowGreen ? 'yes-color' : ''}
                                onClick={handleIsYellowGreen}>Yellow-green</button>
                            <button
                                type='button'
                                className={isGreen ? 'yes-color' : ''}
                                onClick={handleIsGreen}>Green</button>
                            <button
                                type='button'
                                className={isBlueGreen ? 'yes-color' : ''}
                                onClick={handleIsBlueGreen}>Blue-green</button>
                            <button
                                type='button'
                                className={isBlue ? 'yes-color' : ''}
                                onClick={handleIsBlue}>Blue</button>
                            <button
                                type='button'
                                className={isBluePurple ? 'yes-color' : ''}
                                onClick={handleIsBluePurple}>Blue-purple</button>
                            <button
                                type='button'
                                className={isPurple ? 'yes-color' : ''}
                                onClick={handleIsPurple}>Purple</button>
                            <button
                                type='button'
                                className={isPink ? 'yes-color' : ''}
                                onClick={handleIsPink}>Pink</button>
                            <button
                                type='button'
                                className={isWhite ? 'yes-color' : ''}
                                onClick={handleIsWhite}>White</button>
                            <button
                                type='button'
                                className={isGray ? 'yes-color' : ''}
                                onClick={handleIsGray}>Gray</button>
                            <button
                                type='button'
                                className={isBlack ? 'yes-color' : ''}
                                onClick={handleIsBlack}>Black</button>
                            <button
                                type='button'
                                className={isCream ? 'yes-color' : ''}
                                onClick={handleIsCream}>Undyed/Cream</button>
                            <button
                                type='button'
                                className={isBrown ? 'yes-color' : ''}
                                onClick={handleIsBrown}>Brown</button>
                            <button
                                type='button'
                                className={isRainbow ? 'yes-color' : ''}
                                onClick={handleIsRainbow}>Rainbow</button>
                        </div>
                        <input
                            onChange={(e) => setFiberContent(e.target.value)}
                            value={fiberContent}
                            id='fiberContent'
                            type='text'
                            placeholder='Enter the fiber content of your Scrap'
                        />
                        <input
                            onChange={(e) => setYardage(e.target.value)}
                            value={yardage}
                            id='yardage'
                            type='number'
                            placeholder='Enter the yardage of your Scrap'
                        />
                        <textarea
                            onChange={(e) => setAllergens(e.target.value)}
                            value={allergens}
                            id='allergens'
                            type='text'
                            placeholder='Are there any allergens to consider? (e.g.: cat-friendly home) Please only include things that ARE in your home! (e.g.: do not write "smoke-free home")'
                        />
                        <select defaultValue={0} onChange={(e) => setSwapTargetId(e.target.value)}>
                            <option value={0}>What are you swapping for?</option>
                            <option value={1} required>Trade</option>
                            <option value={2} required>Sending in exchange for postage</option>
                            <option value={3} required>Sending for free!</option>
                        </select>
                        <textarea
                            onChange={(e) => setTextContent(e.target.value)}
                            value={textContent}
                            id='textContent'
                            placeholder='Please enter any details of the Scrap swap. (e.g.: looking for specific colors, yarn weights, fiber content, allergen considerations)'
                        />
                        <button className='submit-button' onClick={handleSubmit}>Submit</button>
                        <button className='submit-button' onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )

};

export default ScrapsPostForm;
