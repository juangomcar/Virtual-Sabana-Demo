export default function RoleSelect() {
  return (
    <div
      style={{
        backgroundImage: "url('/AccesoVirtualSabana.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          marginBottom: '24px',
          color: '#1e3a8a'
        }}>
          Selecciona tu Rol
        </h1>
        <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a
            href="/student"
            style={{
              backgroundColor: '#1e3a8a',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#1e40af'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#1e3a8a'}
          >
            Estudiante
          </a>
          <a
            href="/teacher"
            style={{
              backgroundColor: '#15803d',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#16a34a'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#15803d'}
          >
            Profesor
          </a>
          <a
            href="/admin"
            style={{
              backgroundColor: '#7c2d12',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#9a3412'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#7c2d12'}
          >
            Administrador
          </a>
        </div>
      </div>
    </div>
  );
}