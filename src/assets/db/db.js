import { photo01, photo02, photo03 } from '../img'; // We can import the images directly here from the index.js file or do a dynamic import as shown in PhotoDetailView.tsx
import { v4 as uuidv4 } from 'uuid'; // This is a unique id generator

export const cardInfo = [
  {
    id: uuidv4(), // We need to initialize it
    title: 'Clocks',
    img: photo01,
    views: 100,
    date: '14 Oct 2021'
  },
  {
    id: uuidv4(),
    title: 'Plants',
    img: photo02,
    views: 200,
    date: '15 Oct 2021'
  },
  {
    id: uuidv4(),
    title: 'Morning',
    img: photo03,
    views: 150,
    date: '14 Oct 2022'
  },

]