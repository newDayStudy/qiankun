import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
// import {ConfigProvider} from 'antd'
import 'antd/dist/antd.min.css';
let root = null;
function render(props) {
  const { container } = props;
  root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.querySelector('#root'))
  root.render(
    // <ConfigProvider prefixCls='yourPrefixR'>
      <React.StrictMode>
        <HashRouter basename='/microApp/react'>
          <App />
        </HashRouter>
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