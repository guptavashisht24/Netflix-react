import styled from 'styled-components'
import { Container } from 'react-bootstrap'

export const Grid = styled(Container)`
  margin-top: 125px;
`
export const H2 = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 1em;
`
export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`

export const Description = styled.p`
  margin: 25px 0;
`

export const Li = styled.li`
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
`
export const Features = styled.div`
  display: flex;
  margin-bottom: 10px;
`

export const Label = styled.div`
  color: #9BA09A;
  min-width: 80px;
  margin-right: 20px;
`
