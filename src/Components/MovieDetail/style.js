import styled from 'styled-components'
import { Container } from 'react-bootstrap'

export const Grid = styled(Container)`
  //margin-top: 125px;
  position: relative;
`
export const Image = styled.img`
  height: auto;
  width: 100%;
  max-width: 300px;
`

export const CloseIcon = styled.div`
  position: absolute;
  cursor: pointer;
  right: 0;
`
export const Heading = styled.h2`
  font-size: 35px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 15px;
`

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  li {
    color: #9BA09A;
    padding: 0 10px;
    line-height: 1;
    font-size: 13px;
    border-right: 1px solid #9BA09A;
    :first-child {
      padding-left: 0;
    }
    :last-child {
      border-right: none;
    }
  }
`
export const TabbedNavigation = styled.div`
  .nav {
    border: none;
    margin-bottom: 20px;
    .nav-link {
      text-transform: uppercase;
      font-weight: 500;
      color: #fff;
      border: none;
      border-bottom: 3px solid transparent;
      margin-right: 25px;
      padding: 0 0 10px;
      color: #9BA09A;
      transition: all 300ms ease-in;
      &.active,&:hover {
        border-bottom-color: #e50914;
        color: #fff;
        background: transparent;
      }
    }
  }
`
export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  font-weight: 500;
  font-size: 20px;
`
export const Rating = styled.i`
position: relative;
display: inline-block;
width: 0;
height: 0;
margin-left: .9em;
margin-right: .9em;
margin-bottom: 1.2em;
border-right:  .3em solid transparent;
border-bottom: .7em  solid #FC0;
border-left:   .3em solid transparent;
/* Controlls the size of the stars. */
font-size: 14px;
margin-right: 15px;
&:before, &:after {
  content: '';
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  top: .6em;
  left: -1em;
  border-right:  1em solid transparent;
  border-bottom: .7em  solid #FC0;
  border-left:   1em solid transparent;
  transform: rotate(-35deg);
}
&:after {
  transform: rotate(35deg);
}
`
export const Description = styled.p`
  margin: 25px 0;
`

// export const Li = styled.li`
//   color: #9BA09A;
//   padding: 0 10px;
//   line-height: 1;
//   font-size: 13px;
//   border-right: 1px solid #9BA09A;
//   :first-child {
//     padding-left: 0;
//   }
//   :last-child {
//     border-right: none;
//   }
// `
export const Features = styled.div`
  display: flex;
  margin-bottom: 10px;
`

export const Label = styled.div`
  color: #9BA09A;
  min-width: 80px;
  margin-right: 20px;
`
