import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: '80px 16px' }}>
      <div>
        <h1 className="section-title">Page not found</h1>
        <p style={{ marginTop: 16, color: 'var(--text-muted)' }}>The page you are looking for does not exist.</p>
        <Link className="btn" to="/" style={{ marginTop: 28, padding: '10px 20px', borderRadius: 10 }}>
          Back to home
        </Link>
      </div>
    </section>
  )
}
