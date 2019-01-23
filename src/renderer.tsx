import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'reflect-metadata';

import { composeEnhancers } from '@/environment';
import { openLinkExternally } from '@/main/OpenLinkExternally';
import App from '@/renderer/App';
import { FlashMessages } from '@/renderer/app/FlashMessage/FlashMessages';
import { rootReducer } from '@/renderer/store/RootReducer';
import rootSaga from '@/renderer/store/Saga';
import { loadStateFromElectronSettings, saveStateToElectronSettings } from '@/renderer/store/StateToLocalStorage';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  {
    ...loadStateFromElectronSettings(),
  },
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

store.subscribe(() => {
  saveStateToElectronSettings({
    trending: store.getState().trending,
    stargazer: store.getState().stargazer,
    settings: store.getState().settings,
  });
});

sagaMiddleware.run(rootSaga);

document.addEventListener('click', openLinkExternally, false);

export default ReactDOM.render(
  <Provider store={store}>
    <>
      <FlashMessages/>
      <App/>
    </>
  </Provider>,
  document.getElementById('app-root'),
);
