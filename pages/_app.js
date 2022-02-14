function GlobalStyles() {
  return (
    <style global jsx>{`
    @import url('http://fonts.cdnfonts.com/css/gagalin');
    @import url('http://fonts.cdnfonts.com/css/visby');

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        line-height: 1.5;
      }
      :root {
        --clr-primary: #EFB386;
        --clr-primary-light: #F2DABE;
        --clr-secondary: gray;
        --clr-dark: #22312A;
        --clr-bg-light: #F6F6F6;
        --clr-bg-dark: #21302B;
        --ff-primary: 'Visby', sans-serif;
        --ff-secondary: 'Gagalin', sans-serif;
        --bs: rgba(239,179,134,.15) 0px 4px 24px 0px;
        --bs-dark: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
          0.125em 0.125em 0.25em rgba(0,0,0,.15);
      }
      body {
        color: var(--clr-dark);
        font-family: var(--ff-primary)                                   
      }
      ::-webkit-scrollbar {
        width: 6px;
      }
      ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
      }
      ::-webkit-scrollbar-thumb {
        background-color: rgba(155, 155, 155, 0.5);
        border-radius: 20px;
        border: transparent;
      }
      h3 {
        font-family: var(--ff-secondary);
      }
      button {
        font-family: var(--ff-secondary);
      }
    `}</style>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
