import React from 'react';
import {
    card1img1,
    card1img2,
    card1img3,
    card1img4,
    card2img1,
    card2img2,
    card2img3,
    card2img4,
    card3img1,
    card3img2,
    card3img3,
    card3img4
} from './images';
import Card from './Card';

export default function Features() {
    
    const data = [
        {   
            className : 'hand-crafted',
            front: {
                h1: 'Hand Crafted',
            },
            back: {
                h1: 'Precisely Hand Crafted',
                img_group: {
                    img1: card1img1,
                    img2: card1img2,
                    img3: card1img3,
                    img4: card1img4
                }
            }
        },
        {
            className : 'unique',
            front: {
                h1: 'Unique',
            },
            back: {
                h1: 'Unique Designs',
                img_group: {
                    img1: card2img1,
                    img2: card2img2,
                    img3: card2img3,
                    img4: card2img4
                }
            }
        },
        {
            className : 'special',
            front: {
                h1: 'Special',
            },
            back: {
                h1: 'Special Occasions',
                img_group: {
                    img1: card3img1,
                    img2: card3img2,
                    img3: card3img3,
                    img4: card3img4
                }
            }
        }
    ]
    return (
        <section className='features'>
            {
                data.map((element) => {
                    return <Card card={element} />
                })
            }
        </section>
    );
}
