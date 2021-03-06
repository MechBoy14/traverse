import { flashMessage } from '@/renderer/infrastructure/services/FlashMessage';
import { ActionResponse } from '@/renderer/store/Interfaces';

export const CLEAR_GITHUB_ACCESS_TOKEN = '[GITHUB ACCESS TOKEN] Clear';

export type ClearGithubAccessTokenActionType = () => ActionResponse<string>;

export const ClearGithubAccessTokenAction: ClearGithubAccessTokenActionType = () => {
  flashMessage.success('Going... Going... Gone!');
  return {
    type: CLEAR_GITHUB_ACCESS_TOKEN,
    payload: null,
  };
};
