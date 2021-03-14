import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import bg1 from './assets/pokemonBg.jpg';

const App = () => {
  return (
  <>
    <Header 
      title = "This is title"
    />
    <Layout 
      title = "Первый блок"
      urlBg = {bg1}
    >
    <p>Первый заголовок</p>
    </Layout>
    <Layout 
      title = "Второй блок"
      colorBg = "red"
    >
    <p>Второй заголовок</p>
    </Layout>
    <Layout 
      title = "Третий блок"
      urlBg = {bg1}
    >
    <p>Третий заголовок</p>
    </Layout>
    <Footer />
  </>
  )
}

export default App;
