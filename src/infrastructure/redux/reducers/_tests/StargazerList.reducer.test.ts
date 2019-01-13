import { assert } from 'chai';

import { stargazerListReducer } from '@/infrastructure/redux/reducers/StargazerList.reducer';
import { UserEntity } from '@/models/User.entity';
import { AddUserToStargazerListAction } from 'AddUserToStargazerListAction.ts';

describe('RepositoryList Reducer', () => {
  test('INITIAL_STATE for repository list is blank', () => {
    const action = { type: undefined };
    const initialState = {};
    assert.deepStrictEqual(stargazerListReducer(undefined, action), initialState);
  });

  test('ADD_USER_TO_STARGAZER_LIST updates the stargazer list reducer properly', () => {
    const data = require('@/infrastructure/rest/_tests/responses/user-detail-success.json');
    const list = UserEntity.fromResponse(data);
    const action = AddUserToStargazerListAction(list);

    const stargazerList = stargazerListReducer(undefined, action);

    assert.strictEqual(Object.values(stargazerList)[0].id, 5787967);
    assert.strictEqual(Object.values(stargazerList)[0].attributes.name, 'Jason Raimondi');
  });
});
