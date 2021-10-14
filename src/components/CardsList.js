import React, {useState} from 'react'
import Card from './Card'

const CardsList = ({cards , card }) => {
    
    return (
        <div className='cards-list'>
         
              <Card
                imageUrl={'https://static.pullandbear.net/2/photos//2021/I/0/2/p/8681/542/427/8681542427_4_1_8.jpg?t=1632128453896&imwidth=563'}
                price={20}
              name={'Jeans Standard fit'} 
             />

              <Card
                imageUrl={'https://static.pullandbear.net/2/photos//2021/I/0/2/p/8681/508/433/8681508433_4_1_8.jpg?t=1628526391554&imwidth=563'}
                price={15}
              name={'Dark blue casual slim jeans '}
             />

            <Card
                imageUrl={'https://static.pullandbear.net/2/photos//2021/I/0/2/p/8681/500/426/8681500426_4_1_8.jpg?t=1628508970190&imwidth=563'}
                price={25}
              name={'Faded light blue  slim jeans'}
             />
              <Card
                imageUrl={'https://static.pullandbear.net/2/photos//2021/I/0/2/p/8681/507/406/8681507406_4_1_8.jpg?t=1626101839338&imwidth=563'}
                price={30}
              name={'Faded light blue relaxed slim jeans'}
             />
              <Card
                imageUrl={'https://static.pullandbear.net/2/photos//2021/I/0/2/p/8681/538/434/8681538434_4_1_8.jpg?t=1632128385402&imwidth=563'}
                price={24}
              name={'Light blue faded skinny jeans'}
             />
              <Card
                imageUrl={'https://static.pullandbear.net/2/photos//2021/I/0/2/p/5683/566/400/5683566400_4_1_8.jpg?t=1628247562096&imwidth=563'}
                price={22}
              name={'Jean carrot fit Join Life'}
             />

              
           
        </div>
    )
}

export default CardsList
