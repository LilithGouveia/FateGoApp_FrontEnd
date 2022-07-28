import Header from "./components/Header"
import Loading from "./components/messages/Loading"
import NotFound from "./components/messages/NotFound"
function App() {

  return (
    <div className="App">
      <Header />
      <NotFound />
      <Loading />
    </div>
  )
}

export default App
