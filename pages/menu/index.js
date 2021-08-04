
import Layout from '../../layouts/layout'
import TestMenu from '../../components/testMenu'

const MenuPage = () => {
  return (
    <div>
      <h1>this is menu</h1>
      <TestMenu></TestMenu>
    </div>
  )
}

MenuPage.getLayout = function getLayout(page) {
  return (
  <Layout>{page}</Layout>
  )
}

export default MenuPage