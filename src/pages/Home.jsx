export default function Home() {
  return (
    <div
      style={{ 
        backgroundImage: "url('/FondoVirtualSabana.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'flex-start',   
        justifyContent: 'flex-end', 
        paddingRight: '40px',
        paddingTop: '30px'        
      }}
    >
      <a
        href="/roles"
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
        Acceder
      </a>
    </div>
  );
}
