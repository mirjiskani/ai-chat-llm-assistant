import Chat from "./components/Chat";

function App() {
  return (
    <div className="h-screen bg-blue-800/60 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-md h-[90vh] p-1 bg-gray-900 rounded-xl shadow-lg">
        <h1 className="text-3xl bg-red-600/30 text-center p-2 rounded-t-xl font-bold text-white">AI Chat LLM Assistant</h1>
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default App;