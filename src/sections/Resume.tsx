const resumeList = [
  {
    date: '2014-2015',
    role: 'Master Degree of Design',
    position: '',
    description: '',
  },
  {
    date: '2014-2015',
    role: `Bachelor's Degree of C.A`,
    position: '',
    description: '',
  },
  {
    date: '2014-2015',
    role: 'Diploma in Computer',
    position: '',
    description: '',
  },
  {
    date: '2014-2015',
    role: 'Art &amp; Creative Director',
    position: '',
    description: '',
  },
  {
    date: '2014-2015',
    role: 'Wordpress Developer',
    position: '',
    description: '',
  },
  { date: '2014-2015', role: 'UI/UX Designer', position: '', description: '' },
]

const Resume = () => {
  return (
    <section className="ftco-section ftco-no-pb" id="resume-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center">
            <h1 className="big big-2">Resume</h1>
            <h2 className="mb-4">Resume</h2>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </div>
        <div className="row">
          {resumeList.map((resume, index) => (
            <div className="col-md-6" key={index}>
              <div className="resume-wrap">
                <span className="date">{resume.date}</span>
                <h2>{resume.role}</h2>
                <span className="position">Cambridge University</span>
                <p className="mt-4">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center">
            <p>
              <a href="#" className="btn btn-primary py-4 px-5">
                Download CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
