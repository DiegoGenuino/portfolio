function App() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-950 px-4 py-10 sm:px-6 lg:px-8">
      <section className="flex w-full max-w-5xl flex-col items-center gap-10 sm:gap-14 lg:gap-20">
        <h1 className="max-w-4xl text-center text-3xl font-extralight leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          A portfolio in progress, with intention behind every line.
        </h1>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-5 w-5 animate-bounce rounded-sm bg-gray-700 sm:h-7 sm:w-7 lg:h-10 lg:w-10"></div>
          <div className="h-5 w-5 animate-bounce rounded-sm bg-gray-700 [animation-delay:120ms] sm:h-7 sm:w-7 lg:h-10 lg:w-10"></div>
          <div className="h-5 w-5 animate-bounce rounded-sm bg-gray-700 [animation-delay:240ms] sm:h-7 sm:w-7 lg:h-10 lg:w-10"></div>
        </div>

        <p className="max-w-xl text-center text-sm text-gray-400 sm:text-base">
          Diego Genuino
        </p>
      </section>
    </main>
  );
}

export default App;
