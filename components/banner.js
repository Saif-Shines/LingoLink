class Banner extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = document.querySelector(".banner");
    const content = template.content.cloneNode(true);
    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("href", "/components/Banner.css");
    this.root.appendChild(linkElement);
    this.root.appendChild(content);
    this.render();
  }

  render() {}
}

customElements.define("app-banner", Banner);

export default Banner;
