import React from 'react'
import './Form2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

export default function Box1() {
  return (
    <div className="box1">
            <span className="pad style11"> Basic Table</span><br/>
            <span className="pad"> use class <span className='style22'>table</span> inside table element</span>
            <br/><hr/>
            <center>
            <table className='style33' >
              <tr className='style44'>
                <th>#</th>
                <th> FIRT NAME</th>
                <th> LAST NAME</th>
                <th> USERNAME</th>
              </tr>
              <tr className='style55'>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr className='style55'>
                <td>2</td>
                <td>Jacob</td>
                <td>Thomton</td>
                <td>@fat</td>
              </tr>
              <tr className='style77'>
                <td>3</td>
                <td>larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </table>
          </center>
          </div>
  );
}

