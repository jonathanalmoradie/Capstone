import html from "html-literal";

export default state => html`
  <section>
    <div class="jumbotron mood">
      <h1>${state.jumbotron}</h1>
    </div>
    <div class="mood-form">
      <form action="">
        <div class="selector">
          <input type="radio" name="emotion-1" value="emotion-1" />
          <label class="mood-label emotion-1" for="emotion-1"></label>
          <input type="radio" name="emotion-2" value="emotion-2" />
          <label class="mood-label emotion-2" for="emotion-2"></label>
          <input type="radio" name="emotion-3" value="emotion-3" />
          <label class="mood-label emotion-3" for="emotion-3"></label>
          <input type="radio" name="emotion-4" value="emotion-4" />
          <label class="mood-label emotion-4" for="emotion-4"></label>
          <input type="radio" name="emotion-5" value="emotion-5" />
          <label class="mood-label emotion-5" for="emotion-5"></label>
        </div>
      </form>
    </div>
  </section>
`;
