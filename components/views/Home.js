import html from "html-literal";

export default state => html`
  <section>
    <!-- Jumbotron banner -->
    <div class="jumbotron jumbo-content">
      <h1 class="greeting">
        ${state.jumbotron}
      </h1>
    </div>

    <!-- Routine div's -->
    <div class="home-routine">
      <div class="routine-div morning sun">
        <div class="routine-div-label">Morning Routine</div>
        <div className="routine-buttons">
          <a href="./Routines">
            <input type="button" value="Start" />
          </a>
          <a href="./Routines">
            <input type="button" value="Edit" />
          </a>
        </div>
      </div>
      <div class="routine-div evening moon">
        <div class="routine-div-label">Evening Routine</div>
        <div className="routine-buttons">
          <a href="./Routines">
            <input type="button" value="Start" />
          </a>
          <a href="./Routines">
            <input type="button" value="Edit" />
          </a>
        </div>
      </div>
      <div class="routine-div">
        <a href="./Routines">
          <input type="button" value="Add Routine" />
        </a>
      </div>
    </div>

    <!-- Calendar div -->
    ${state.appointments
      ? `<div class="calendar-container">
    <div id="calendar"></div>
  </div>`
      : ""}
    ${state.event
      ? `<div class="appointment-container">
    <h3>${state.event.title}</h3>
    <div>
      <em>Start: </em><span>${state.event.start.toLocaleString("en-US", {
        timeZone: "PST"
      })}</span>
    </div>
    <div>
      <em>End: </em><span>${state.event.end.toLocaleString("en-US", {
        timeZone: "PST"
      })}</span>
    </div>
    <button id="delete-appointment" data-id="${
      state.event.id
    }">Delete Appointment</button>
  </div>`
      : ""}
  </section>
`;
