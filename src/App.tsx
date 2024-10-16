import { FC } from 'react';
import HomePage from './components/HomePage';
import { QuestionProvider } from './context/QuestionContext';

const App: FC = () => {
  return (
    <QuestionProvider>
      <HomePage />
    </QuestionProvider>
  );
}

export default App;
