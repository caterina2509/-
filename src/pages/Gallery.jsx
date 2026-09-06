import { useState, useEffect } from 'react'

const slides = [
  { img: 'https://i.pinimg.com/1200x/a7/88/df/a788df9edaf8c342570fcc024b185457.jpg', caption: 'Комфортные седаны для трансфера' },
  { img: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Встреча в аэропорту Fiumicino' },
  { img: 'https://images.unsplash.com/photo-1628503172677-7177af7aea9e?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Круизный порт Чивитавеккья' },
  { img: 'https://images.unsplash.com/photo-1773063449875-332dff62b6e3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'Групповые трансферы минивэном' }
]
function Gallery() {
  const [current, setCurrent] = useState(0)

useEffect(() => {
             const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 4000)
             return () => clearInterval(timer)
  }, [])

  const prevSlide = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length)
  const nextSlide = () => setCurrent(prev => (prev + 1) % slides.length)

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Галерея</h2>

   <div className="position-relative mx-auto" style={{ maxWidth: 900 }}>
         <img
          src={slides[current].img}
          alt={slides[current].caption}
          className="rounded shadow"
          style={{ width: '100%', height: 480, objectFit: 'cover' }}
        />
  <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-50 text-white p-3 rounded-bottom">
          {slides[current].caption}
        
        </div>

       
       
        <button
          className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-2"
          onClick={prevSlide}
        >‹</button>
        <button
          className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-2"
          onClick={nextSlide}
        >›</button>
      </div>

      
      
      <div className="d-flex justify-content-center gap-2 mt-3">
        {slides.map((_, i) => (
          <span
            key={i}
            role="button"
            onClick={() => setCurrent(i)}
            className={`rounded-circle ${i === current ? 'bg-danger' : 'bg-secondary'}`}
            style={{ width: 10, height: 10, display: 'inline-block', cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  )
}



export default Gallery
