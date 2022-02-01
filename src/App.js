import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div className="">
      <Header />
      <div className="pt-20 phone:pt-14">
        <Main />
      </div>
    </div>
  );
}

export default App;