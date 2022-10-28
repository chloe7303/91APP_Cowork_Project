import { Outlet } from 'react-router-dom';
import Header from './pages/activity/sharedComponents/Header';
function Activity() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Activity;
