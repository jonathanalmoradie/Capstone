import html from "html-literal";

export default state => html`
  <section>
    <div class="jumbotron jumbo-content">
      <h1>Morning Routine</h1>
    </div>
    <div class="routine-container">
      <div class="baseComp">
        <button id="add-routine">+</button>
        <h4>Morning Routine</h4>
        <br />
        <hr />
        <br />
        <ul>
          ${state.routines.map(routine => {
            if (routine.timeOfDay === "morning") {
              return html`
                <li class="routine-list">
                  <input type="checkbox" />
                  <strong class="routine-task">${routine.task}</strong
                  ><span class="point">Points: ${routine.pointValue}</span>
                  <ol class="step-list hidden--step">
                    ${routine.steps.map(step => {
                      return html`
                        <li class="routine-step">${step}</li>
                        <hr />
                      `;
                    })}
                  </ol>
                </li>
              `;
            }
          })}
        </ul>
      </div>
    </div>
  </section>
  ${console.log(state)};
`;
