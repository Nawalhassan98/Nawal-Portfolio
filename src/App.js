
import React,{Suspense} from "react"
import Home from './routes/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoadingSpinner from "./components/UI/loadingSpinner";





const Resume= React.lazy(()=> import('./routes/Resume'));
const Projects = React.lazy(()=> import('./routes/Projects'));
const Contact = React.lazy(()=>import ('./routes/Contact'));



function App() {

  const router= createBrowserRouter([
    { path: '/', element:  <Home />},
    { path: '/resume', element: <Resume/>},
    { path: '/projects', element:  <Projects />},
    { path: '/contact', element:  <Contact />},
  ]);

  return (
  <div>
  <Suspense fallback={
    <div className="centered">
    <LoadingSpinner/></div>
  }>
    <RouterProvider  router={router} />
  </Suspense>
  </div>
    
  );
}

export default App;
