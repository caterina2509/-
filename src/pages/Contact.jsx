import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', date: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const WHATSAPP_NUMBER = '393287179172' 
  
  const handleSubmit = (e) => {
  e.preventDefault()

  const text = `Здравствуйте! Хочу заказать трансфер.
Имя: ${form.name}
Телефон: ${form.phone}
Дата поездки: ${form.date}`

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')

  setSent(true)
}

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Забронировать трансфер</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          {sent ? (
            <div className="alert alert-success">
              Заявка отправлена! Мы свяжемся с вами в WhatsApp.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Имя</label>
                <input className="form-control" name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Телефон / WhatsApp</label>
                <input className="form-control" name="phone" value={form.phone} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Дата поездки</label>
                <input type="date" className="form-control" name="date" value={form.date} onChange={handleChange} required />
              </div>
              <button className="btn btn-danger w-100" type="submit">Отправить заявку</button>
            </form>
          )}
        </div>
      </div>

      <h4 className="text-center mt-5 mb-3">Частые вопросы</h4>
      <div className="accordion mx-auto" style={{ maxWidth: 700 }} id="faq">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
              Как быстро вы приедете в аэропорт?
            </button>
          </h2>
          <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faq">
            <div className="accordion-body">
              Водитель отслеживает ваш рейс и подъезжает с учётом реального времени прилёта.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
              Можно ли заказать минивэн для группы?
            </button>
          </h2>
          <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faq">
            <div className="accordion-body">
              Да, есть машины на 6–8 человек с багажным отделением.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
              Как оплатить поездку?
            </button>
          </h2>
          <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faq">
            <div className="accordion-body">
              Наличными водителю или переводом заранее — как удобнее.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
