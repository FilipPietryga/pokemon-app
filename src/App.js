import 'airbnb-browser-shims';
import './styles/css/App.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './redux/slice';

import List from "./components/List";

const store = configureStore({
  reducer: reducer
}) 

//sprawdz jak to sie teraz robi z nowym reduxem
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <List/>
      </div>
    </Provider>
  )
}

export default App;
