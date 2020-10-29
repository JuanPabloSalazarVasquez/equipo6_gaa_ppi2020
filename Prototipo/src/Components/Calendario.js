import React, { Fragment } from 'react';
import useCalendar from '../hooks/useCalendar';
import { Link, withRouter} from "react-router-dom";

import "../Styles/Calendario.css";
import "../Global.css";

const Calendario = (props) => {
const {history} = props
  const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = useCalendar();

  const dateClickHandler = date => {
    console.log(date);
  }

  return(
    <Fragment>
      <p>Selected Month: {`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
      <table className="table">
        <thead>
          <tr>
            {daysShort.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            Object.values(calendarRows).map(cols => {
              return <tr key={cols[0].date}>
                {cols.map(col => (
                  col.date === todayFormatted
                    ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>
                      {col.value}
                    </td>
                    : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                ))}
              </tr>
            })
          }
        </tbody>
      </table>

      <button className="button" onClick={getPrevMonth}>Prev</button>
      <button className="button" onClick={getNextMonth}>Next</button>
    
      <div class="container">
  <h2>Stacked form</h2>
  <form action="/Carrusel">
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
    </div>
    <div class="form-group form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember"/> Remember me
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
    
    </Fragment>
  );
}

export default withRouter(Calendario);
