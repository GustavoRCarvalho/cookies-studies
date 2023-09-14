import { useCookies } from "react-cookie"
import styled from "styled-components"

export const InputText = () => {
  const [cookies, setCookie] = useCookies(["text"])

  function onChange(newText) {
    setCookie("text", newText)
  }

  return (
    <InputCustom
      type="text"
      value={cookies.text}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

const InputCustom = styled.input``
