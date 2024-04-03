import "./App.css";
import CbRefsDemo from "./components/CbRefsDemo";
import ErrorBoundary from "./components/ErrorBoundary";
import FRParentInput from "./components/FRParentInput";
import FocusInput from "./components/FocusInput";
import Hero from "./components/Hero";
import Input from "./components/Input";
import ParentComp from "./components/ParentComp";
import PortalDemo from "./components/PortalDemo";
import RefsDemo from "./components/RefsDemo";
import Trial from './components/Trial';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      Hello World
      <Table/>
      <ParentComp/>
      <RefsDemo/>
      <CbRefsDemo/>
      <Input/>
      <FocusInput/>
      <FRParentInput/>
      /<Trial/>
      <PortalDemo/>
      <ErrorBoundary>
        <Hero heroName={"Batman"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Spiderman"} />
      </ErrorBoundary>
      {/* <ErrorBoundary>
        <Hero heroName={"Joker"} />
      </ErrorBoundary> */}
    </div>
  );
}

export default App;
