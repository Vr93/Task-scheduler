import React from 'react';
import Task from "./components/Task";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div>

      <div className="container">
        <div style={{paddingTop:"60px"}} className="container">
          <div classname="row">
            <div className="col">
              <Task/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
