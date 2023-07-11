import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx'
import Content from './components/Contents.jsx'
const App = () => {
  const documentTitle = 'Welcome to Assignment 6';
  return (
    <div>
      <Header docTitle = {documentTitle}></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
};

export default App;