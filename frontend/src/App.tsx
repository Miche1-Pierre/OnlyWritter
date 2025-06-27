import React from "react";
import ProseMirrorEditor from "./editor/ProseMirrorEditor";

function App() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mon Word (Prototype)</h1>
      <ProseMirrorEditor />
    </div>
  );
}

export default App;
