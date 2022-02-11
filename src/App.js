import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CommonCard from './components/CommonCard';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(actionsUser.checkAuthStart());
  }, []);

  return (
    <CommonCard />
  );
}

export default App;
