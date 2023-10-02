import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyles } from "./styles/global";
import { Router } from "./routes";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    /* Prove o tema para todas as demais tags, utilizando o defaultTheme. Utiliza a tag do GlobalStyles. Por fim, utiliza o Router para ter acesso a todas as rotas e elementos do sistema */
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
