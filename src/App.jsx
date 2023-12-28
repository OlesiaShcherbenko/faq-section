import React from 'react'
import './App.scss'
import iconStar from '/icon-star.svg'
import iconPlus from '/icon-plus.svg'
import iconMinus from '/icon-minus.svg'
import {faqs} from './data'

function FaqsItem ({question, answer}) {
  const [open, setOpen] = React.useState(false);

  return  (
    <div className='faqs__item'>
      <div className='faqs__question'>
        <h3>{question}</h3>
        <img onClick={() => setOpen(true)} className='faqs__plus' src={iconPlus} alt="" />
        {
          open && (
            <img onClick={() => setOpen(false)} className='faqs__minus' src={iconMinus} alt="" />
          )
        }
      </div>
      {
        open && (
          <p className='faqs__answer'>
            {answer}
          </p>
        )
      }
    </div>
  )
}

function App() {
  
  return (
    <>
    <section className='faqs'>
      <div className='faqs__heading'>
        <img src={iconStar} alt="" />
        <h2>FAQs</h2>
      </div>
      <FaqsItem {...faqs[0]} />
      <FaqsItem {...faqs[1]} />
      <FaqsItem {...faqs[2]} />
      <FaqsItem {...faqs[3]} />
      <FaqsItem {...faqs[4]} />
    </section>
    </>
  )
}

export default App
