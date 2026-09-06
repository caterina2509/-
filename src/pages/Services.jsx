import { useState } from 'react'
import services from '../data/services'

const categories = [
  { key: 'all', label: 'Все' },
  { key: 'airport', label: 'Аэропорт' },
  { key: 'port', label: 'Порт' },
  { key: 'intercity', label: 'Межгород' }
]

function Services() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? services
    : services.filter(s => s.category === active)

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Наши услуги</h2>

      <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
        {categories.map(c => (
          <button
            key={c.key}
            className={`btn ${active === c.key ? 'btn-danger' : 'btn-outline-danger'}`}
            onClick={() => setActive(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filtered.map(s => (
          <div className="col-md-6 col-lg-4" key={s.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={s.img}
                className="card-img-top"
                alt={s.title}
                style={{ height: 200, objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{s.title}</h5>
                <p className="card-text flex-grow-1">{s.desc}</p>
                <span className="fw-bold text-danger">{s.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
