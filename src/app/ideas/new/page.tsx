export default function NewIdeaPage() {
  const formats = ['Short Film', 'Feature', 'Pilot', 'Music Video', 'Documentary', 'Web Series']
  const roles = [
    'Director', 'Producer', 'Writer', 'Director of Photography', 'Editor',
    'Sound Designer', 'Composer', 'Production Designer', 'Casting Director',
    '1st AD', 'Gaffer', 'Colorist', 'Steadicam Operator', 'VFX Supervisor'
  ]

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-display mb-2">Post an Idea</h1>
        <p className="text-frame-light">Two minutes. That's all it takes to start attracting collaborators.</p>
      </div>

      <div className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-2">Project Title</label>
          <input type="text" className="w-full bg-frame-dark border border-frame-gray rounded-lg px-4 py-3 text-frame-cream focus:border-frame-gold focus:outline-none transition text-lg" placeholder="Echoes of Silence" />
        </div>

        {/* Format */}
        <div>
          <label className="block text-sm font-medium mb-2">Format</label>
          <div className="flex flex-wrap gap-2">
            {formats.map((f) => (
              <button key={f} className="px-4 py-2 rounded border border-frame-gray text-frame-light hover:border-frame-gold hover:text-frame-gold transition text-sm">
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Concept */}
        <div>
          <label className="block text-sm font-medium mb-2">Concept</label>
          <p className="text-xs text-frame-light/50 mb-2">One paragraph — the pitch, not the treatment.</p>
          <textarea rows={5} className="w-full bg-frame-dark border border-frame-gray rounded-lg px-4 py-3 text-frame-cream focus:border-frame-gold focus:outline-none transition resize-none" placeholder="A deaf musician discovers she can hear colors..." />
        </div>

        {/* Roles Needed */}
        <div>
          <label className="block text-sm font-medium mb-2">Roles Needed</label>
          <p className="text-xs text-frame-light/50 mb-2">Select the collaborators you're looking for.</p>
          <div className="flex flex-wrap gap-2">
            {roles.map((r) => (
              <button key={r} className="px-3 py-1.5 rounded border border-frame-gray text-frame-light hover:border-frame-gold hover:text-frame-gold transition text-sm">
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Visibility */}
        <div>
          <label className="block text-sm font-medium mb-2">Visibility</label>
          <div className="flex gap-3">
            {['Public', 'Network Only', 'Private Draft'].map((v) => (
              <button key={v} className={`px-4 py-2 rounded border text-sm transition ${
                v === 'Public' ? 'border-frame-gold text-frame-gold bg-frame-gold/10' : 'border-frame-gray text-frame-light hover:border-frame-light'
              }`}>
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="flex gap-4 pt-4">
          <button className="bg-frame-gold text-frame-black px-8 py-3 rounded font-medium hover:bg-frame-gold/90 transition">
            Post Idea
          </button>
          <button className="border border-frame-gray text-frame-light px-8 py-3 rounded hover:border-frame-light transition">
            Save Draft
          </button>
        </div>
      </div>
    </div>
  )
}
