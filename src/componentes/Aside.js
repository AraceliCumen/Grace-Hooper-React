import React, { Component } from 'react';
import Hooper from './assets/img/graceHopper.jpg';
import FlagUE from './assets/img/bUE.png';
import FlagSN from './assets/img/bSN.png';
import star from './assets/img/star.png';
// importando css del componenete
import '../App.css';

// Notas:
// no permite comentarios dentro del componente
// las etiquetas deben cerrarse incluso hr

class Aside extends Component {
  render() {
    return (
      <aside className="summary">
        <table className="summary-table">
          <thead>
            <tr>
              <th colSpan={2}>Grace Murray Hopper</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>
                <img src={Hooper} alt="graceHopper" />
                <p>Rear Admiral Grace M. Hopper, 1984</p>
                <hr />
              </td>
            </tr>
            <tr>
              <th>Nickname(s)</th>
              <td>"Amazing Grace"</td>
            </tr>
            <tr>
              <th>Born</th>
              <td>
                "December 9, 1906 New York City, New York, U.S.
          </td>
            </tr>
            <tr>
              <th>Died</th>
              <td>
                January 1, 1992 (aged 85)
            <a href="https://en.wikipedia.org/wiki/Arlington,_Virginia" target="blank">Arlington, Virginia</a>, U.S.
          </td>
            </tr>
            <tr>
              <th>Place of burial</th>
              <td>
                <a href="https://en.wikipedia.org/wiki/Arlington_National_Cemetery" target="blank">Arlington National Cemetery</a>
              </td>
            </tr>
            <tr>
              <th>Allegiance</th>
              <td>
                <img src={FlagUE} alt="Bandera Estados Unidos" />United States of America</td>
            </tr>
            <tr>
              <th>Service/branch</th>
              <td>
                <img src={FlagSN} alt />
                <a href="https://en.wikipedia.org/wiki/United_States_Navy" target="blank">United States Navy</a>
              </td>
            </tr>
            <tr>
              <th>Years of service</th>
              <td>1943–1966, 1967–1971, 1972–1986</td>
            </tr>
            <tr>
              <th>Rank</th>
              <td>
                <img src={star} alt="star" />
                <a href="https://en.wikipedia.org/wiki/Rear_admiral_(United_States)" target="blank">Rear admiral </a> (lower half)</td>
            </tr>
          </tbody>
        </table>
      </aside>
    );
  }
}
export default Aside;
