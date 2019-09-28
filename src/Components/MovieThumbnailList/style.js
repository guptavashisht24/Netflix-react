import styled from 'styled-components'

export const ThumbnailWrapper = styled.div`{
  padding: 0px 40px;
  box-sizing: border-box;
  -webkit-transition: opacity 3s ease;
  transition: opacity 3s ease;
  /*opacity: 0;*/
  position: relative;
  z-index: 4;
}`

export const Title = styled.h2`{
  font-size: 20px;
  margin-bottom: 0;
}`

export const MovieDetail = styled.div`{

}`

export const List = styled.ul`{
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-x: visible;
  display: flex;
  flex-wrap: nowrap;
}`
