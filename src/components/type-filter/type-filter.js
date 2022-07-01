import TypeBadge from "../type-badge/type-badge";

import "./type-filter.scss";

const TypeFilter = () =>{
  return(
    <form  className="type-filter">
      <label className="type-filter_label">
        <input defaultChecked className="visually-hidden type-filter__radio" type="radio" name="type"></input>
        <TypeBadge className="type-filter__styled-radio">All</TypeBadge>
      </label>
      <label className="type-filter_label">
        <input className="visually-hidden type-filter__radio" type="radio" name="type"></input>
        <TypeBadge  className="type-filter__styled-radio">UX</TypeBadge>
      </label>
      <label className="type-filter_label">
        <input className="visually-hidden type-filter__radio" type="radio" name="type"></input>
        <TypeBadge className="type-filter__styled-radio">UI</TypeBadge>
      </label>
      <label className="type-filter_label">
        <input className="visually-hidden type-filter__radio" type="radio" name="type"></input>
        <TypeBadge className="type-filter__styled-radio">Enhancement</TypeBadge>
      </label>
      <label className="type-filter_label">
        <input className="visually-hidden type-filter__radio" type="radio" name="type"></input>
        <TypeBadge className="type-filter__styled-radio">Bug</TypeBadge>
      </label>
      <label className="type-filter_label">
        <input className="visually-hidden type-filter__radio" type="radio" name="type"></input>
        <TypeBadge className="type-filter__styled-radio">Feature</TypeBadge>
      </label>
    </form>
  )

}

export default TypeFilter;