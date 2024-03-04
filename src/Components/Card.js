import React from 'react'

export default function Card(props) {
     

  return (
    <article className='card'>
    <div className={`card-front ${props.card.className} background-specs`}>
        <h1>{props.card.front.h1}</h1>
    </div>
    <div className='card-back'>
        <h1>{props.card.back.h1}</h1>
        <div className='blog'>
            <div className='img-group'>
                <img src={props.card.back.img_group.img1} alt=''/>
                <img src={props.card.back.img_group.img2} alt=''/>
                <img src={props.card.back.img_group.img3} alt=''/>
                <img src={props.card.back.img_group.img4} alt=''/>
            </div>
        </div>
    </div>
</article>
  )
}
