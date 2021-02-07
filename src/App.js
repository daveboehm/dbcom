import logo from './logo.svg';
import './App.css';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DBCOM</h1>
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
