import html from "html-literal";

export default state => html`
  <section>
    <div class="jumbotron jumbo-content">
      <h1>${state.jumbotron}</h1>
    </div>
    <div class="routine-container routine-page">
      <div class="home-routine routine-view">
        <div class="routine-div morning">
          <div class="routine-div-label">Morning Routine</div>
          <br />
          <div className="routine-buttons">
            <a href="./Morning">
              <button id="start-morning-routine">Start</button>
            </a>
          </div>
        </div>
        <div class="routine-div evening">
          <div class="routine-div-label">Evening Routine</div>
          <br />
          <div className="routine-buttons">
            <a href="./Evening">
              <button id="start-evening-routine">Start</button>
            </a>
          </div>
        </div>
      </div>

      <div class="baseComp">
        <button id="add-routine">+</button>
        <h4>All Tasks</h4>
        <br />
        <hr />
        <br />
        <ul>
          ${state.routines.map(routine => {
            return html`
              <li class="routine-list">
                <!-- <input type="checkbox" /> -->
                <strong class="routine-task">${routine.task}</strong
                ><span class="point">${routine.pointValue} pts</span>
                <ol class="step-list ${routine._id}">
                  ${routine.steps.map(step => {
                    return html`
                      <li class="routine-step">${step}</li>
                      <hr />
                    `;
                  })}
                </ol>
              </li>
            `;
          })}
        </ul>
      </div>
    </div>
  </section>
  ${console.log(state)};
`;
