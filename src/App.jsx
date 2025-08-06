import React from 'react';
import AllRoutes from './routes/routes';
import DevTools from './components/DevTools';


const App = () => {
  return (
    <div>
      {/* You can include your Navbar or MegaMenu here */}
      <AllRoutes />
      <DevTools />
    </div>
  );
};

export default App;
