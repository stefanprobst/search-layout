export default function HomePage() {
  return (
    <main className="h-full min-h-0 grid grid-cols-[200px_1fr]">
      <aside className="h-full">Sidepanel</aside>
      <div className="h-full min-h-0 grid grid-rows-[auto_1fr]">
        <div>Toolbar</div>
        <div className="min-h-0 overflow-y-auto bg-red-100">
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
