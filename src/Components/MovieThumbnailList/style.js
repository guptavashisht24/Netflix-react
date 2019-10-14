import styled from 'styled-components'

export const Collapse = styled.div` {
  transition: height 250ms ease-in;
  height: ${props => props.height}px;
}
`
export const ThumbnailWrapper = styled.div`{
  box-sizing: border-box;
  transition: opacity 3s ease;
  transition: opacity 3s ease;
  position: relative;
  z-index: 4;
  overflow: hidden;
}`

export const Title = styled.h2`{
  font-size: 20px;
  margin-bottom: 0;
}`

export const List = styled.ul`{
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-x: visible;
  display: flex;
  flex-wrap: nowrap;
  transition: transform 300ms ease-in;
  &:hover li {
    // transform: translate3d(-20%,0,0);
    transform: translateX(-20%);
  }
  li {
    transition: transform 300ms ease-in;
    &:hover ~ li {
      transform: translateX(20%);
    }
    &:hover {
      transform: scale(1.5) !important;
    }
  }
}`

export const ListWrapper =  styled.div`{
  position: relative;
  overflow: hidden;
}`

export const NavigationIcon = styled.div`{
  position: absolute;
  left: ${ props => props.position === 'left' ? 0 : 'initial'};
  right: ${ props => props.position === 'right' ? 0 : 'initial'};
  display: inline-block;
  color: #fff;
  top: calc(50% - 48px);
  font-size: 62px;
  border: none;
  cursor: pointer;
  transition: all 300ms ease-in;
  outline: none;
  pointer-events: ${ props => props.disabled ? 'none' : 'all'}
  opacity: ${ props => props.disabled ? '0.4' : '1'};
  z-index: 1;
  :hover {
    transform: scale(1.1);
  }
}`