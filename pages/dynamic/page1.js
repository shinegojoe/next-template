import Layout from '../../layouts/layout'
import NestedLayout from '../../layouts/itemNestedLayout'


const Page1 = () => {
  return (
    <div>this is dynamic page1</div>
  )
}

Page1.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>
        {page}
      </NestedLayout>
    </Layout>
  )
}

export default Page1