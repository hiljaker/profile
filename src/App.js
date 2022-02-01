import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div className="bg-cr h-screen">
      <Header />
      <div className="pt-20">
        <Main />
      </div>
    </div>
  );
}

export default App;