import { useEffect } from "react"
import AppBar from '../layouts/appBar'

import Layout from '../layouts/layout'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Button from "@material-ui/core/Button"
import Link from 'next/link'
// import i18next from ''


export default function Index() {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()
  let qq = '123'
  useEffect(()=> {
    // console.log('t change')
    // qq = t('test')
    // console.log('qqq', qq)
  }, [t])

  const test = async() => {
    console.log(i18n.language)
    // i18n.changeLanguage('tw', (err, t)=> {
    //   console.log('err', err)
    //   console.log('t', t)
    //   const qq = t('test')
    //   console.log('qqq', qq)
    // })
  }

  const changeLang = () => {
    const lang  = router.locale === 'en' ? 'tw' : 'en'
    const path = `/${lang}`
    router.push(path)

  }


  useEffect(()=> {
    const language = window.navigator.userLanguage || window.navigator.language;
    console.log('language', language)
  }, [])
  return (
    <div>
       <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h2>Layout Example (Index)</h2>
      <p>{t('test')}</p>
      <Button onClick={test}>test</Button>
      <Button onClick={changeLang}>change language</Button>

      <Link
            href='/'
            locale={router.locale === 'en' ? 'tw' : 'en'}
          >
            <button>
              xxx
            </button>
      </Link>

      <p>
        This example adds a property <code>getLayout</code> to your page,
        allowing you to return a React component for the layout. This allows you
        to define the layout on a per-page basis. Since we're returning a
        function, we can have complex nested layouts if desired.
      </p>
      <p>
        When navigating between pages, we want to persist page state (input
        values, scroll position, etc) for a Single-Page Application (SPA)
        experience.
      </p>
      <p>
        This layout pattern will allow for state persistence because the React
        component tree is persisted between page transitions. To preserve state,
        we need to prevent the React component tree from being discarded between
        page transitions.
      </p>
      <h3>Try It Out</h3>
      <p>
        To visualize this, try tying in the search input in the{' '}
        <code>Sidebar</code> and then changing routes. You'll notice the input
        state is persisted.
      </p>
    </div>
  )
}


Index.getLayout = function getLayout(page) {
  console.log('page', page)
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  console.log('local', locale)
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}
