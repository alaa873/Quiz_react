
import { Routes, Route, HashRouter } from "react-router-dom";

import HomePage from './Page/HomePage';
import QuizPage from './Page/QuizPage';
import Result from './Component/Quiz/Result';
function App() {
  return (
    <div className='app'  >
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/quizpage' element={<QuizPage />} />
          {/* <Route path='/result' element={<Result />} /> */}
          <Route path="*" element={<p> Not Found Page </p>} />
        </Routes>
      </HashRouter>


    </div>
  );
}

export default App;
