import { assert } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';

import { LanguageList } from '@/app/TrendingRepos/components/LanguageList';

describe('<LanguageList />', () => {
  test('loads all languages', () => {
    const ALL_LANGUAGES = require('@/infrastructure/data/all-languages.json');
    const POPULAR_LANGUAGES = require('@/infrastructure/data/popular-languages.json');
    const HANDLE_SET_LANGUAGE = jest.fn();
    const language = { value: '', title: 'All Languages'};
    const component = mount(<LanguageList
      selectedLanguageListType='all'
      selectedLanguage={language}
      allLanguageList={ALL_LANGUAGES}
      popularLanguageList={POPULAR_LANGUAGES}
      handleSetLanguage={HANDLE_SET_LANGUAGE}
    />);

    assert.lengthOf(component.find('li.language-list-item'), 304);
  });
});
