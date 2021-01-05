# Interview_Topics to look at

## Sapient HTML Topics

### 
    Semantic Tags / Markup
            - header
            - footer
            - aside:  
            - main:
            - section
          Make it work without JS
            - field level validations?
            - API Call? http://api.com/login
          Accessbility 
            - A, AA, AAA?
            - ARIA Attributes?
            - Skip Navigation?
            - no-js

          Web Page Request Cycle
          DOM
          CSSOM

          Image 
            https://placehold.it/200 - Mobile
            https://placehold.it/500

          Video
            - Controls Bar customization with CSS?
            - Image?

          Async / Defer - 
          Preload / PreFetch - 


          Web Workers -
          Service Workers - 

          SEO
            - Meta Tags
            - Structured Data / Micro Data / JSON-LD

<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
    <script src="src/index.js" async></script>
    <link rel="stylesheet" href="src/styles.css" media="" />
  </head>

  <body>
    <div id="app">
      <div class="h-form h-center h-fluid">

       <picture>
          <source media="mobile" srcset="" />
          <source media="tab" srcset="" />
          <img src="" alt="" />
        </picture> 

        <img src="https://placehold.it/200" alt="" /> 

        <form name="login-form">
          <div>
            <label id="email-label">Email</label>
            <input
              type="text"
              for="email-label"
              name="email"
              placeholder="enter your email"
            />
          </div>
          <div>
            <label id="pass-label">Pasword</label>
            <input
              type="password"
              name="password"
              placeholder="enter your password"
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </body>
</html>


