
import './App.css';
import Meal from './components/Meal';
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <div>
        <p>React Query </p>
        <QueryClientProvider client={queryClient}>
          <Meal />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
