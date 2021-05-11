import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Overview, { OverviewRevenue, OverviewUsers } from './pages/Overview';
import Reports, { ReportOne, ReportThree, ReportTwo } from './pages/Reports';
import Products from './pages/Products';
import Team from './pages/Team';
import Messages, { MessageOne, MessageTwo, MessageThree} from './pages/Messages';
import Support from './pages/Support';


function App() {
  return (
    <Router>
      <Sidebar />


      <Switch>
      <Route path='/overview' exact component={Overview}/>
      <Route path='/overview/users' exact component={OverviewUsers}/>
      <Route path='/overview/revenue' exact component={OverviewRevenue}/>
      <Route path='/reports' exact component={Reports}/>
      <Route path='/reports/report1' exact component={ReportOne}/>
      <Route path='/reports/report2' exact component={ReportTwo}/>
      <Route path='/reports/report3' exact component={ReportThree}/>
      <Route path='/products' exact component={Products}/>
      <Route path='/team' exact component={Team}/>
      <Route path='/messages' exact component={Messages}/>
      <Route path='/messages/message1' exact component={MessageOne}/>
      <Route path='/messages/message2' exact component={MessageTwo}/>
      <Route path='/messages/message3' exact component={MessageThree}/>
      <Route path='/support' exact component={Support}/>
      </Switch>
    </Router>
  );
}

export default App;
