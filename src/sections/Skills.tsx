const skillList = [
  { name: 'Photoshop', percent: 100 },
  { name: 'jQuery', percent: 100 },
  { name: 'HTML5', percent: 100 },
  { name: 'CSS3', percent: 100 },
  { name: 'WordPress', percent: 100 },
  { name: 'SEO', percent: 100 },
]

const Skills = () => {
  return (
    <section className="ftco-section" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center">
            <h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">My Skills</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row">
          {skillList.map((skill, index) => (
            <div className="col-md-6 animate-box" key={index}>
              <div className="progress-wrap">
                <h3>{skill.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-1"
                    role="progressbar"
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: `${skill.percent}%` }}
                  >
                    <span>{skill.percent}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
