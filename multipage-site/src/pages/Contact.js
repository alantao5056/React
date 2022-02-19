import { useLocation } from "react-router-dom"

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString)

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel libero distinctio dolores sunt culpa quae quis fugit. Maxime, laborum unde. Temporibus quaerat quod ipsa? Incidunt dicta dignissimos quas dolore saepe!</p>
    </div>
  )
}
