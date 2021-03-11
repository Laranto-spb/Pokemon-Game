import s from './style.module.css';

const Layout = ({title, descr, urlBg, colorBg}) => {
  const bg = urlBg ? {background: `url(${urlBg})`} : {background: `${colorBg}`};

  // `url(${urlBg})
  return (
    <>
      <section className={s.root} style={bg}>
        <div className={s.wrapper}>
            <article>
                <div className={s.title}>
                    {title && <h3>{title}</h3>}
                    <span className={s.separator}></span>
                </div>
                <div className={[s.desc,s.full].join('')}>
                    {descr && <p>{descr}</p>}
                </div>
            </article>
        </div>
    </section>
    </>
  )
}

export default Layout;