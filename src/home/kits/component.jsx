import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <section className={style.kits}>
    <s.Container className={style.kits__container}>
      <h2 className={style.kits__h2}>mod kits</h2>
      <div className={style.kits__div}>
        <picture className={style.kits__picture}>
          <source srcSet='https://dummyimage.com/747x500/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/939x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/593.4x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.kits__img} loading='lazy' alt='mod kits' />
        </picture>
        <a className={style.kits__a} href='#'>ver mais</a>
      </div>
      <div className={[style.kits__div, style.half]}>
        <picture className={[style.kits__picture, style.half]}>
          <source srcSet='https://dummyimage.com/747x500/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/464.5x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/293.4x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.kits__img} loading='lazy' alt='overdrive' />
        </picture>
        <a className={style.kits__a} href='#'>overdrive</a>
      </div>
      <div className={[style.kits__div, style.half]}>
        <picture className={[style.kits__picture, style.half]}>
          <source srcSet='https://dummyimage.com/747x500/1A1A1A/1A1A1A.png' media='(max-width: 767px)' />
          <source srcSet='https://dummyimage.com/464.5x400/1A1A1A/1A1A1A.png' media='(min-width: 768px) and (max-width: 959px)' />
          <source srcSet='https://dummyimage.com/293.4x400/1A1A1A/1A1A1A.png' media='(min-width: 960px)' />
          <img className={style.kits__img} loading='lazy' alt='distortion' />
        </picture>
        <a className={style.kits__a} href='#'>distortion</a>
      </div>
    </s.Container>
  </section>