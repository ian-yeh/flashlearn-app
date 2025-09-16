import React from 'react'

const FileUploadBox = () => {
  return (
    <div className='w-full border p-10 rounded-lg'>
        <div className='flex flex-col p-16 items-center justify-center border rounded-lg'>
            <h1 className='text-xl md:text-2xl font-bold'>Drop your document here</h1>
            <p className='mt-4'>or click to browser files</p>
            <button className='mt-6 px-3 py-2 bg-blue-400 rounded-full hover:bg-blue-500'>Choose File</button>
        </div>
    </div>
  )
}

export default FileUploadBox