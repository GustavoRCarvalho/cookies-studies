import { useCookies } from "react-cookie"
import styled from "styled-components"

export const InputText = () => {
  const [cookies, setCookie] = useCookies(["text"])

  console.log("cookies: ", cookies)

  function onChange(newName) {
    setCookie("text", newName)
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
