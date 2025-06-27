import React, { useEffect, useRef } from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser as ProseMirrorDOMParser } from "prosemirror-model";
import { schema as basicSchema } from "prosemirror-schema-basic";
import { exampleSetup } from "prosemirror-example-setup";
import "prosemirror-view/style/prosemirror.css";

const ProseMirrorEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const state = EditorState.create({
      schema: basicSchema,
      plugins: exampleSetup({ schema: basicSchema }),
    });

    const view = new EditorView(editorRef.current, {
      state,
    });

    return () => {
      view.destroy();
    };
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Éditeur ProseMirror</h2>
      <div ref={editorRef} className="border p-2 rounded bg-white" />
    </div>
  );
};

export default ProseMirrorEditor;
