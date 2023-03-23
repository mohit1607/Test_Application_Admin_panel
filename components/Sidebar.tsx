import React,{useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from './Button'

interface propTypes {
  setFullWidth: Function,
  fullWidth: Boolean
}

const links = [
   {
    name: 'Add Test',
    slug: '/add_test'
  },
  {
    name: 'Submissions',
    slug: '/dashboard_page2'
  },
  {
    name: 'Students',
    slug: '/students'
  }
  
]

export const Sidebar = ({setFullWidth, fullWidth}: propTypes) => {

  const router = useRouter()
  const currentRoute = router.pathname



  const [toogle, setToogle] = useState<Boolean>(true)


  return (
    <div className={`${toogle ? 'w-[20%]' : 'w-[5%]'} overflow-hidden border flex flex-col transition-all ease-linear duration-200`}>
      <Button onClick={() => {
        setToogle(!toogle)
        setFullWidth(!fullWidth)
      }} >Toogle</Button>
        {
          links.map(curr => {
            return (
              <Link key={curr.name} href={curr.slug}>
                <div className={`${currentRoute === curr.slug ? 'bg-blue-500 text-white border-8 border-blue-500' : 'text-black'} cursor-pointer p-4 rounded-r-xl transition-all w-full ease-linear duration-150 border-l-8 border-l-white `}>
                    <a>{curr.name}</a>
                </div>
              </Link>
            )
          })
        }
    </div>
  )
}

