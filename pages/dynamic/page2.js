import Layout from '../../layouts/layout'
import NestedLayout from '../../layouts/itemNestedLayout'


const Page2 = () => {
  return (
    <div>this is dynamic page2</div>
  )
}

Page2.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>
        {page}
      </NestedLayout>
    </Layout>
  )
}

export default Page2