function ProjectCard ({ title, description}) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "16px", borderRadius: "8px"}}>

    <h3>{title}</h3>
    <p>{description}</p>
    </div>
   )
}

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "40px" }}>
    <h1>Jeff's Portfolio</h1>
    <p>Full stack developer in training.</p>   
    <h2>Projects</h2>
    <ProjectCard title="Portfolio Site" description="This site was built with React and Vite." />
    <ProjectCard title="Amazon Tool Suite" description="Complete suite of tools top to bottom for Amazon Sellers." />
    <ProjectCard title="Manufacturing App" description="Manufacturing app for tracking labor and BOMs." />
    </div>
        )
}

export default App