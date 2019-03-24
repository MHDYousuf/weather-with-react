import React, { Component } from 'react';


//function with argument props is used because only one param is required in entire function and not used return method is also because of that.

const Weather = props => (
  <div>
        {
          props.city && props.country && <p>Location: {props.city},{props.country}</p>
          }
        {
          props.temperature && <p>Temperature: {props.temperature}</p>
        }
        {
          props.humidity && <p>Humidity:{props.humidity}</p>

        }
        {
          props.description && <p>Condition: {props.description}</p>

        }
        {
          props.error && <p>{props.error}</p>
        }
      </div>
);
export default Weather;
