import { ThemeProvider } from 'styled-components'

import { Todo } from './pages/todo'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Todo />
      <GlobalStyle />
    </ThemeProvider>
  )
}
