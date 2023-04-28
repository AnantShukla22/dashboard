import { useRouter } from "next/router"

const user = () => {

 const {query}= useRouter();

  return (
    <div>{query.user}</div>
  )
}

export default user