const serviceList = [
  { link: '#', icon: 'analysis', name: 'Web Design' },
  { link: '#', icon: 'flasks', name: 'Phtography' },
  { link: '#', icon: 'ideas', name: 'Web Developer' },
  { link: '#', icon: 'analysis', name: 'App Developing' },
  { link: '#', icon: 'flasks', name: 'Branding' },
  { link: '#', icon: 'ideas', name: 'Product Strategy' },
]

const Services = () => {
  return (
    <section className="ftco-section" id="services-section">
      <div className="container">
        <div className="row justify-content-center py-5 mt-5">
          <div className="col-md-12 heading-section text-center">
            <h1 className="big big-2">Services</h1>
            <h2 className="mb-4">Services</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row">
          {serviceList.map((service, index) => (
            <div className="col-md-4 text-center d-flex" key={index}>
              <a href={service.link} className="services-1">
                <span className="icon">
                  <i className={`flaticon-${service.link}`}></i>
                </span>
                <div className="desc">
                  <h3 className="mb-5">{service.name}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
