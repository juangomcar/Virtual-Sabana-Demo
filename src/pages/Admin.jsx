import { Users, BookOpen, GraduationCap, TrendingUp, Settings, AlertCircle, CheckCircle } from 'lucide-react';

export default function Admin() {
  const systemStats = [
    { label: 'Total Usuarios', value: '2,456', change: '+12%', icon: Users, color: 'blue' },
    { label: 'Cursos Activos', value: '187', change: '+5%', icon: BookOpen, color: 'green' },
    { label: 'Profesores', value: '89', change: '+3%', icon: GraduationCap, color: 'purple' },
    { label: 'Estudiantes', value: '2,367', change: '+14%', icon: Users, color: 'indigo' }
  ];

  const recentUsers = [
    { name: 'María González', role: 'Estudiante', status: 'Activo', date: '05 Oct 2025' },
    { name: 'Dr. Carlos Ruiz', role: 'Profesor', status: 'Activo', date: '04 Oct 2025' },
    { name: 'Ana Martínez', role: 'Estudiante', status: 'Pendiente', date: '04 Oct 2025' },
    { name: 'Luis Pérez', role: 'Estudiante', status: 'Activo', date: '03 Oct 2025' }
  ];

  const systemAlerts = [
    { type: 'warning', message: 'Actualización de sistema programada para mañana', time: 'Hace 1 hora' },
    { type: 'success', message: 'Backup completado exitosamente', time: 'Hace 3 horas' },
    { type: 'info', message: '15 solicitudes de nuevo registro pendientes', time: 'Hace 5 horas' }
  ];

  const courseStats = [
    { name: 'Ingeniería', courses: 45, students: 789, growth: 12 },
    { name: 'Medicina', courses: 38, students: 654, growth: 8 },
    { name: 'Derecho', courses: 29, students: 432, growth: 15 },
    { name: 'Administración', courses: 42, students: 492, growth: 10 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Virtual Sabana</h1>
            <p className="text-gray-600">Panel de Administración</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Settings className="text-gray-600" size={24} />
            </button>
            <div className="text-right">
              <p className="font-semibold text-gray-800">Admin Principal</p>
              <p className="text-sm text-gray-500">Administrador</p>
            </div>
            <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
              AP
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl p-8 text-white mb-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Panel de Control 🎯</h2>
          <p className="text-slate-300">Sistema operando normalmente - Todos los servicios activos</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`text-${stat.color}-600`} size={32} />
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                  {stat.change}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Faculty Statistics */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="text-blue-600" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Estadísticas por Facultad</h3>
                </div>
              </div>
              <div className="space-y-4">
                {courseStats.map((faculty, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-800">{faculty.name}</h4>
                        <p className="text-sm text-gray-500">{faculty.courses} cursos activos</p>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        +{faculty.growth}% este mes
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{faculty.students} estudiantes</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Users */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-indigo-600" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Usuarios Recientes</h3>
              </div>
              <div className="space-y-3">
                {recentUsers.map((user, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.role} - {user.date}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      user.status === 'Activo' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {user.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* System Alerts */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="text-orange-600" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Alertas del Sistema</h3>
              </div>
              <div className="space-y-3">
                {systemAlerts.map((alert, idx) => (
                  <div key={idx} className={`p-3 rounded-lg border ${
                    alert.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                    alert.type === 'success' ? 'bg-green-50 border-green-200' :
                    'bg-blue-50 border-blue-200'
                  }`}>
                    <div className="flex items-start gap-2">
                      {alert.type === 'success' ? (
                        <CheckCircle size={16} className="text-green-600 mt-0.5" />
                      ) : (
                        <AlertCircle size={16} className={
                          alert.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                        } />
                      )}
                      <div className="flex-1">
                        <p className="text-sm text-gray-800 mb-1">{alert.message}</p>
                        <p className="text-xs text-gray-500">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Acciones Rápidas</h3>
              <div className="space-y-2">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                  Crear Usuario
                </button>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-sm">
                  Nuevo Curso
                </button>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition text-sm">
                  Gestionar Permisos
                </button>
                <button className="w-full bg-slate-600 text-white py-2 rounded-lg hover:bg-slate-700 transition text-sm">
                  Ver Reportes
                </button>
              </div>
            </div>

            {/* System Health */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Estado del Sistema</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Servidor</span>
                  <span className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Operativo
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Base de Datos</span>
                  <span className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    Operativo
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Almacenamiento</span>
                  <span className="text-sm text-gray-800 font-semibold">67% usado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}