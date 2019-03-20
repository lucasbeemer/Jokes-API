import { FETCHING_JOKES, 
    FETCHED_JOKES, 
    SAVING_JOKES, 
    SAVED_JOKES, 
    DELETING_JOKES, 
    DELETED_JOKES, 
    UPDATED_JOKES, 
    UPDATING_JOKES 
} from "../actions";

const initialState = {
    fetchingJokes: false,
    jokesFetched: false,
    jokesSaved: false,
    savingJokes: false,
    updatingJoke: false,
    jokeUpdated: false,
    deletingJoke: false,
    jokeDeleted: false,
    jokes: [],
    error: null
}

export const jokesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_JOKES:
            return {
                ...state,
                fetchingJokes: true,
                jokesFetched: false
            }
        case FETCHED_JOKES:
            return {
                ...state,
                jokesFetched: true,
                fetchingJokes: false,
                jokes: action.payload
            }
        case SAVING_JOKES:
            return {
                ...state,
                savingJokes: true,
                jokesSaved: false
            }
        case SAVED_JOKES:
            return {
                ...state,
                savingJokes: false,
                jokesSaved: true,
                jokes: action.payload
            }
        case DELETING_JOKES:
            return {
                ...state,
                deletingJoke: true,
                jokeDeleted: false
            }
        case DELETED_JOKES:
            return {
                ...state,
                deletingJoke: false,
                jokeDeleted: true,
                jokes: action.payload
            }
        case UPDATING_JOKES:
            return {
                ...state,
                updatingJoke: true,
                jokeUpdated: false
            }
        case UPDATED_JOKES:
            return {
                ...state,
                updatingJoke: false,
                jokeUpdated: true,
                jokes: action.payload
            }

        default:
            return state
    }
}