import { csrfFetch } from '../helpers';

const LOAD_ALL_SCRAPS = 'scraps/loadAllScraps';
const CREATE_SCRAP = 'scraps/createScrap';
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


// -------------------- CREATE -------------------- //

export const createScrap = ({
    userId,
    title,
    imageURL,
    yarnWeightId,
    fiberContent,
    yardage,
    allergens,
    textContent,
    swapTargetId,
    user
}) => async (dispatch) => {
    const response = await csrfFetch('/api/scraps/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: userId,
            title,
            image_url: imageURL,
            yarn_weight_id: yarnWeightId,
            fiber_content: fiberContent,
            yardage,
            allergens,
            text_content: textContent,
            swap_target_id: swapTargetId,
            user
        })
    });

    if (response.ok) {
        const scrap = await response.json();
        dispatch(createScrapAction(scrap));
        return scrap;
    }
};

const createScrapAction = (scrap) => ({
    type: CREATE_SCRAP,
    scrap
});



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
        case CREATE_SCRAP:

        default:
            return state;
    }
}

export default scrapReducer;
