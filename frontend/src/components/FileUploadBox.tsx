import React, { useCallback } from 'react'
import { useDropzone, FileWithPath } from 'react-dropzone'

const FileUploadBox = () => {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    console.log(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    maxFiles: 5
  });

  return (
    <div className='w-full border p-10 rounded-lg'>
        <div 
          {...getRootProps()} 
          className={`flex flex-col p-16 items-center justify-center border rounded-lg cursor-pointer ${
            isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
        >
            <input {...getInputProps()} />
            <h1 className='text-xl md:text-2xl font-bold'>
              {isDragActive ? 'Drop the files here...' : 'Drop your document here'}
            </h1>
            <p className='mt-4'>or click to browser files</p>
            <button className='mt-6 px-3 py-2 bg-blue-400 rounded-full hover:bg-blue-500'>Choose File</button>
        </div>
    </div>
  )
}

export default FileUploadBox
