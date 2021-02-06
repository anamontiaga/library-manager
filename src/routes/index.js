import { Home } from "../screens/Home"
import { Books } from "../screens/Books"
import { BookDetail } from "../screens/BookDetail"
import { BookDelete } from "../components/BookDelete"
import { BookUpdate } from "../components/BookUpdate"
import { Categories } from "../screens/Categories"
import { CategoryDetail } from "../screens/CategoryDetail"
import { CategoryDelete } from "../components/CategoryDelete"
import { CategoryUpdate } from "../components/CategoryUpdate"

export const routes = [
  { path: "/categories/:id/update", component: CategoryUpdate },
  { path: "/categories/:id/delete", component: CategoryDelete },
  { path: "/books/:id/update", component: BookUpdate },
  { path: "/books/:id/delete", component: BookDelete },
  { path: "/categories/:id", component: CategoryDetail },
  { path: "/books/:id", component: BookDetail },
  { path: "/categories", component: Categories },
  { path: "/books", component: Books },
  { path: "/", component: Home },
]
