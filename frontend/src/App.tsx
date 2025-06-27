import Header from "./editor/Header/Header";
import ProseMirrorEditor from "./editor/EditorContainer/ProseMirrorEditor";
import "./assets/css/App.css";
import "./assets/css/ProseMirror.css";
import "./assets/css/Header.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="editor-container">
        <ProseMirrorEditor />
      </div>
    </div>
  );
}

export default App;
