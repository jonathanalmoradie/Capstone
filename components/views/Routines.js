import html from "html-literal";

export default state => html`
  <section>
    <div class="jumbotron jumbo-content">
      <h1>${state.jumbotron}</h1>
    </div>
  </section>
`;
