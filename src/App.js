
import './App.css';
import HooksEffect from './Components/HooksEffect';
import HooksMemo from './Components/HooksMemo';
import HooksReducer from './Components/HooksReducer';
import HooksState from './Components/HooksState';

function App() {
  return (
    <div className="App">
    <h2>1. Difference between Axios and fetch.
</h2>

<table class="table table-hover">
  <thead>
    <tr className="table-info">
      <th scope="col">#</th>
      <th scope="col">Axios</th>
      <th scope="col">Fetch</th>
    </tr>
  </thead>
  <tbody className="table-info">
    <tr>
      <th scope="row">1</th>
      <td>Axios has url in request object.</td>
      <td>Fetch has no url in request object.</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Axios is a stand-alone third party package that can be easily installed.</td>
      <td>Fetch is built into most modern browsers; no installation is required as such.</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Axios enjoys built-in XSRF protection.</td>
      <td>Fetch does not.</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Axios uses the data property.</td>
      <td>Fetch uses the body property.</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Axios’ data contains the object.</td>
      <td>Fetch’s body has to be stcingified.</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Axios request is ok when status is 200 and statusText is ‘OK’.</td>
      <td>Fetch request is ok when response object contains the ok property.</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Axios performs automatic tcansforms of JSON data.</td>
      <td>Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.</td>
 
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Axios allows cancelling request and request timeout.</td>
      <td>Fetch does not.</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>Axios has the ability to intercept HTTP requests.</td>
      <td>Fetch, by default, doesn’t provide a way to intercept requests.</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>Axios has built-in support for download progress.</td>
      <td>Fetch does not support upload progress.</td>
    </tr>
    
  </tbody>
</table>
<HooksEffect/>
<HooksMemo/>
<HooksReducer/>
<HooksState/>
    </div>
  );
}

export default App;
