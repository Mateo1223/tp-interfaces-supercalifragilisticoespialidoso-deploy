import { useState } from 'react'
import Main from '../../components/Main'

interface ContactForm {
  nombre: string
  email: string
  mensaje: string
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    nombre: '',
    email: '',
    mensaje: '',
  })

  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el mensaje
    console.log('Formulario enviado:', formData)
    setEnviado(true)
    setFormData({ nombre: '', email: '', mensaje: '' })

    // Opcional: limpiar el mensaje después de 3 segundos
    setTimeout(() => setEnviado(false), 3000)
  }

  return (
    <Main>
      <div className="mb-12">
        <p className="text-red-600 font-semibold text-sm tracking-widest mb-4">CONTACTO</p>
        <h1 className="text-4xl lg:text-5xl font-bold mb-12">¿Hablamos?</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Escribinos un mensaje</h2>
            <p className="text-gray-500 text-sm mb-8">Te responderemos en menos de 24h hábiles.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Marcos"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ej: tu@email.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  required
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Contanos en qué te podemos ayudar"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
                  required
                />
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition-colors"
              >
                Enviar mensaje →
              </button>

              {/* Mensaje de éxito */}
              {enviado && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
                  ✓ Mensaje enviado correctamente. Te contactaremos pronto.
                </div>
              )}
            </form>
          </div>

          {/* Card de información */}
          <div className="bg-gray-900 text-white rounded-lg p-8 h-fit">
            <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full mb-6">
              📍
            </div>
            <h3 className="text-xl font-semibold mb-4">Visitanos en nuestro local</h3>
            <p className="text-sm text-gray-400 mb-6">Mendoza AITO. Palermo Soho. CABA</p>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-400">Lunes a viernes</p>
                <p className="font-semibold">10 a 20hs</p>
              </div>
              <div>
                <p className="text-gray-400">Sábados</p>
                <p className="font-semibold">11 a 8hs</p>
              </div>
              <div>
                <p className="text-gray-400">Domingos</p>
                <p className="font-semibold">Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Contact
