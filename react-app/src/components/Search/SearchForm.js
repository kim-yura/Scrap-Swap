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

    const toggleCats = () => {
        setNoCats(!noCats);
    };
    const toggleDogs = () => {
        setNoDogs(!noDogs);
    };

    const handleSearch = () => {

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

        // Yarn weight
        if (parseInt(yarnWeightId) !== 0) {
            let copyArr = searchResultsArr.slice();
            searchResultsArr = [];
            copyArr.forEach(scrap => {
                if (scrap.yarnWeightId === parseInt(yarnWeightId)) {
                    searchResultsArr.push(scrap);
                };
            });
        };

        // Swap id
        if (parseInt(swapTargetId) !== 0) {
            let copyArr = searchResultsArr.slice();
            searchResultsArr = [];
            copyArr.forEach(scrap => {
                if (scrap.swapTargetId === parseInt(swapTargetId)) {
                    searchResultsArr.push(scrap);
                };
            });
        };

        // Allergens
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
        setSearchResultsArr(searchResultsArr);
        window.scrollTo(0, 0);
    };

    return (
        <div className='search'>
            <div className='search-form-container'>
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
                <select defaultValue={0} onChange={(e) => setYarnWeightId(e.target.value)}>
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
                    <button
                        className={noCats ? 'toggle-yes' : ''}
                        onClick={toggleCats}>Cats</button>
                    <button
                        className={noDogs ? 'toggle-yes' : ''}
                        onClick={toggleDogs}>Dogs</button>
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
            </div>
            <div className='search-page'>
                <div className='search-results-gradient' />
                <div className='search-container'>
                    {searchResultsArr.length > 0 &&
                        searchResultsArr.map((scrap, idx) =>
                            <ScrapCard scrap={scrap} key={idx} />
                        )}
                </div>
            </div>
        </div>
    )
};

export default SearchForm;