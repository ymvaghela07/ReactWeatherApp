import "./forecast.styles.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const daysArray = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay(); // getting present day in the week
  const forecastDays = daysArray
    .slice(dayInWeek, daysArray.length)
    .concat(daysArray.slice(0, dayInWeek)); // getting remaining days following present day in the week for forecast

  //   console.log(forecastDays);

  return (
    <div>
      <label className="title">Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, i) => {
          return (
            <AccordionItem key={i}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      className="small-icon"
                      src={`icons/${item.weather[0].icon}.png`}
                      alt="weather"
                    />
                    <label className="day">{forecastDays[i]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min)}°C /{" "}
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Feels like</label>
                    <label>{Math.round(item.main.feels_like)}°C</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Wind</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Humidity</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Pressure</label>
                    <label>{item.main.pressure} hPa</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Clouds</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Sea Level</label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Forecast;
