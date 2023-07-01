import './App.css';
import { Fragment } from 'react';
import { DashboardLayout} from './layouts/dashboardLayout/DashboardLayout';
// import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      {/* <Router> */}
        <DashboardLayout />

      {/* </Router> */}
    </Fragment>
  );
}

export default App;
