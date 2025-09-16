"use client";
import React, { useState } from 'react'
import { lecturePrompts } from '@/data/taglines'
import FileUploadBox from '@/components/FileUploadBox';
import TextPasteBox from '@/components/TextPasteBox';

const ContentUpload = () => {
  //const tagline = lecturePrompts[Math.floor(Math.random() * lecturePrompts.length)];
  const tagline = "Empower Your Learning: Upload Lectures, Summarize, and Quiz Yourself!"
  const [mode, setMode] = useState<'upload' | 'paste'>('upload');

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center px-4 py-12'>
      <div className='w-full max-w-4xl p-10 rounded-lg flex flex-col items-center mx-auto'>
        <h1 className='text-2xl md:text-4xl font-bold mb-12 text-center'>{tagline}</h1>
        <div className="flex justify-center mb-8 gap-4">
          <div className='p-4 bg-gray-200 rounded-lg space-x-4 flex'>
            <button
              className={`px-6 py-2 rounded-lg font-semibold border transition-colors duration-150 focus:outline-none ${mode === 'upload' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-600'}`}
              onClick={() => setMode('upload')}
            >
              Upload Document
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-semibold border transition-colors duration-150 focus:outline-none ${mode === 'paste' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-600'}`}
              onClick={() => setMode('paste')}
            >
              Paste Text
            </button>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          {mode === 'upload' ? (
            <div className='w-full'>
              <FileUploadBox />
            </div>
          ) : (
            <div className='w-full'>
              <TextPasteBox />
            </div>
          )}
        </div>
        <div>
          <button className='mt-8 px-5 py-3 text-white rounded-full text-md bg-blue-600 hover:bg-blue-800'>Generate Summary</button>
        </div>
      </div>
    </div>
  )
}

export default ContentUpload