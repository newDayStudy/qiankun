import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
const { Header, Content } = Layout;

function Home() {
  return (
    <Layout className='home'>
      <Content>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </Content>
    </Layout>
  )
}
function About() {
  return (
    // <Layout>about</Layout>
    <iframe src='http://localhost:8080' className='iframe' border='no' style={{width: '100%', height: 700}}></iframe>
  )
}
function App() {
  return (
    <Layout className="App">
      <Header className='App-header'>
        <Breadcrumb>
          <Breadcrumb.Item key="/home">
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item key="/about">
            <Link to="/about">About</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
