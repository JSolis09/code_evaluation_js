import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevicesByCompany } from './redux/appReducer';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const { companyName, loading, companyId, devices } = useSelector((state) => state.app);
  useEffect(() => {
    if (companyId && dispatch) {
      dispatch(fetchDevicesByCompany(companyId));
    }
  }, [companyId, dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        {loading ? <span>Fetching devices....</span> : null}
        <h3>{companyName}</h3>
        <ul className="App-devices">
          {devices?.map(({ name, dwellingName, id, dwellingId }) => (
            <li key={`${id}-${dwellingId}`} className="text">{name} - {dwellingName}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
