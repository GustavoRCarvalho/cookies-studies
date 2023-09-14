import { useCookies } from "react-cookie"
import styled from "styled-components"

export const Text = () => {
  const [cookies] = useCookies(["text"])

  return <SpanCustom>{cookies.text}</SpanCustom>
}

const SpanCustom = styled.span`
  width: 100%;
  white-space: pre-wrap;
`
