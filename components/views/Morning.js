import html from "html-literal";

export default state => html`
  <section>
    <div class="jumbotron jumbo-content">
      <h1>Morning Routine</h1>
    </div>
    <div class="routine-container">
      <form id="morning-form" method="POST" action="">
        <div class="baseComp">
          <button id="add-routine">+</button>
          <label for="tasks"><h4>Morning Routine</h4></label>
          <br />
          <hr />
          <br />
          <ul>
            ${state.routines.map(routine => {
              if (routine.timeOfDay === "morning") {
                if (routine.isDone === false) {
                  return html`
                    <li class="routine-list">
                      <input
                        type="checkbox"
                        id="routine_${routine._id}"
                        name="tasks"
                        value="${routine.task}"
                      />
                      <label for="task_${routine._id}"
                        ><strong class="routine-task"
                          >${routine.task}</strong
                        ></label
                      >
                      <span class="point">${routine.pointValue} pts</span>
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
                } else {
                  return html`
                    <div>Great job on completing your tasks!</div>
                  `;
                }
              }
            })}
          </ul>
          <input
            class="finish-routine"
            type="submit"
            name="submit"
            value="Finish Routine"
          />
        </div>
      </form>
    </div>
  </section>
  ${console.log(state)};
`;
