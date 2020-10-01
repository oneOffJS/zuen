import h from '@rex/h'
import LinkButton from '@rex/kit/src/linkButton'
import Logo from './logo'
import Nav from './nav'
import Social from './social'
import style from './style.css'

export default () =>
  <footer className={style.footer}>
    <Logo className={style.footer__logo} />
    <Social className={style.footer__social} />
    <Nav className={style.footer__nav} />
    <LinkButton className={style.footer__linkButton} color='inverse' href='/'> Get an invite</LinkButton>
    <p className={style.footer__p}>Copyright {(new Date()).getFullYear()}. All Rights Reserved</p>
  </footer>
