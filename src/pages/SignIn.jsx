import { useState } from 'react'

function SignIn() {
  const [role, setRole] = useState('Guest')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Signed in as ${role}: ${email}`)
  }

  return (
    <section className="signin">
      <div className="signin-image">
        <img src="/images/signin-shop.jpg" alt="Sprinkly Shop macarons" />
      </div>

      <div className="signin-panel">
        <h1>welcome back</h1>
        <p className="signin-text">
          Sign in to book tables faster, follow your cake orders and keep your
          favorite treats in one place.
        </p>

        <div className="signin-card">
          <div className="role-tabs">
            {['Guest', 'Café staff'].map((r) => (
              <button
                key={r}
                type="button"
                className={r === role ? 'role-btn role-active' : 'role-btn'}
                onClick={() => setRole(r)}
              >
                {r}
              </button>
            ))}
          </div>

          <h2>Sign in to your account</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="field"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="field"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <a href="#" className="link-small">Forgot your password?</a>

            <button type="submit" className="btn btn-brown order-btn">
              Sign in
            </button>
          </form>

          <p className="signin-new">
            New here? <a href="#" className="link-small">Create an account</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SignIn