import html from "html-literal";

export default state => html`
  <section>
    <div class="jumbotron jumbo-content">
      <h1>${state.jumbotron}</h1>
    </div>
    <div class="reward-page-container">
      <div class="reward-container">
        <div class="baseComp">
          <button id="add-reward">+</button>
          <h4>All Rewards</h4>
          <br />
          <hr />
          <br />
          <ul>
            ${state.rewards.map(reward => {
              return html`
                <li class="reward-list">
                  <input type="checkbox" />
                  <strong class="reward-task">${reward.reward}</strong
                  ><span class="point">${reward.pointCost} pts</span>
                </li>
              `;
            })}
          </ul>
        </div>
      </div>
      <div class="weather-div">
        <div class="weather-details">
          <ul>
            <li class="weather-text" id="city">
              ${state.weather.city}
              <span class="weather-output">
                <img
                  src="http://openweathermap.org/img/wn/${
                    state.weather.icon
                  }.png"
                  alt="weather icon"
              /></span>
            </li class="weather-text">
            <li class="weather-text" id="weather-description"><h3>Current weather: ${
              state.weather.description
            }</h3></li>
            <li class="weather-text">
              Temperature:
              <span class="weather-output">${state.weather.temp}&deg; F</span>
            </li>
            <li class="weather-text">
              Feels Like:
              <span class="weather-output"
                >${state.weather.feelsLike}&deg; F</span
              >
            </li>
            <li class="weather-text">
              Low:
              <span class="weather-output">${
                state.weather.minTemp
              }&deg; F</span>
            </li>
            <li class="weather-text">
              High:
              <span class="weather-output">${
                state.weather.maxTemp
              }&deg; F</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
`;

// city: response.data.name,
// temp: kelvinToFahrenheit(response.data.main.temp),
// feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
// minTemp: response.data.main.temp_min,
// maxTemp: response.data.main.temp_max,
// description: response.data.weather[0].main,
// icon: response.data.weather[0].icon
