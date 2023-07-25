import html from "html-literal";

export default state => html`
  <section>
    <div class="jumbotron about">
      <h1>${state.jumbotron}</h1>
    </div>
    <div class="about-content">
      <div class="about-text">
        I have built an application that will help children with Autism, ADHD,
        or other learning differences navigate through everyday routines and
        busy schedules. For children, it will help keep them on task, increase
        their independence, and build their self-confidence as they go about
        their day. It includes routines that can be set up for morning, evening,
        or any other routine pain points. As the user gets older, they can set
        up reminders for similar tasks without the need of step-by-step
        instructions. After a specific routine is followed, the user will be
        navigated to a "Mood page". The user will then note how they are
        currently feeling - their selection will influence what will populate in
        the rewards page. Let's say the user was feeling bummed out after their
        morning routine. The rewards page would populate some "comfort" choices:
        warm blanket, cuddles, a trip to get some ice cream, etc. If they were
        in a better mood, maybe they can choose to go to the park, go for a
        walk, or play a video game. The user could also check the day's weather
        forecast on the same page to help influence their decision. The app also
        includes a weekly or daily overview of any events going on - similar to
        most calendar apps - which can be connected to a family google calendar.
        This way, instead of asking their parent what is going on for the day,
        or what's next, they can just check the RooTine app.
        <br />
        <br />
        All of these resources will ideally help the end user remember what to
        do daily, what to expect throughout the day, help them become more
        independent, and maybe even mix it up here or there.
      </div>
      <div class="about-form">
        <form action="https://formspree.io/f/moqoqppv" method="POST">
          <legend>Have a suggestion on how to improve the app?</legend>
          <label class="about-form-label">
            Your email:
            <input type="email" name="email" placeholder="john.doe@email.com" />
          </label>
          <br />
          <label class="about-form-label">
            Suggestion:
            <textarea name="message" placeholder="Your message here"></textarea>
          </label>
          <!-- your other form fields go here -->
          <input type="button" value="Send" />
        </form>
      </div>
    </div>
  </section>
`;
