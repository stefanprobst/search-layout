export default function HomePage() {
  return (
    <main className="h-full min-h-0 grid grid-cols-[200px_1fr]">
      <aside className="bg-purple-200 min-h-0 overflow-y-auto">
        <h2>Sidepanel</h2>
        <ul>
          {Array.from({ length: 1000 }).map((_, i) => {
            return (
              <li key={i}>
                <div>Item {i}</div>
              </li>
            );
          })}
        </ul>
      </aside>
      <div className="h-full min-h-0 grid grid-rows-[auto_1fr]">
        <aside className="bg-sky-200">Toolbar</aside>
        <div className="min-h-0 overflow-y-auto bg-red-100">
          <h1>Main content</h1>
          <ul>
            {Array.from({ length: 1000 }).map((_, i) => {
              return (
                <li key={i}>
                  <div>Item {i}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}
