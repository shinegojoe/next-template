import Layout from '../../layouts/layout'
import ItemNestedLayout from '../../layouts/itemNestedLayout'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Items = () => {
  const router = useRouter()
  const [itemData, setItemData] = useState('')

  useEffect(()=> {
    const itemData = getItemData('item1')
    setItemData(itemData)
  }, [])

  const toP1 = () => {
    // router.push('/items/item1')
    const data = getItemData('item1')
    setItemData(data)
  }

  const toP2 = () => {
    const data = getItemData('item2')
    setItemData(data)

  }

  const getItemData = (name) => {
    if(name==='item1') {
      return 'the item1 data is here!!'
    } else {
      return 'the item2 data is here!!!!!!'
    }
  }


  return (
    <div>
      itemList
      <button onClick={toP1}>item1</button>
      <button onClick={toP2}>item2</button>
      <div>
        itemData
        {itemData}
      </div>
    </div>
  )
}


Items.getLayout = function getLayout(page) {
  console.log('getLayout called')
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default Items