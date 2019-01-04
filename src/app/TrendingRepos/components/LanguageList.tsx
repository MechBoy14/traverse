import { theme } from '@/infrastructure/styles/theme';
import * as React from 'react';
import styled from 'styled-components';

import { UnstyledList } from '@/app/elements/base';
import { LanguageDetail } from '@/app/TrendingRepos/components/LanguageDetail';
import { ListType } from '@/app/TrendingRepos/components/LanguageListPicker';

export interface ILanguage {
  title: string;
  value: string;
}

interface Props {
  allLanguageList: ILanguage[];
  popularLanguageList: ILanguage[];
  selectedLanguage: ILanguage;
  languageListType: ListType;
  handleSetLanguage: (language: ILanguage) => void;
}

const List = styled(UnstyledList)`
`;

export class LanguageList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleSetLanguage = this.handleSetLanguage.bind(this);
  }

  handleSetLanguage(language: ILanguage) {
    this.props.handleSetLanguage(language);
  }

  get languageList() {
    let languageList = this.props.popularLanguageList;

    if (this.props.languageListType === 'all') {
      languageList = this.props.allLanguageList;
    }

    return languageList.map((language: ILanguage, idx) => {
      const isSelected = this.props.selectedLanguage.value === language.value;
      return <LanguageDetail key={idx}
                             isSelected={isSelected}
                             language={language}
                             selectLanguage={() => this.handleSetLanguage(language)}
      />;
    });
  }

  render() {
    return (
      <List id='language-list'>
        <ListTitle>{this.props.languageListType === 'all' ? 'Full' : 'Popular'} List</ListTitle>
        {this.languageList}
      </List>
    );
  }
}

const ListTitle = styled.li`
  background-color: ${theme.colors.white};
  width: 100%;
  text-align: center;
  font-size: 0.65rem;
  text-transform: uppercase;
  font-weight: 700;
  padding-top: 0.65rem;
`;