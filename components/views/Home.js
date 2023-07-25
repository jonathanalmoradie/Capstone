import html from "html-literal";

export default state => html`
  <section>
    <!-- Jumbotron banner -->
    <div class="jumbotron home">
      <h1 class="greeting">
        ${state.jumbotron}
      </h1>
    </div>

    <!-- Routine div's -->
    <div class="home-routine">
      <div class="routine-div morning sun">
        <p class="routine-div-label">Morning Routine</p>
        <input type="button" value="Start" />
        <input type="button" value="Edit" />
      </div>
      <div class="routine-div evening moon">
        <p class="routine-div-label">Evening Routine</p>
        <input type="button" value="Start" />
        <input type="button" value="Edit" />
      </div>
      <div class="routine-div">
        <input type="button" value="Add routine" />
      </div>
    </div>

    <!-- Calendar div -->
    <div class="calendar">
      <h3>Calendar placeholder!!!</h3>
    </div>
  </section>
`;
