// eslint-disable-next-line
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Error404 from './screens/Error404';
import Home from './screens/Home';
import Playground from './screens/Playground';
import { GlobalStyle } from './style/global';

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
