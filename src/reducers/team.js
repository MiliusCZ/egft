import { TEAM_REQUEST, TEAM_REQUEST_SUCCESS } from 'constants/action-types';

const initialState = {
    loading: false,
    data: []
};

export default function app(state = initialState, action) {
    switch (action.type) {
        case TEAM_REQUEST:
            return { ...state, loading: true };
        case TEAM_REQUEST_SUCCESS:
            const data = action.result;
            return { ...state, loading: false, data };
        default:
            return state;
    }
}
