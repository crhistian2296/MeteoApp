import { Provider } from 'react-redux';
import DataProvider from './components/data/DataContext';
import AppRouter from './router/AppRouter';
import { store } from './store/store';

function App() {
  return (
    <div className='d-flex flex-column'>
      <DataProvider>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </DataProvider>
    </div>
  );
}

export default App;
