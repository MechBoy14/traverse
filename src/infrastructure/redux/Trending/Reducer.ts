import {
  FETCH_TRENDING_REPOSITORY_LIST,
  FETCH_TRENDING_REPOSITORY_LIST_FAILURE,
  FETCH_TRENDING_REPOSITORY_LIST_SUCCESS,
} from '@/infrastructure/redux/Trending/actions/FetchTrendingRepositoryListAction';
import { SET_FREQUENCY } from '@/infrastructure/redux/Trending/actions/SetFrequencyAction';
import { SET_LANGUAGE } from '@/infrastructure/redux/Trending/actions/SetLanguageAction';
import { SET_LANGUAGE_LIST_TYPE } from '@/infrastructure/redux/Trending/actions/SetLanguageListTypeAction';
import { TrendingStore } from '@/infrastructure/redux/Trending/Store';

export const TRENDING_INITIAL_STATE: TrendingStore = {
  options: {
    language: {
      title: 'TypeScript',
      value: 'typescript',
    },
    frequency: 'weekly',
    list: 'popular',
  },
  loading: false,
  loaded: false,
};

export const TrendingReducer = (state = TRENDING_INITIAL_STATE, action): TrendingStore => {
  switch (action.type) {
    case SET_LANGUAGE_LIST_TYPE:
      return {
        ...state,
        options: {
          ...state.options,
          list: action.payload,
        },
      };
    case SET_LANGUAGE:
      return {
        ...state,
        options: {
          ...state.options,
          language: action.payload,
        },
      };
    case SET_FREQUENCY:
      return {
        ...state,
        options: {
          ...state.options,
          frequency: action.payload,
        },
      };
    case FETCH_TRENDING_REPOSITORY_LIST:
      return {
        ...state,
        loaded: false,
        loading: true,
      };
    case FETCH_TRENDING_REPOSITORY_LIST_SUCCESS:
      const {language, frequency, data} = action.payload;
      return {
        ...state,
        loaded: true,
        loading: false,
        list: {
          ...state.list,
          [language.value]: {
            ...(state.list ? state.list[language.value] : {}),
            [frequency]: {
              lastUpdated: Date.now(),
              list: data,
            },
          },
        },
      };
    case FETCH_TRENDING_REPOSITORY_LIST_FAILURE:
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    default:
      return state;
  }
};
