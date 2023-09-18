import '@/styles/globals.css'
import { Flowbite } from 'flowbite-react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('286018450834217');
        ReactPixel.pageView();
      });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Flowbite theme={{ dark: true }}>
        <Component {...pageProps} />
        <Analytics/>
      </Flowbite>
    </ThemeProvider>
  )
}
