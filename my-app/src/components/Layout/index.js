import s from './style.module.css';
import cn from 'classnames';

const Layout = ({title, urlBg, colorBg, children}) => {

  const style = {};

  if (urlBg) {
    style.background = `url(${urlBg})`;
  }

  if (colorBg) {
    style.background = `${colorBg}`;
  }

  return (
    <>
      <section className={s.root} style={style}>
        <div className={s.wrapper}>
            <article>
                <div className={s.title}>
                    {title && <h3>{title}</h3>}
                    <span className={s.separator}></span>
                </div>
                <div className={cn(s.desc, s.full)}>
                    {children}
                </div>
            </article>
        </div>
    </section>
    </>
  )
}

export default Layout;