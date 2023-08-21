import html from "html-literal";
import logo from "/imgs/logo.png";

export default links => html`
  <nav class="navbar">
    <div className="logo"><a href="/Home"><img src="${logo}" alt="RooTine Logo" /></a></div>
    <i class="fas fa-bars-staggered" style="color: #fefefe"></i>
    <ul class="hidden--mobile nav-links">
        ${links.map(link => {
          if (link.title === "Routines") {
            return html`
              <li class="routine-nav">
                <a href="/${link.title}" title="${link.title}" data-navigo>
                  ${link.text}
                </a>
                <ul class="dropdown">
                  <li>
                    <a
                      href="/${link.morning}"
                      title="${link.morning} Routine"
                      data-navigo
                      >${link.morningText} Routine</a
                    >
                  </li>
                  <li>
                    <a
                      href="/${link.evening}"
                      title="${link.evening} Routine"
                      data-navigo
                      >${link.eveningText} Routine</a
                    >
                  </li>
                </ul>
              </li>
            `;
          } else {
            return html`
              <li>
                <a href="/${link.title}" title="${link.title}" data-navigo>
                  ${link.text}
                </a>
              </li>
            `;
          }
        })}
      </div>
    </ul>
  </nav>
`;
