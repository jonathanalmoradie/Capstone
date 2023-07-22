import html from "html-literal";
import logo from "/imgs/logo.png";

export default links => html`
  <nav class="navbar">
    <div className="logo"><img src="${logo}" alt="RooTine Logo" /></div>
    <i class="fas fa-bars-staggered" style="color: #fefefe"></i>
    <ul class="hidden--mobile nav-links">
        ${links.map(link => {
          return `<li>
                    <a href="/${link.title}" title="${link.title}" data-navigo>
                      ${link.text}
                    </a>
                  </li>`;
        })};
      </div>
    </ul>
  </nav>
`;
