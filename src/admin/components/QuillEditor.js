// src/components/QuillEditor.js
import React, { useEffect, useRef } from 'react';
import Quill from 'quill';

import 'quill/dist/quill.snow.css';

const QuillEditor = ({ value, onChange }) => {
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current) {
      quillRef.current = new Quill('#quill-editor', {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'image']
          ]
        }
      });

      quillRef.current.on('text-change', () => {
        onChange(quillRef.current.root.innerHTML);
      });
    }

    if (quillRef.current && value) {
      quillRef.current.root.innerHTML = value;
    }
  }, [value, onChange]);

  return <div id="quill-editor" />;
};

export default QuillEditor;
