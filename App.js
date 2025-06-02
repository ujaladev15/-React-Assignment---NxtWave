// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
        
       
//           Learn React
        
//       </header>
//     </div>
//   );
// }

// export default App;


// import './App.css';
// import React from 'react';
// import ListsPage from './components/ListsPage';

// const App = () => <ListsPage />;

// export default App;









import './App.css';
import React from 'react';
import ListsPage from './components/ListsPage';

const App = () => (
  <div>
    <h1 style={{ fontWeight: 'bold', textAlign: 'center', margin: '20px 0' }}>
      List creation
    </h1>
    <ListsPage />
  </div>
);

export default App;
