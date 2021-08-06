import '@nextcss/reset'
import { appWithTranslation } from 'next-i18next'


const MyApp = ({ Component, pageProps }) => {
  

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => {
    return page
  })
  // console.log('get layout', getLayout)
  console.log('my app called')


  return getLayout(<Component {...pageProps} />)
}

export default appWithTranslation(MyApp)
