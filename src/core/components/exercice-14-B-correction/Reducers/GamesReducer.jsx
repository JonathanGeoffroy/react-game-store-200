import { FETCH_GAME_BEGIN, FETCH_GAME_SUCCESS, FETCH_GAME_ERROR } from "../Actions/Game/FetchGame";
import { FETCH_GAMES_BEGIN, FETCH_GAMES_SUCCESS, FETCH_GAMES_ERROR } from "../Actions/Game/FetchGames";
import { ADD_GAME_BEGIN, ADD_GAME_SUCCESS, ADD_GAME_ERROR } from "../Actions/Game/AddGame";

const initialState = {
    games: [],
    game: null,
    error: null
};

export function gamesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_GAME_BEGIN:
            return {
                ...state,
                error: null
            };
        case FETCH_GAME_SUCCESS:
            return {
                ...state,
                game: { ...action.payload.game }
            };
        case FETCH_GAME_ERROR:
            return {
                ...state,
                error: action.payload.error
            };
        case FETCH_GAMES_BEGIN:
            return {
                ...state,
                error: null
            };
        case FETCH_GAMES_SUCCESS:
            return {
                ...state,
                games: [ ...action.payload.games ]
            };
        case FETCH_GAMES_ERROR:
            return {
                ...state,
                error: action.payload.error
            };
        case ADD_GAME_BEGIN:
            return {
                ...state,
                error: null
            };
        case ADD_GAME_SUCCESS:
            return {
                ...state,
                game: { ...action.payload.game },
                games: [ ...state.games, { ...action.payload.game } ]
            };
        case ADD_GAME_ERROR:
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
}