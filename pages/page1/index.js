import AppBar from '../../layouts/appBar'
import Layout from '../../layouts/layout'
import NestedLayout from '../../layouts/nestedLayout'
// import CssBaseline from '@material-ui/core/CssBaseline'
import style from './page1.module.sass'

const Page1 = () => {
  return (
    <div>
        <div className={style.page1Container}>
          this is page1
          <button>xxxx</button>
        </div>
    </div>
  )
}

Page1.getLayout = function getLayout(page) {
  console.log('getLayout called')
  return (
    <Layout>
    <NestedLayout>
      {page}
    </NestedLayout>
  </Layout>
  )
}

export default Page1