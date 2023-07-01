import React from 'react'
import './Paper.css'

interface PaperProps {
    index: number;
    label: string;
    caption: string;
    content: number;
}

export const Paper: React.FC<PaperProps> = ({
    label = '',
    caption = '',
    content = 0,
    index = 0
}) => {
    
  return (
    <div className={`common-paper`} style={{marginRight: (index % 6) === 0 ? '0%' : ''}} >
        <div className='paper-heading'>{label ? label : 'Label'}</div>
        <div className='paper-caption'>{caption ? caption : 'no caption available'}</div>
        <div className='paper-content'>{content > 0 ? content : 0}</div>
    </div>
  )
}
