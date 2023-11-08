import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'

const { Header, Content } = Layout;


function Home() {
    // editor 实例
    const [editor, setEditor] = useState(null)   // TS 语法
    // const [editor, setEditor] = useState(null)                   // JS 语法

    // 编辑器内容
    const [html, setHtml] = useState('<p>hello</p>')

    // 模拟 ajax 请求，异步设置 html
    useEffect(() => {
        setTimeout(() => {
            setHtml('<p>hello world</p>')
        }, 1500)
    }, [])

    // 工具栏配置
    const toolbarConfig = { }  // TS 语法
    // const toolbarConfig = { }                        // JS 语法

    // 编辑器配置
    const editorConfig = {    // TS 语法
        // const editorConfig = {                         // JS 语法
        placeholder: '请输入内容...',
        MENU_CONF: {
            uploadImage: {
                fieldName: 'your-fileName',
                base64LimitSize: 10 * 1024 * 1024 // 10M 以下插入 base64
            }
        }
    }

    // 及时销毁 editor ，重要！
    useEffect(() => {
        if (editor) {
            console.log(editor.getConfig())
        }
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])
  return (
    <Layout className='home'>
      <Content>
          <div style={{ border: '1px solid #ccc', zIndex: 100}}>
              <Toolbar
                  editor={editor}
                  defaultConfig={toolbarConfig}
                  mode="default"
                  style={{ borderBottom: '1px solid #ccc' }}
              />
              <Editor
                  defaultConfig={editorConfig}
                  value={html}
                  onCreated={setEditor}
                  onChange={editor => setHtml(editor.getHtml())}
                  mode="default"
                  style={{ height: '500px', overflowY: 'hidden' }}
              />
          </div>
          <div style={{ marginTop: '15px', wordBreak: 'break-all' }}>
              {html}
          </div>
      </Content>
    </Layout>
  )
}
function About() {
  return (
    <Layout>
        <Content>
            About 页面
        </Content>
    </Layout>
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
