import PropTypes from 'prop-types'

export const FirstApp = ( {title, subTitle, name} ) => {
  return (
    <>
        <h1>{title}</h1>
        {/* <h2>{ JSON.stringify(newMessage) }</h2> */}
        <p>{subTitle}</p>
        <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  title: "No hay titulo",
  subTitle: "No hay subtitulo",
  name: "Nahuel Leguizamon"
}
