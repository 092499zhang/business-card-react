import "./App.css";

function App() {
  return (
    <>
      <main>
        <section className="hero">
          <img src="./src/assets/shuzhang.png" alt="my profile picture" />
        </section>
        <h1>Shu Zhang</h1>
        <h2>Frontend Developer</h2>
        <a
          href="https://shuzhang.website"
          target="_blank"
          rel="noopener noreferrer"
          className="web-link"
        >
          shuzhang.website
        </a>
        <section className="button">
        <a href="mailto:sz2263@bath.ac.uk" className="email">
          <img src="./src/assets/Mail.svg" alt="email icon" />
          <span>Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/shu-zhang-9b8b1a1b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <img src='./src/assets/linkedin.svg' alt='linkedin logo'/>
          <span>LinkedIn</span>
        </a>
        </section>
        
        <section className="content">
<h3>About</h3>
        <p>
          I’m a Programme Administrator with a growing background in frontend
          development and digital process improvement. I currently work at the
          University of Bath, where I support programme operations and create
          automation tools that help reduce repetitive admin tasks. Outside of
          work, I’m developing my frontend skills with HTML, CSS and JavaScript
          and building personal projects to strengthen my practical experience.
          I enjoy turning ideas into simple, user-friendly solutions and I’m
          especially interested in combining design, coding and automation to
          improve everyday workflows.
        </p>
        <h3>Interests</h3>
        <p>
          Frontend Development • JavaScript • Process Automation • UX Design •
          Web Accessibility • SharePoint • Problem Solving • Digital Tools •
          Learning New Tech
        </p>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
