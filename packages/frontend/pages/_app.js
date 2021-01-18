import "../styles/globals.css";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";
import styled from "styled-components";
import { colors } from "../config/constants";

const store = configureStore();

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${colors.page.background};
`;

export default MyApp;
