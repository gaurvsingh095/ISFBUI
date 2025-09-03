// app/page.tsx
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">🚀 Welcome to ISFB</h1>
      <p className="text-lg text-gray-300">
        Your Interview Simulation & Feedback Builder UI is running!
      </p>
      <button className="preferenceBtn mt-6">
        Test Preference Button
        <span className="preferenceBtn-tooltip">Tooltip example</span>
      </button>
    </main>
  )
}
