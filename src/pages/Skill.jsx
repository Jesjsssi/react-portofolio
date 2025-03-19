const Skill = () => {
    return (
        <section id="skills">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-container">
                <div className="skill-card">
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>REST APIs</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <h3>Tools</h3>
                    <ul>
                        <li>Git</li>
                        <li>VS Code</li>
                        <li>Figma</li>
                        <li>npm/yarn</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default Skill;