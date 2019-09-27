import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
  to {
    transform: rotate(360deg);
 }
`
export const LoaderWrapper = styled.div`{
  width: 65px;
  height: 65px;
  border-radius: 55px;
  border: 6px solid #fff;
  border-top-color: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${spinner} 1.2s linear infinite;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}`
