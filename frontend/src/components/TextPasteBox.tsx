import React from 'react'

const TextPasteBox = () => {
  return (
    <div className='w-full border p-10 rounded-lg'>
      <h1 className='text-lg font-semibold mb-4'>Paste your lecture text here:</h1>
      <textarea
        className='w-full h-40 border rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4'
        placeholder='Enter lecture text...'
      />
    </div>
  )
}

export default TextPasteBox;