import initialState from './initialState.json';
import * as skillsAction from '../actions/actions';

const skillsReducer = (state=initialState.experience,action) => {
    switch(action.type){
        case skillsAction.SET_SKILLS : 
            return {...action.payload}
        case skillsAction.UPDATE_SKILLS : 
            return {...action.payload}
        default : return state
    }
}

export default skillsReducer