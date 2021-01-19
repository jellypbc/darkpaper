import React, { useRef, useEffect } from 'react'

export default function PDFViewer({ backend, src }) {
  const viewerRef = useRef();

  useEffect(() => {
    const element = viewerRef.current
    backend(src, element)
  },[])

  return (
    <div 
      ref={viewerRef}
      id='viewer'
      style={{ width: '100%', height: '100%'}}>

    </div>
  )
}
