import { ContentLimit } from "./components/Common/ContentLimit"
import { InputText } from "./components/InputText"
import { Text } from "./components/text"
import styled from "styled-components"
import { CookiesProvider } from "react-cookie"

export const App = () => {
  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <ContentLimit>
        <Container>
          <InputText />
          <Text />
        </Container>
      </ContentLimit>
    </CookiesProvider>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`
