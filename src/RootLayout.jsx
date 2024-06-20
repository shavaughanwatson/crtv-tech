import { Outlet } from 'react-router-dom';

import MainHeader from './components/mainHeader';
import './RootLayout.css';

function RootLayout() {
  return (
    <>
      <MainHeader />

      <Outlet />
    </>
  );
}
export default RootLayout;
