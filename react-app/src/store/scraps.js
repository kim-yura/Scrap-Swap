import { csrfFetch } from '../helpers';

const LOAD_ALL_SCRAPS = 'scraps/loadAllScraps';
// const CREATE_SCRAP = 'scraps/CREATE_SCRAP';
// const EDIT_SCRAP = 'scraps/EDIT_SCRAP';
// const DELETE_SCRAP = 'scraps/DELETE_SCRAP';

// -------------------- READ -------------------- //

export const loadAllScraps = () => async (dispatch) => {
    const response = await csrfFetch('/api/scraps');
    const allScraps = await response.json();
    dispatch(loadAllScrapsAction(allScraps));
    return allScraps;
};

const loadAllScrapsAction = (allScraps) => ({
    type: LOAD_ALL_SCRAPS,
    allScraps
});




// const createScrap = (scrap) => ({
//     type: CREATE_SCRAP,
//     scrap
// });

// const editScrap = (scrap) => ({
//     type: EDIT_SCRAP,
//     scrap
// });

// const deleteScrap = (scrap) => ({
//     type: DELETE_SCRAP,
//     scrap
// });


// -------------------- REDUCER -------------------- //

const scrapReducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case LOAD_ALL_SCRAPS:
            action.allScraps.forEach(scrap => {
                newState[scrap.id] = scrap;
            });
            return newState;

        default:
            return state;
    }
}

export default scrapReducer;
