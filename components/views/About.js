import html from "html-literal";

export default state => html`
  <section>
    <div class="jumbotron jumbo-content">
      <h1>${state.jumbotron}</h1>
    </div>
    <div class="about-content">
      <div class="about-text">
        I have built an application that will help children with Autism, ADHD,
        or other learning differences navigate through everyday routines and
        busy schedules. For children, it will help keep them on task, increase
        their independence, and build their self-confidence as they go about
        their day. It includes routines that can be set up for morning, evening,
        or, in the future, any other routine pain points. After a specific
        routine is followed, the user will be navigated to a "Reward page". The
        user will then be able to redeem a reward of their choice. The user
        could also check the day's weather forecast on the same page to help
        influence their decision. The app also includes a weekly or daily
        overview of any events going on - similar to most calendar apps - which,
        in the future, can be connected to a family google calendar. This way,
        instead of asking their parent what is going on for the day, or what's
        next, they can just check the RooTine app.
        <br />
        <br />
        All of these resources will ideally help the end user remember what to
        do daily, what to expect throughout the day, help them become more
        independent, and maybe even mix it up here or there.
        <br />
        <br />
        In future iterations, I'd like to set up a user login which would allow
        for users to have their own clean slate. They would ideally be able to
        set up their own routines and rewards, as well as have functionality to
        utilize their reward points. In addition to user functionality, I'd like
        to implement a "Mood" feature, where once a routine is completed, a
        modal would pop up with clickable faces from sad to happy would
        populate. The user would then be able to click which face their
        currently feeling, and their choice would influence which rewards would
        populate. For example, if a user selected the sad face, rewards relating
        to comfort (warm blanket, go for a walk, etc.) would populate. Same
        would apply if a user selected a happy face.
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
