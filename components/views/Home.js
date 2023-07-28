import html from "html-literal";

export default (state, links) => html`
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
    <div class="calendar">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=1fe9c3e5762ab6b05178cbc6a1be3c31725a655fd06bd6993b89005d9fda325c%40group.calendar.google.com&ctz=America%2FLos_Angeles"
        style="border: 0"
        width="1000"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </section>
`;
