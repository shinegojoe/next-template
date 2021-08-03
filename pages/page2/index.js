import AppBar from '../../layouts/appBar'
// import CssBaseline from '@material-ui/core/CssBaseline'
import Layout from '../../layouts/layout'


const Page2 = () => {
  return (
    <div>
       this is page2
       {/* <Image src="/testImg.png" width="200" height="200" alt="qq123"> */}
        <img src="/testImg.png" alt="xxx1234" ></img>
    
    </div>
  )
}


Page2.getLayout = function getLayout(page) {
  console.log('getLayout called')
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page2