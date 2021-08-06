import { useState} from 'react'
import Layout from '../../layouts/layout'
import Switch from '@material-ui/core/Switch'
import Collapse from '@material-ui/core/Collapse'
import { Button } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import Grow from '@material-ui/core/Grow'
import Slide from '@material-ui/core/Slide'
import Zoom from '@material-ui/core/Zoom'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { useRouter } from 'next/router'






import style from './index.module.sass'

const TransitionPage = ()=> {
  const [collapse, setCollapse] = useState(true)
  const [fade, setFade] = useState(true)
  const [grow, setGrow] = useState(true)
  const [slide, setSlide] = useState(true)
  const [zoom, setZoom] = useState(true)

  const { t, i18n } = useTranslation('transition')
  const router = useRouter()



  const collapeChange = () => {
    // console.log('xxx')
    setCollapse(!collapse)
  }

  const fadeChange = () => {
    setFade(!fade)
  }

  const growChange = ()=> {
    setGrow(!grow)
  }

  const slideChange = ()=> {
    setSlide(!slide)
  }

  const zoomChange = ()=> {
    setZoom(!zoom)
  }

  return (
    <div className={style.transitionContainer}>
      <h1>{t('page')}</h1>
      <Link
            href='/transition'
            locale={router.locale === 'en' ? 'tw' : 'en'}
          >
            <button>
              xxx
            </button>
      </Link>
      <h2>collapse</h2>
      <div>
      {/* <Switch></Switch> */}
      <Button onClick={collapeChange}>collapse</Button>
      <Collapse in={collapse}>
        <div className={style.collapseWrapper}></div>
      </Collapse>
      </div>
      <div>
        <Button onClick={fadeChange}>fade</Button>
        <Fade in={fade}>
          <div className={style.collapseWrapper}></div>
        </Fade>
      </div>

      <div className={style.growWrapper}>
        <Button onClick={growChange}>grow</Button>
        <Grow in={grow}>
          <div className={style.collapseWrapper}></div>
        </Grow>

        <Grow in={grow} timeout={1000}>
          <div className={style.collapseWrapper}></div>
        </Grow>
      </div>

      <div>
        <Button onClick={slideChange}>slide</Button>
        <Slide in={slide}>
          <div className={style.collapseWrapper}></div>
        </Slide>
      </div>

      <div>
        <Button onClick={zoomChange}>zoom</Button>
        <Zoom in={zoom}>
          <div className={style.collapseWrapper}></div>
        </Zoom>

      </div>
    </div>
  )
}

TransitionPage.getLayout = function getLayout(page) {
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
      ...(await serverSideTranslations(locale, ['transition'])),
      // Will be passed to the page component as props
    },
  };
}

export default TransitionPage