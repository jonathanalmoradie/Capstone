import html from "html-literal";

// const handleDelete = id => {
//   let routineID = id;
//   if (confirm("Are you sure you want to delete this task?")) {
//     return fetch(`${process.env.ROOTINE_API}/routines/${routineID}`, {
//       method: "DELETE"
//     })
//       .then(response => {
//         response.json();
//         `Event '${response.data.task}' (${response.data._id}) has been deleted.`;
//       })
//       .catch(error => console.log(error));
//   }
// };

export default state => html`
  <section>
    <div class="jumbotron jumbo-content">
      <h1>Morning Routine</h1>
    </div>
    <div class="routine-container">
        <div class="baseComp" id="morningBaseComp">
          <button class="add-routine"><i class="fa-solid fa-plus"></i></button>
          <h3 class="routine-title">Morning Routine</h3>
          <br />
          <hr />
          <br />
          <form action="" id="add-new-task" method="POST" class="no-show add-form">
            <h4>Add new task</h4>
            <div>
              <label for="task">Task:</label>
              <br>
              <input type="text" name="task" id="task" placeholder="Take a shower" required />
            </div>
            <div>
              <label for="steps">Steps:</label>
              <br>
              <textarea name="steps" id="steps" placeholder="Separate steps with commas" required></textarea>
            </div>
            <div>
              <label for="pointValue">Points:</label>
              <br>
              <input type="number" name="pointValue" id="pointValue" placeholder="10">
            </div>
            <input type="submit" name="submit" value="Submit" />
          </form>
          <ul>
            ${state.routines.map(routine => {
              if (routine.timeOfDay === "morning") {
                return html`
                  <li class="routine-list">
                    <input
                      type="checkbox"
                      name="tasks"
                      value="${routine.task}"
                    />
                    <strong class="routine-task">${routine.task}</strong>
                    <span class="point">
                      ${routine.pointValue} pts
                      <!-- <i class="fa-solid fa-pen-to-square"></i>
                      <i
                        class="fa-solid fa-trash"
                        id="${routine._id}"
                      ></i> -->
                    </span>
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
          <button id="finish-morning-routine">Submit</button>
          <br />
        </div>
      </form>
    </div>
  </section>
  ${console.log(state)};
`;
