import Button from '@material-ui/core/Button'
import { useRouter } from 'next/router'


export default function ItemNestedLayout({ children }) {
  const router = useRouter()


  const toP1 = () => {
    router.push('/dynamic/page1')
  }

  const toP2 = () => {
    router.push('/dynamic/page2')
  }


  return (
    <div>
      <div>this is ItemnestedLayout!!</div>
      <div>
        <Button onClick={toP1}>page1</Button>
        <Button onClick={toP2}>page2</Button>
      </div>
      {children}

    </div>
  )
}