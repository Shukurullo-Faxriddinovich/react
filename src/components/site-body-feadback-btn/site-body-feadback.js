

import "./site-body-feadback.scss"

const Feadback = ({ children, className = ""}) =>{
  return(
    <span className={`Feadback ${className}`}>{children}</span>
  )
}

export default Feadback ;