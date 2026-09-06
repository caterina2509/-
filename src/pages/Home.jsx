import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div
        className="text-white text-center d-flex align-items-center"
        style={{
          height: '70vh',
          background:
            "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&q=80') center/cover"
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">LV Transfer</h1>
          <p className="lead">Частные трансферы по Риму, аэропортам и портам Италии</p>
          <Link to="/services" className="btn btn-danger btn-lg mt-3">Смотреть услуги</Link>
        </div>
      </div>

      <div className="container py-5">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <h3>✈️ Аэропорты</h3>
            <p>Fiumicino и Ciampino, встреча с табличкой, отслеживание рейса.</p>
          </div>
          <div className="col-md-4">
            <h3>🚢 Порт Чивитавеккья</h3>
            <p>Трансфер к круизным лайнерам, помощь с багажом.</p>
          </div>
          <div className="col-md-4">
            <h3>🗺️ Межгород</h3>
            <p>Поездки по всей Италии на комфортных автомобилях.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
