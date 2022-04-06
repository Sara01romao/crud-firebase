
import './styles.css';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import RoutesApp from '../routes';

function App() {



  return (
    <div className="App">
    <RoutesApp/>
      
     <ToastContainer autoClose={1000}/>
    </div>
  );
}

export default App;
