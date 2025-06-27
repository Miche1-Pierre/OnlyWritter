import React, { useEffect, useRef } from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser as ProseMirrorDOMParser } from "prosemirror-model";
import { menuBar } from "prosemirror-menu";
import { schema as basicSchema } from "prosemirror-schema-basic";
import { exampleSetup, buildMenuItems } from "prosemirror-example-setup";
import "prosemirror-view/style/prosemirror.css";
import "prosemirror-menu/style/menu.css";

const ProseMirrorEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const state = EditorState.create({
      schema: basicSchema,
      plugins: exampleSetup({
        schema: basicSchema,
        menuContent: buildMenuItems(basicSchema).fullMenu,
      }),
    });

    const view = new EditorView(editorRef.current, {
      state,
    });

    return () => {
      view.destroy();
    };
  }, []);

  return <div ref={editorRef} className="prosemirror-editor" />;
};

export default ProseMirrorEditor;
