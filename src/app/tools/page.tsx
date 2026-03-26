const tools = [
  {
    name: 'Script Breakdown',
    icon: '📝',
    desc: 'Structured template for every scene — locations, cast, props, department flags. Auto-organizes into a master breakdown sheet.',
    status: 'Available'
  },
  {
    name: 'Budget Builder',
    icon: '💰',
    desc: 'Film-specific line items across all standard departments. Auto-totaling, exportable as spreadsheet. Built for indie budgets.',
    status: 'Available'
  },
  {
    name: 'Shooting Schedule',
    icon: '📅',
    desc: 'Drag-and-drop scene cards onto a calendar. Conflict detection for locations and cast across scenes.',
    status: 'Available'
  },
  {
    name: 'Moodboard',
    icon: '🎨',
    desc: 'Drag-and-drop images organized by look, lighting, wardrobe, and location. Shared across the team.',
    status: 'Available'
  },
  {
    name: 'Document Vault',
    icon: '📁',
    desc: 'Location releases, call sheets, deal memos. Templates included, everything editable.',
    status: 'Available'
  },
  {
    name: 'Role Board',
    icon: '👥',
    desc: 'Visual view of confirmed, pending, and open roles across every department.',
    status: 'Available'
  },
  {
    name: 'Production Checklist',
    icon: '✅',
    desc: 'Live completion tracker. Locations locked? DP confirmed? Insurance uploaded? Green checkmarks.',
    status: 'Available'
  },
  {
    name: 'Crew Discovery',
    icon: '🔍',
    desc: 'Suggestions drawn from your collaboration graph. Who have your collaborators worked with? Who\'s available?',
    status: 'Beta'
  },
  {
    name: 'Grant Matching',
    icon: '🎯',
    desc: '100+ grant sources indexed. Matching based on your project format, subject, and background.',
    status: 'Coming Soon'
  },
  {
    name: 'Festival Tracker',
    icon: '🏆',
    desc: 'Log submissions, screenings, and awards. All linked back to the project.',
    status: 'Coming Soon'
  },
]

export default function ToolsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-display mb-2">Production Tools</h1>
        <p className="text-frame-light">
          What a line producer charges $3–5K to organize manually. Frame makes it accessible to every indie filmmaker from day one.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <div key={tool.name} className={`bg-frame-dark rounded-lg p-6 border transition ${
            tool.status === 'Available' ? 'border-frame-gray/50 hover:border-frame-gold/30' :
            tool.status === 'Beta' ? 'border-frame-gold/20 hover:border-frame-gold/40' :
            'border-frame-gray/30 opacity-60'
          }`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{tool.icon}</span>
                <h3 className="text-lg font-display">{tool.name}</h3>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded ${
                tool.status === 'Available' ? 'bg-green-500/20 text-green-400' :
                tool.status === 'Beta' ? 'bg-amber-500/20 text-amber-400' :
                'bg-frame-gray/50 text-frame-light/50'
              }`}>
                {tool.status}
              </span>
            </div>
            <p className="text-sm text-frame-light">{tool.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
