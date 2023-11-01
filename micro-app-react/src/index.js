import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {ConfigProvider} from 'antd'
import 'antd/dist/antd.min.css';
let root = null;
function render(props) {
  const { container } = props;
  const basename = window.__POWERED_BY_QIANKUN__ ? '/microApp/react': '/'
  root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.querySelector('#root'))
  root.render(
    // <ConfigProvider prefixCls='yourPrefixR'>
      <React.StrictMode>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    // </ConfigProvider>

  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  root.unmount();
  root = null;
}
