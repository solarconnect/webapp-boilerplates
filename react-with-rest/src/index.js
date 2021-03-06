import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import global style
import '@/styles/root.scss';


// locale을 설정합니다.
import koKR from 'antd/es/locale/ko_KR';
import moment from 'moment';
import * as serviceWorker from '@/serviceWorker';
import 'moment/locale/ko';


// default Route
import { AuthRoute } from '@/router';
import { Login } from '@/pages';

// store
import createAppStore from '@/store';
import rootSagas from '@/sagas';

import App from './App';

moment.locale('ko');

// Provider 정의
// ConfigProvider = https://ant.design/components/config-provider/

const store = createAppStore()
store.runSaga(rootSagas)

const Root = () => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={koKR}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <AuthRoute path="*">
              <App />
            </AuthRoute>
          </Switch>
        </Router>
      </ConfigProvider>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
