import h from '@rex/htmlparser'
import style from './style.css'

import Container from '@rex/container'
import Logo from '@rex/logo'
import Region from './region'

export default () =>
  <header className={style.header}>
    <Container className={style.header__container}>
      <div className={style.header__partner}>partner</div>
      <div className={style.header__menu}>menu</div>
      <Logo className={style.header__logo} />
      <div className={style.header__search}>search</div>
      <div className={style.header__services}>services</div>
      <div className={style.header__user}>user</div>
      <div className={style.header__bag}>bag</div>
      <Region className={style.header__region} />
    </Container>
  </header>
