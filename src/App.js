import Counter from './Counter'
import DataProvider from './DataProvider';

function App() {
  return (
    <DataProvider>
      <Counter />
    </DataProvider>
  );
}

export default App;
