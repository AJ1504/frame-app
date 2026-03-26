export default function SignupPage() {
  const departments = [
    'Director', 'Producer', 'Writer', 'Director of Photography',
    'Editor', 'Sound Designer', 'Composer', 'Production Designer',
    'Casting Director', '1st AD', 'Gaffer', 'Colorist', 'Other'
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-frame-gold rounded-sm flex items-center justify-center mx-auto mb-4">
            <span className="text-frame-black font-bold text-2xl font-display">F</span>
          </div>
          <h1 className="text-3xl font-display mb-2">Join Frame</h1>
          <p className="text-frame-light">For the people who make films nobody told them they could make.</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-frame-light mb-1">First Name</label>
              <input type="text" className="w-full bg-frame-dark border border-frame-gray rounded-lg px-4 py-3 text-frame-cream focus:border-frame-gold focus:outline-none transition" placeholder="Maya" />
            </div>
            <div>
              <label className="block text-sm text-frame-light mb-1">Last Name</label>
              <input type="text" className="w-full bg-frame-dark border border-frame-gray rounded-lg px-4 py-3 text-frame-cream focus:border-frame-gold focus:outline-none transition" placeholder="Chen" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-frame-light mb-1">Email</label>
            <input type="email" className="w-full bg-frame-dark border border-frame-gray rounded-lg px-4 py-3 text-frame-cream focus:border-frame-gold focus:outline-none transition" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-frame-light mb-1">Password</label>
            <input type="password" className="w-full bg-frame-dark border border-frame-gray rounded-lg px-4 py-3 text-frame-cream focus:border-frame-gold focus:outline-none transition" placeholder="••••••••" />
          </div>
          <div>
            <label className="block text-sm text-frame-light mb-1">Primary Department</label>
            <select className="w-full bg-frame-dark border border-frame-gray rounded-lg px-4 py-3 text-frame-cream focus:border-frame-gold focus:outline-none transition">
              <option value="">Select your department</option>
              {departments.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-frame-light mb-1">Location</label>
            <input type="text" className="w-full bg-frame-dark border border-frame-gray rounded-lg px-4 py-3 text-frame-cream focus:border-frame-gold focus:outline-none transition" placeholder="Brooklyn, NY" />
          </div>
          <button className="w-full bg-frame-gold text-frame-black py-3 rounded-lg font-medium hover:bg-frame-gold/90 transition">
            Create Account — It's Free
          </button>
          <p className="text-xs text-frame-light/50 text-center">
            By joining, you agree to Frame's Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}
