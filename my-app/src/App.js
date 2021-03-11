import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import bg1 from './assets/pokemonBg.jpg';

const App = () => {
  return (
  <>
    <Header 
      title = "This is title"
      descr = "This is Description!"
    />
    <Layout 
      title = "Первый блок"
      descr = "Описание"
      urlBg = {bg1}
    />
    <Layout 
      title = "Второй блок"
      descr = "Описание"
      colorBg = "red"
    />
    <Layout 
      title = "Третий блок"
      descr = "Описание"
      urlBg = {bg1}
    />
    <Footer />
  </>
  )
}

export default App;
