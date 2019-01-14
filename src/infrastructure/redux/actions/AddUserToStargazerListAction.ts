import { flashMessage } from '@/infrastructure/FlashMessage';
import { IActionResponse } from '@/infrastructure/redux/ActionResponse';
import { UserEntity } from '@/models/User.entity';

export const ADD_USER_TO_STARGAZER_LIST = '[CURRENT_STARGAZER LIST] add user';
export const ADD_USER_TO_STARGAZER_LIST_SUCCESS = '[CURRENT_STARGAZER LIST] add user success';
export const ADD_USER_TO_STARGAZER_LIST_FAILURE = '[CURRENT_STARGAZER LIST] add user failure';

export type AddUserToStargazerListActionType =
  (username: string) => IActionResponse<string>;

export const AddUserToStargazerListAction: AddUserToStargazerListActionType = (user) => {
  return {
    type: ADD_USER_TO_STARGAZER_LIST,
    payload: user,
  };
};

export const AddUserToStargazerListSuccessAction = (user: UserEntity) => {
  flashMessage.success('User Added');
  return {
    type: ADD_USER_TO_STARGAZER_LIST_SUCCESS,
    payload: user,
  };
};

export const AddUserToStargazerListFailureAction = (message: string) => {
  flashMessage.error(message);
  return {
    type: ADD_USER_TO_STARGAZER_LIST_FAILURE,
    payload: message,
  };
};