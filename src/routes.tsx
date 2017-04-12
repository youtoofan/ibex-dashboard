import * as React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Setup from './pages/Setup';
import ConfigDashboard from './components/ConfigDashboard';

export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/dashboard/config" component={ConfigDashboard} />
    <Route path="/setup" component={Setup} />
    <Route path="*" component={NotFound} />
  </Route>
);