import { Users, BookOpen, ClipboardCheck, BarChart3, Calendar, Award } from 'lucide-react';

export default function Teacher() {
  const courses = [
    { id: 1, name: 'Cálculo Diferencial', students: 45, assignments: 3, avgGrade: 4.1 },
    { id: 2, name: 'Álgebra Lineal', students: 38, assignments: 2, avgGrade: 3.8 },
    { id: 3, name: 'Matemáticas Aplicadas', students: 52, assignments: 4, avgGrade: 4.3 }
  ];

  const recentActivity = [
    { student: 'Ana Rodríguez', action: 'Entregó tarea', course: 'Cálculo', time: 'Hace 10 min' },
    { student: 'Carlos Méndez', action: 'Pregunta en foro', course: 'Álgebra', time: 'Hace 25 min' },
    { student: 'Diana Silva', action: 'Completó quiz', course: 'Matemáticas', time: 'Hace 1 hora' },
    { student: 'Eduardo Torres', action: 'Entregó tarea', course: 'Cálculo', time: 'Hace 2 horas' }
  ];

  const pendingGrades = [
    { assignment: 'Tarea 3 - Derivadas', course: 'Cálculo Diferencial', pending: 12 },
    { assignment: 'Quiz 2 - Matrices', course: 'Álgebra Lineal', pending: 8 },
    { assignment: 'Proyecto Final', course: 'Matemáticas Aplicadas', pending: 15 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-green-900">Virtual Sabana</h1>
            <p className="text-gray-600">Portal Profesor</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-semibold text-gray-800">Dr. Roberto García</p>
              <p className="text-sm text-gray-500">Profesor Titular</p>
            </div>
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              RG
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white mb-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Bienvenido, Dr. García 👨‍🏫</h2>
          <p className="text-green-100">Tienes 35 entregas por calificar y 3 clases programadas hoy</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Estudiantes</p>
                <p className="text-3xl font-bold text-green-600">135</p>
              </div>
              <Users className="text-green-600" size={40} />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Cursos Activos</p>
                <p className="text-3xl font-bold text-teal-600">3</p>
              </div>
              <BookOpen className="text-teal-600" size={40} />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Por Calificar</p>
                <p className="text-3xl font-bold text-orange-600">35</p>
              </div>
              <ClipboardCheck className="text-orange-600" size={40} />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Promedio General</p>
                <p className="text-3xl font-bold text-blue-600">4.1</p>
              </div>
              <BarChart3 className="text-blue-600" size={40} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Courses */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-green-600" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Mis Cursos</h3>
              </div>
              <div className="space-y-4">
                {courses.map(course => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-800">{course.name}</h4>
                        <p className="text-sm text-gray-500">{course.students} estudiantes</p>
                      </div>
                      <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        Promedio: {course.avgGrade}
                      </span>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <span className="text-gray-600">
                        <span className="font-semibold">{course.assignments}</span> tareas activas
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-teal-600" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Actividad Reciente</h3>
              </div>
              <div className="space-y-3">
                {recentActivity.map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm">
                      {activity.student.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-sm">{activity.student}</p>
                      <p className="text-xs text-gray-600">{activity.action} - {activity.course}</p>
                      <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Pending Grades */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <ClipboardCheck className="text-orange-600" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Pendiente de Calificar</h3>
              </div>
              <div className="space-y-3">
                {pendingGrades.map((item, idx) => (
                  <div key={idx} className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="font-semibold text-gray-800 text-sm mb-1">{item.assignment}</p>
                    <p className="text-xs text-gray-600 mb-2">{item.course}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-orange-600 font-semibold">
                        {item.pending} entregas pendientes
                      </span>
                      <button className="text-xs bg-orange-600 text-white px-3 py-1 rounded hover:bg-orange-700 transition">
                        Calificar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Acciones Rápidas</h3>
              <div className="space-y-2">
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-sm">
                  Crear Nueva Tarea
                </button>
                <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition text-sm">
                  Publicar Anuncio
                </button>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                  Ver Reportes
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}