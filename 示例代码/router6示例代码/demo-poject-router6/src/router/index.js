import Home from "../pages/Home"
import About from "../pages/About"
import News from "../pages/Home/News"
import Message from "../pages/Home/Message"
import Detail from "../pages/Home/Detail"
import { Navigate } from "react-router-dom"

const routes = [
  {
    path: '/about',
    element: < About />
  },
  {
    path: '/home',
    element: < Home />,
    children: [
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'message',
        element: <Message />,
        children: [
          {
            // params方式传参
            // path: 'detail/:id/:title/:content',
            // search方式传参 / state方式传参
            path: 'detail',
            element: <Detail />
          }
        ]
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to='/home' />
  }
]
export default routes