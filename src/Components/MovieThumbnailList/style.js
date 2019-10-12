import styled from 'styled-components'

export const ThumbnailWrapper = styled.div`{
  padding: 0px 40px;
  box-sizing: border-box;
  -webkit-transition: opacity 3s ease;
  transition: opacity 3s ease;
  position: relative;
  z-index: 4;
}`

export const Title = styled.h2`{
  font-size: 20px;
  margin-bottom: 0;
}`

export const MovieDetailWrapper = styled.div`{
  transition: height 300ms ease-in;
  //height: ${(props) => props.show ? 'auto': 0};
  //overflow: hidden;
}`

export const List = styled.ul`{
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-x: visible;
  display: flex;
  flex-wrap: nowrap;
}`

export const NavigationWrapper = styled.div`{

}`

export const NavigationIcon = styled.button`{
  font-size: 16px;
  border: none;
  margin: 0 7.5px;
  color: #010101;
  cursor: pointer;
  transition: all 300ms ease-in;
  outline: none;
}`