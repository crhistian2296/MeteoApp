import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import { store } from './store/store';

function App() {
  return (
    <div className='d-flex flex-column'>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
