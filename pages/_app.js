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
        --fs-h1: 3rem;
        --fs-h2: 2.25rem;
        --fs-h3: 1.25rem;
        --fs-body: 1rem;
    
        --bs-2: 0.25em 0.25em 0.75em rgba(0,0,0,.25),
          0.125em 0.125em 0.25em rgba(0,0,0,.15);
}

@media (min-width: 800px) {
    :root {
        --fs-h1: 4.5rem;
        --fs-h2: 3.75rem;
        --fs-h3: 1.5rem;
        --fs-body: 1rem;
    }

      }
      body {
        font-size: var(--fs-body);
        color: var(--clr-dark);
        font-family: var(--ff-primary);
      }
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
      }

      div#__next {
        flex: 1;
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
      h1 {
        font-size: var(--fs-h1)
      }
      h2 {
        font-size: var(--fs-h2)
      }
      h3 {
        font-family: var(--ff-secondary);
      }
      button {
        font-family: var(--ff-secondary);
      }
      .side-bar {
        transform: translatex(0%);
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
