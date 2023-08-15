/* eslint-disable no-prototype-builtins */
import Navigo from "navigo";
import { capitalize } from "lodash";
import { Nav, Main, Footer } from "./components";
import * as store from "./store";
import axios from "axios";

const router = new Navigo("/");
let calendar;

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
      ${Nav(store.Links)}
      ${Main(state)}
      ${Footer()}
    `;

  afterRender(state);
  router.updatePageLinks();
}

function handleEventDragResize(info) {
  const event = info.event;

  if (confirm("Are you sure about this change?")) {
    const requestData = {
      title: event.title,
      start: event.start.toJSON(),
      end: event.end.toJSON(),
      url: event.url
    };

    axios
      .put(`${process.env.ROOTINE_API}/appointments/${event.id}`, requestData)
      .then(response => {
        console.log(
          `Event '${response.data.title}' (${response.data._id}) has been updated.`
        );
      })
      .catch(error => {
        info.revert();
        console.log("It puked", error);
      });
  } else {
    info.revert();
  }
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars-staggered").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("hidden--mobile");
  });

  if (state.view === "Home" && state.appointments) {
    const calendarEl = document.getElementById("calendar");
    calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "timeGridWeek",
      headerToolbar: {
        left: "prev,next,today",
        center: "title",
        right: "timeGridWeek,timeGridDay"
      },
      buttonText: {
        today: "Today",
        month: "Month",
        week: "Week",
        day: "Day",
        list: "List"
      },
      height: "100%",
      dayMaxEventRows: true,
      navLinks: true,
      editable: true,
      selectable: true,
      eventClick: function(info) {
        // change the border color just for fun
        info.el.style.borderColor = "red";
      },
      eventDrop: function(info) {
        handleEventDragResize(info);
      },
      eventResize: function(info) {
        handleEventDragResize(info);
      },
      select: info => {
        const title = prompt("Please enter a title");

        if (title) {
          const requestData = {
            title: title,
            start: info.start.toJSON(),
            end: info.end.toJSON(),
            allDay: info.view.type === "dayGridMonth"
          };

          axios
            .post(`${process.env.ROOTINE_API}/appointments`, requestData)
            .then(response => {
              // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
              response.data.title = response.data.title;
              response.data.url = `/appointments/${response.data._id}`;
              console.log("response.data:", response.data);
              store.Home.appointments.push(response.data);
              console.log(
                `Event '${response.data.title}' (${response.data._id}) has been created.`
              );
              calendar.addEvent(response.data);
              calendar.unselect();
            })
            .catch(error => {
              console.log("It puked", error);
            });
        } else {
          calendar.unselect();
        }
      },
      events: state.appointments || []
    });
    calendar.render();
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    let id = "";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        if (id === "") {
          axios
            .get(`${process.env.ROOTINE_API}/appointments`)
            .then(response => {
              console.log("response: ", response);
              const events = response.data.map(event => {
                return {
                  title: event.title,
                  start: new Date(event.start),
                  end: new Date(event.end),
                  allDay: event.allDay || false
                };
              });
              store.Home.event = null;
              store.Home.appointments = events;
              done();
            })
            .catch(err => {
              console.log("No worky: ", err);
            });
        } else {
          axios
            .get(`${process.env.ROOTINE_API}/appointments/${id}`)
            .then(response => {
              store.Home.appointments = null;
              store.Home.event = {
                id: response.data._id,
                title: response.data.title,
                start: new Date(response.data.start),
                end: new Date(response.data.end)
              };
              done();
            })
            .catch(error => {
              console.log("No worky: ", error);
            });
        }
        break;
      case "Routines":
        axios
          .get(`${process.env.ROOTINE_API}/routines`)
          .then(response => {
            console.log("response: ", response);
            store.Routines.routines = response.data;
            done();
          })
          .catch(err => {
            console.log(err);
          });
        break;
      case "Rewards":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=elko`
          )
          .then(response => {
            // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            // Create an object to be stored in the Home state from the response
            store.Rewards.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              minTemp: kelvinToFahrenheit(response.data.main.temp_min),
              maxTemp: kelvinToFahrenheit(response.data.main.temp_max),
              description: response.data.weather[0].main,
              icon: response.data.weather[0].icon
            };
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(store.Home),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (store.hasOwnProperty(view)) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
