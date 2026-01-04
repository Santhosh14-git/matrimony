import React, { useState } from 'react';

const MediaUploader = ({ onUpload }) => {
  const [files, setFiles] = useState([]);
  const [dragOver, setDragOver] = useState(false);

  const handleFiles = (selected) => {
    const withPreview = Array.from(selected).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFiles(withPreview);
    if (onUpload) onUpload(Array.from(selected));
  };

  const onInputChange = (e) => {
    if (e.target.files) handleFiles(e.target.files);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const onDragLeave = () => setDragOver(false);

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length) {
      handleFiles(e.dataTransfer.files);
    }
  };

  return (
    <section>
      <div
        className={`p-10 border-2 border-dashed rounded-lg text-center cursor-pointer ${dragOver ? 'border-primary-color bg-primary-color bg-opacity-10' : 'border-gray-300'}`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <input type="file" multiple onChange={onInputChange} className="hidden" id="media-input" />
        <label htmlFor="media-input" className="block cursor-pointer">
          Drag and drop files here, or click to select
        </label>
      </div>
      <aside className="flex flex-wrap mt-4">
        {files.map(({ file, preview }) => (
          <div key={file.name} className="inline-flex border-2 border-gray-200 rounded-lg p-1 m-1">
            <div className="flex min-w-0 overflow-hidden">
              <img
                src={preview}
                alt={file.name}
                className="block w-auto h-24"
                onLoad={() => URL.revokeObjectURL(preview)}
              />
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
};

export default MediaUploader;
