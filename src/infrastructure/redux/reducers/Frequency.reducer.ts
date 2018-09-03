import { FrequencyType } from '../../../models/Frequency.type';
import { SET_FREQUENCY } from '../actions/setFrequency.action';

const INITIAL_STATE: FrequencyType = 'weekly';

export const frequencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FREQUENCY:
      return action.payload;
    default:
      return state;
  }
};