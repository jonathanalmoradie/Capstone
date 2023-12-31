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
        <br />
        <div className="routine-buttons">
          <a href="./Morning">
            <button id="start-morning-routine">Start</button>
          </a>
          <p id="circle-sun"></p>
        </div>
      </div>
      <div class="routine-div evening moon">
        <div class="routine-div-label">Evening Routine</div>
        <br />
        <div className="routine-buttons">
          <a href="./Evening">
            <button id="start-evening-routine">Start</button>
          </a>
          <p id="circle-moon"></p>
        </div>
      </div>
    </div>

    <div class="calendar-div">
      <!-- Calendar div -->
      ${state.appointments
        ? html`
            <div class="calendar-container">
              <div id="calendar"></div>
            </div>
          `
        : ""}
      ${state.event
        ? html`
            <div class="appointment-container">
              <h3>${state.event.title}</h3>
              <div>
                <em>Start: </em
                ><span
                  >${state.event.start.toLocaleString("en-US", {
                    timeZone: "PST"
                  })}</span
                >
              </div>
              <div>
                <em>End: </em
                ><span
                  >${state.event.end.toLocaleString("en-US", {
                    timeZone: "PST"
                  })}</span
                >
              </div>
              <button id="delete-appointment" data-id="${state.event.id}">
                Delete Appointment
              </button>
            </div>
          `
        : ""}
    </div>
  </section>
`;
