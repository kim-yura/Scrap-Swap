import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

    const toggleCats = () => {
        setNoCats(!noCats);
    };
    const toggleDogs = () => {
        setNoDogs(!noDogs);
    };

    const handleSearch = () => {
        let searchResultsArr = [];
        Object.values(allScraps).forEach(scrap => {
            if (scrap.title.includes(searchParams) || scrap.textContent.includes(searchParams)) {
                if (scrap.yardage > parseInt(minimumYardage)) {
                    searchResultsArr.push(scrap);
                };
            };
        });

        // Yarn weight
        if (yarnWeightId) {
            let copyArr = searchResultsArr.slice();
            searchResultsArr = [];
            copyArr.forEach(scrap => {
                if (scrap.yarnWeightId === parseInt(yarnWeightId)) {
                    searchResultsArr.push(scrap);
                };
            });
        };

        // Swap id
        if (swapTargetId) {
            let copyArr = searchResultsArr.slice();
            searchResultsArr = [];
            copyArr.forEach(scrap => {
                if (scrap.swapTargetId === parseInt(swapTargetId)) {
                    searchResultsArr.push(scrap);
                };
            });
        };
        console.log(searchResultsArr);

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
        console.log(searchResultsArr);
    };

    return (
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
                onClick={handleSearch}
                className='submit-search-button'>
                Gimme those Scraps!
            </button>
        </div>
    )
};

export default SearchForm;
