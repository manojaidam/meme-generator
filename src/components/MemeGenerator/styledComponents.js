// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-left: 25px;
  min-height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 25px;
`
export const MainHeading = styled.h1`
  color: #35469c;
  font-size: 25px;
`

export const FormContainer = styled.form`
  width: 25vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
`

export const FormDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`

export const LabelTextElements = styled.label`
  font-size: 14px;
  color: #7e858e;
  margin-bottom: 5px;
`

export const InputElement = styled.input`
  height: 27px;
  padding: 5px;
`

export const SelectElement = styled.select`
  height: 27px;
  padding: 5px;
`
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  padding: 8px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 50%;
`

export const ImageShowContainer = styled.div`
  background-image: url(${props => props.backgroundImageUrl});
  width: 40vw;
  height: 70vh;
  margin-left: 50px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const DisplayTextElement = styled.p`
  font-size: ${props => props.fontSize}px;
  color: #ffffff;
  flex-wrap: wrap;
`
