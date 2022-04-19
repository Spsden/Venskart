import { Card } from '@nextui-org/react'
import React from 'react'
import styles from '../styles/Home.module.css'
import AllShops from '../components/AllShops';
import ShopThumb from '../components/Elements/ShopThumb';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Shops in your area</h2>
      </div>
      <div>
        <AllShops/>
        
      </div>
      
      
      
    </div>
  )

}



export default Home