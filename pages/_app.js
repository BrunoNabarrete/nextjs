import '@/styles/globals.css'
import { Flowbite } from 'flowbite-react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Analytics } from '@vercel/analytics/react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Flowbite theme={{ dark: true }}>
        <Component {...pageProps} />
        <Analytics/>
      </Flowbite>
    </ThemeProvider>
  )
}
