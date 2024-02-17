import { Link } from "react-router-dom"

export default function Links() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/SignIn">SignIn</Link>
      </li>
      <li>
        <Link to="/SignIn/SignIn">SignIn</Link>
      </li>
      <li>
        <Link to="/SignUp">SignUp</Link>
      </li>
      <li>
        <Link to="/SignUp/SignUp">SignUp</Link>
      </li>
    </ul>
  )
}