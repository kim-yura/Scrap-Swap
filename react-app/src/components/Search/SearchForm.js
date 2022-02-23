import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScrapCard from '../ScrapCard/ScrapCard';

import { loadAllScraps } from '../../store/scraps';

import './Search.css';

const SearchForm = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAllScraps());
    }, []);

    const allScraps = useSelector(state => {
        return state.scraps
    });

    const [searchParams, setSearchParams] = useState('');
    const [yarnWeightId, setYarnWeightId] = useState(0);
    const [minimumYardage, setMinimumYardage] = useState(0);
    const [swapTargetId, setSwapTargetId] = useState(0);
    const [noCats, setNoCats] = useState(false);
    const [noDogs, setNoDogs] = useState(false);
    const [otherAllergens, setOtherAllergens] = useState('');

    const [searchResultsArr, setSearchResultsArr] = useState([]);

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

    useEffect(() => {
        setSearchResultsArr(Object.values(allScraps).reverse());
    }, [allScraps]);

    const toggleCats = () => {
        setNoCats(!noCats);
    };
    const toggleDogs = () => {
        setNoDogs(!noDogs);
    };

    const backToTop = () => {
        window.scrollTo(0, 0);
        document.getElementById('back-to-top').className = 'bounce';
        setTimeout(() => {
            try {
                document.getElementById('back-to-top').classList.remove('bounce');
            }
            catch { };
        }, 500);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        setSearchResultsArr([]);
        let searchResultsArr = [];
        Object.values(allScraps).forEach(scrap => {
            if (scrap.title.toLowerCase().includes(searchParams.toLowerCase()) || scrap.textContent.toLowerCase().includes(searchParams.toLowerCase())) {
                if (minimumYardage) {
                    if (scrap.yardage > parseInt(minimumYardage)) {
                        searchResultsArr.push(scrap);
                    };
                } else {
                    searchResultsArr.push(scrap);
                };
            };
        });

        if (parseInt(yarnWeightId) !== 0) {
            let copyArr = searchResultsArr.slice();
            searchResultsArr = [];
            copyArr.forEach(scrap => {
                if (scrap.yarnWeightId === parseInt(yarnWeightId)) {
                    searchResultsArr.push(scrap);
                };
            });
        };

        if (parseInt(swapTargetId) !== 0) {
            let copyArr = searchResultsArr.slice();
            searchResultsArr = [];
            copyArr.forEach(scrap => {
                if (scrap.swapTargetId === parseInt(swapTargetId)) {
                    searchResultsArr.push(scrap);
                };
            });
        };

        if (noCats) {
            let copyArr = searchResultsArr.slice();
            searchResultsArr = [];
            copyArr.forEach(scrap => {
                if (scrap.allergens.toLowerCase().includes('cat') === false) {
                    searchResultsArr.push(scrap);
                };
            });
        };
        if (noDogs) {
            let copyArr = searchResultsArr.slice();
            searchResultsArr = [];
            copyArr.forEach(scrap => {
                if (scrap.allergens.toLowerCase().includes('dog') === false) {
                    searchResultsArr.push(scrap);
                };
            });
        };
        if (otherAllergens) {
            let copyArr = searchResultsArr.slice();
            searchResultsArr = [];
            copyArr.forEach(scrap => {
                if (scrap.allergens.toLowerCase().includes(otherAllergens.toLowerCase()) === false) {
                    searchResultsArr.push(scrap);
                };
            });
        };

        setSearchResultsArr(searchResultsArr.reverse());

        if (isRed || isRedOrange || isOrange || isOrangeYellow || isYellow || isYellowGreen || isGreen || isBlueGreen || isBlue || isBluePurple || isPurple || isPink || isWhite || isGray || isBlack || isCream || isBrown || isRainbow) {
            let inclusiveColorSearch = new Set();

            if (isRed) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' red ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isRedOrange) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' redorange ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isOrange) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' orange ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isOrangeYellow) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' orangeyellow ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isYellow) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' yellow ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isYellowGreen) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' yellowgreen ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isGreen) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' green ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isBlueGreen) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' bluegreen ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isBlue) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' blue ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isBluePurple) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' bluepurple ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isPurple) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' purple ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isPink) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' pink ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isWhite) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' white ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isGray) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' gray ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isBlack) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' black ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isCream) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' cream ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isBrown) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' brown ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };
            if (isRainbow) {
                searchResultsArr.forEach(scrap => {
                    if (scrap.colors.includes(' rainbow ')) {
                        inclusiveColorSearch.add(scrap);
                    };
                });
            };

            setSearchResultsArr(Array.from(inclusiveColorSearch));
        };
        window.scrollTo(0, 0);
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
        <div className='search'>
            <form className='search-form-container' onSubmit={handleSearch}>
                <div id='search-form-header'>
                    Search for...
                </div>
                <input
                    onChange={(e) => setSearchParams(e.target.value)}
                    value={searchParams}
                    id='search-params'
                    type='text'
                    placeholder='Search for anything'
                />
                <select id='yarn-weight-selector' defaultValue={0} onChange={(e) => setYarnWeightId(e.target.value)}>
                    <option value={0}>Choose a yarn weight</option>
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
                <p className='label'>
                    I'm looking for any of these colors...
                </p>
                <div className='colors-buttons-search'>
                    <button
                        type='button'
                        className={isRed ? 'yes-color-search' : ''}
                        onClick={handleRed}>Red</button>
                    <button
                        type='button'
                        className={isRedOrange ? 'yes-color-search' : ''}
                        onClick={handleIsRedOrange}>Red-orange</button>
                    <button
                        type='button'
                        className={isOrange ? 'yes-color-search' : ''}
                        onClick={handleIsOrange}>Orange</button>
                    <button
                        type='button'
                        className={isOrangeYellow ? 'yes-color-search' : ''}
                        onClick={handleIsOrangeYellow}>Orange-yellow</button>
                    <button
                        type='button'
                        className={isYellow ? 'yes-color-search' : ''}
                        onClick={handleIsYellow}>Yellow</button>
                    <button
                        type='button'
                        className={isYellowGreen ? 'yes-color-search' : ''}
                        onClick={handleIsYellowGreen}>Yellow-green</button>
                    <button
                        type='button'
                        className={isGreen ? 'yes-color-search' : ''}
                        onClick={handleIsGreen}>Green</button>
                    <button
                        type='button'
                        className={isBlueGreen ? 'yes-color-search' : ''}
                        onClick={handleIsBlueGreen}>Blue-green</button>
                    <button
                        type='button'
                        className={isBlue ? 'yes-color-search' : ''}
                        onClick={handleIsBlue}>Blue</button>
                    <button
                        type='button'
                        className={isBluePurple ? 'yes-color-search' : ''}
                        onClick={handleIsBluePurple}>Blue-purple</button>
                    <button
                        type='button'
                        className={isPurple ? 'yes-color-search' : ''}
                        onClick={handleIsPurple}>Purple</button>
                    <button
                        type='button'
                        className={isPink ? 'yes-color-search' : ''}
                        onClick={handleIsPink}>Pink</button>
                    <button
                        type='button'
                        className={isWhite ? 'yes-color-search' : ''}
                        onClick={handleIsWhite}>White</button>
                    <button
                        type='button'
                        className={isGray ? 'yes-color-search' : ''}
                        onClick={handleIsGray}>Gray</button>
                    <button
                        type='button'
                        className={isBlack ? 'yes-color-search' : ''}
                        onClick={handleIsBlack}>Black</button>
                    <button
                        type='button'
                        className={isCream ? 'yes-color-search' : ''}
                        onClick={handleIsCream}>Undyed/Cream</button>
                    <button
                        type='button'
                        className={isBrown ? 'yes-color-search' : ''}
                        onClick={handleIsBrown}>Brown</button>
                    <button
                        type='button'
                        className={isRainbow ? 'yes-color-search' : ''}
                        onClick={handleIsRainbow}>Rainbow</button>
                </div>
                <p className='label'>
                    I need at least this many yards...
                </p>
                <input
                    onChange={(e) => setMinimumYardage(e.target.value)}
                    value={minimumYardage}
                    id='minimum-yardage'
                    type='number'
                />
                <p className='label'>
                    I'm looking to...
                </p>
                <select defaultValue={0} onChange={(e) => setSwapTargetId(e.target.value)}>
                    <option value={0}>What are you swapping for?</option>
                    <option value={1} required>Trade</option>
                    <option value={2} required>Pay for postage</option>
                    <option value={3} required>Receive for free!</option>
                </select>
                <p className='label'>
                    I'm allergic to...
                </p>
                <div className='allergen-buttons'>
                    <img src={noCats ? 'https://scrapswap.s3.amazonaws.com/cat-yes2.png' : 'https://scrapswap.s3.amazonaws.com/cat-no.png'}
                        className={noCats ? 'selected' : ''}
                        onClick={toggleCats}
                        alt='Button to toggle cats' />
                    <img src={noDogs ? 'https://scrapswap.s3.amazonaws.com/dog-yes2.png' : 'https://scrapswap.s3.amazonaws.com/dog-no.png'}
                        className={noDogs ? 'selected' : ''}
                        onClick={toggleDogs}
                        alt='Button to toggle dogs' />
                </div>
                <input
                    onChange={(e) => setOtherAllergens(e.target.value)}
                    value={otherAllergens}
                    type='text'
                    placeholder='...others'
                />
                <button
                    type='submit'
                    onClick={handleSearch}
                    className='submit-search-button'>
                    Gimme those Scraps!
                </button>
            </form>
            <div className='search-page'>
                <div className='search-results-gradient' />
                <div className='search-container'>
                    {searchResultsArr.length ?
                        searchResultsArr.map((scrap, idx) =>
                            <ScrapCard scrap={scrap} key={idx} />)
                        : <div className='no-scraps-found'>
                            No Scraps Found!
                            <p>Try a different search</p>
                        </div>}
                </div>
                <img onClick={backToTop}
                    id='back-to-top'
                    src={'https://scrapswap.s3.amazonaws.com/Scroll.png'}
                    alt='Scroll up icon' />
            </div>
        </div>
    )
};

export default SearchForm;
