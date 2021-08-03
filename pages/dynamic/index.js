import Layout from '../../layouts/layout'

const DynamicPage = () => {
  return (
    <div>
      this is dynamic page
    </div>
  )
}

DynamicPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default DynamicPage