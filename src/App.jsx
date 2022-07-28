import Footer from "./components/Footer"
import Header from "./components/Header"
import Loading from "./components/messages/Loading"
import NotFound from "./components/messages/NotFound"
function App() {

  return (
    <div className='App'>
      <Header />
      <NotFound />
      <Loading />
      <Footer />
    </div>
  );
}

export default App
