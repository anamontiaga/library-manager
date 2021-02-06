import Home from '../components/Home'
import Books from '../components/Books'
// import BookDetail from '../components/BookDetail'
// import BookDelete from '../components/BookDelete'
// import BookUpdate from '../components/BookUpdate'
import Categories from '../components/Categories'
// import CategoryDetail from '../components/CategoryDetail'
// import CategoryDelete from '../components/CategoryDelete'
// import CategoryUpdate from '../components/CategoryUpdate'

export const routes = [
  
  { path: '/categories', component: Categories },
  { path: '/books', component: Books },
  { path: '/', component: Home },
];
