import styled from 'styled-components'

export const ListItem = styled.li`{
  min-width: 16.66%;
  padding: 0 2px;

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
}`

export const Overlay = styled.div`{
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.75) 0%, transparent 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, transparent 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 );
  /* IE6-9 */
  padding: 20px;
  position: relative;
  height: 100%;
  pointer-events: none;
  opacity: 0;
  -webkit-transition: opacity .125s ease;
  transition: opacity .125s ease;
}`

export const Title = styled.h2`{
  font-size: 16px;
  font-weight: 400;
  opacity: 0;
  -webkit-transition: opacity .25s ease;
  transition: opacity .25s ease;
}`

export const Rating = styled.div`{
  font-size: 14px;
  opacity: 0;
  -webkit-transition: opacity .25s ease .125s;
  transition: opacity .25s ease .125s;
}`

export const Plot = styled.div`{
  font-size: 14px;
  margin-top: 100px;
  line-height: 1.6;
  opacity: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-transition: margin .25s ease .125s, opacity .25s ease .25s;
  transition: margin .25s ease .125s, opacity .25s ease .25s;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}`

export const Movie = styled.div`{
  //width: calc(20% - 10px);
  //min-width: calc(20% - 10px);
  background-image: url(${props => props.backgroundImage || ''});
  background-position: center;
  background-size: 100%;
  height: 200px;
  display: inline-block;
  background-repeat: no-repeat;
  overflow: hidden;
  margin-right: 10px;
  -webkit-transition: background 1s ease;
  transition: background 1s ease;

  &:nth-child(n+6) {
    margin-top: 20px;
  }
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-size: 150%;
  }
  &:hover ${Overlay} {
    opacity: 1;
    pointer-events: all;
  }
  &:hover ${Plot} {
    margin-top: 10px;
    opacity: 1;
  }
  &:hover ${Title} {
    opacity: 1;
  }
  &:hover ${Rating} {
    opacity: 1;
  }
}`
