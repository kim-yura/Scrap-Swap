import { csrfFetch } from '../helpers';

const LOAD_ALL_SCRAPS = 'scraps/loadAllScraps';
const CREATE_SCRAP = 'scraps/createScrap';
const EDIT_SCRAP = 'scraps/editScrap';
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

// -------------------- EDIT -------------------- //

export const editScrap = ({
    id,
    title,
    imageURL,
    yarnWeightId,
    fiberContent,
    yardage,
    allergens,
    textContent,
    swapTargetId
}) => async (dispatch) => {
    const response = await csrfFetch('/api/scraps/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id,
            title,
            image_url: imageURL,
            yarn_weight_id: yarnWeightId,
            fiber_content: fiberContent,
            yardage,
            allergens,
            text_content: textContent,
            swap_target_id: swapTargetId
        })
    });

    if (response.ok) {
        const scrap = await response.json();
        dispatch(editScrapAction(scrap));
        return scrap;
    }
};

const editScrapAction = (scrap) => ({
    type: EDIT_SCRAP,
    scrap
});



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
        case EDIT_SCRAP:
            newState[action.scrap.id] = action.scrap;
            return newState;

        default:
            return state;
    }
}

export default scrapReducer;
