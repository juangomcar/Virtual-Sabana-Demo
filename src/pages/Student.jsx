import { Calendar, BookOpen, Trophy, Clock, TrendingUp, Award } from 'lucide-react';

export default function Student() {
  const courses = [
    { id: 1, name: 'Cálculo Diferencial', progress: 75, nextClass: 'Lun 10:00 AM', professor: 'Dr. García' },
    { id: 2, name: 'Programación Web', progress: 60, nextClass: 'Mar 2:00 PM', professor: 'Dra. Martínez' },
    { id: 3, name: 'Bases de Datos', progress: 90, nextClass: 'Mié 8:00 AM', professor: 'Ing. López' },
    { id: 4, name: 'Inglés Avanzado', progress: 45, nextClass: 'Jue 4:00 PM', professor: 'Prof. Smith' }
  ];

  const upcomingEvents = [
    { date: '15 Oct', title: 'Examen Cálculo', time: '10:00 AM' },
    { date: '18 Oct', title: 'Entrega Proyecto Web', time: '11:59 PM' },
    { date: '22 Oct', title: 'Quiz Bases de Datos', time: '2:00 PM' }
  ];

  const achievements = [
    { icon: Trophy, title: 'Mejor Promedio', color: 'bg-yellow-500' },
    { icon: Award, title: 'Participación Activa', color: 'bg-blue-500' },
    { icon: TrendingUp, title: 'Mejora Continua', color: 'bg-green-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-indigo-900">Virtual Sabana</h1>
            <p className="text-gray-600">Portal Estudiante</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-semibold text-gray-800">María González</p>
              <p className="text-sm text-gray-500">ID: 2024001234</p>
            </div>
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              MG
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-2">¡Bienvenida de nuevo, María! 👋</h2>
          <p className="text-indigo-100">Tienes 3 tareas pendientes y 2 clases hoy</p>
        </div>

        {/* Search & Microlearning Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">¿Qué quieres aprender hoy?</h3>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Buscar microcertificaciones..."
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none text-lg"
            />
            <BookOpen className="absolute right-4 top-4 text-gray-400" size={24} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white cursor-pointer hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                <Award size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">Python Básico</h4>
              <p className="text-sm text-blue-100 mb-3">4 módulos • 2 horas</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white/20 px-2 py-1 rounded">Beginner</span>
                <span className="text-xs">🏆 Certificado</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white cursor-pointer hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                <TrendingUp size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">Excel Avanzado</h4>
              <p className="text-sm text-purple-100 mb-3">6 módulos • 3 horas</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white/20 px-2 py-1 rounded">Intermediate</span>
                <span className="text-xs">🏆 Certificado</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white cursor-pointer hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                <BookOpen size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">Design Thinking</h4>
              <p className="text-sm text-green-100 mb-3">5 módulos • 2.5 horas</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white/20 px-2 py-1 rounded">Beginner</span>
                <span className="text-xs">🏆 Certificado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Courses */}
          <div className="lg:col-span-2 space-y-6">
            {/* Microlearning in Progress */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Mi Microlearning en Progreso</h3>
              <div className="space-y-4">
                <div className="border-2 border-orange-200 rounded-lg p-4 bg-orange-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Award className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">Análisis de Datos con Python</h4>
                      <p className="text-xs text-gray-500">Módulo 2 de 4</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-orange-600">50%</span>
                  </div>
                  <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition text-sm mt-2">
                    Continuar Aprendiendo
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-indigo-600" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Mis Cursos</h3>
              </div>
              <div className="space-y-4">
                {courses.map(course => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-800">{course.name}</h4>
                        <p className="text-sm text-gray-500">{course.professor}</p>
                      </div>
                      <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                        {course.nextClass}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-indigo-600">{course.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="text-yellow-500" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Logros Recientes</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`${achievement.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2`}>
                      <achievement.icon className="text-white" size={28} />
                    </div>
                    <p className="text-xs text-gray-600">{achievement.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Calendar & Events */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-indigo-600" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Próximos Eventos</h3>
              </div>
              <div className="space-y-3">
                {upcomingEvents.map((event, idx) => (
                  <div key={idx} className="flex gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition">
                    <div className="text-center">
                      <div className="bg-indigo-600 text-white rounded-lg px-2 py-1 text-xs font-bold">
                        {event.date}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-sm">{event.title}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock size={12} />
                        {event.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Estadísticas</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Promedio General</span>
                  <span className="font-bold text-green-600 text-xl">4.2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cursos Activos</span>
                  <span className="font-bold text-indigo-600 text-xl">4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tareas Completadas</span>
                  <span className="font-bold text-purple-600 text-xl">28/32</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}