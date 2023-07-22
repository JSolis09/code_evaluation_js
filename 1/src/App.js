import React, { useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { updateCompanyById } from './services.js/companyService';


function App() {
  const companyId = useSelector((state) => state.app.user?.companyId);

  useEffect(() => {
    if (companyId) {
      updateCompanyById(companyId)
        .then((res) => {
          console.log(`state: ${res?.state}`);
        })
        .catch((e) => {
          console.log("Something went worng...");
        });
    }
  }, [companyId]);

  return (
    <div className="App">
      <header className="App-header">
        Excercise - 1
      </header>
    </div>
  );
}

export default App;
