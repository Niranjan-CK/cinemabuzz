import './App.css';
import {Header , Card , Footer} from './components';
import { AllRoutes } from "./routes/AllRoutes";


function App() {
  return (
    <>
    <Header />
    <main>
      <Card/>
      <AllRoutes/>
    </main>
    <Footer/>


    </>
  );
}

export default App;
