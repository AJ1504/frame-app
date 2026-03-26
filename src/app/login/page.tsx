export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-frame-gold rounded-sm flex items-center justify-center mx-auto mb-4">
            <span className="text-frame-black font-bold text-2xl font-display">F</span>
          </div>
          <h1 className="text-3xl font-display mb-2">Welcome back</h1>
          <p className="text-frame-light">Sign in to your Frame account</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-frame-light mb-1">Email</label>
            <input type="email" className="w-full bg-frame-dark border border-frame-gray rounded-lg px-4 py-3 text-frame-cream focus:border-frame-gold focus:outline-none transition" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-frame-light mb-1">Password</label>
            <input type="password" className="w-full bg-frame-dark border border-frame-gray rounded-lg px-4 py-3 text-frame-cream focus:border-frame-gold focus:outline-none transition" placeholder="••••••••" />
          </div>
          <button className="w-full bg-frame-gold text-frame-black py-3 rounded-lg font-medium hover:bg-frame-gold/90 transition">
            Sign In
          </button>
          <div className="text-center text-sm text-frame-light">
            Don't have an account? <a href="/signup" className="text-frame-gold hover:underline">Join Frame</a>
          </div>
        </div>
      </div>
    </div>
  )
}
