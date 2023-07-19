import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx'
import Content from './components/Contents.jsx'
const App = () => {
  const documentTitle = 'Welcome to Assignment 7';
  return (
    <div>
      <Header docTitle = {documentTitle}></Header>
      <Content/>
      <Footer/>
    </div>
  );
};

export default App;