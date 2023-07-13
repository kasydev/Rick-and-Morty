import './App.css';
import Character from './component/Characters';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {

  const queryClient = new QueryClient();

  return (
    <div className="App">
      <div className="container">
        <h1> Rick and Morty</h1>
        <QueryClientProvider client={queryClient}>
          <Character />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
