import * as skillsAction from './actions'

export const setSkills = (skills) => {
    return {
        type:skillsAction.SET_SKILLS,
        pay : skills
    }
}

export const updateSkills = (skills) => {
    return {
        type:skillsAction.UPDATE_SKILLS,
        payload:skills
    }
}