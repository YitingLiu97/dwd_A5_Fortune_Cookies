###  API DOCUMENTATION
  * The route, i.e. `/quotes`
  * The HTTP verb, i.e. `GET` `POST`
  * Query string parameters, i.e. `AddQuote="Life is beautiful.`
  `AddAuthor="First, Last Name"`
  * No URL parameters, i.e. `/quotes/:name`
  * Request body format, i.e.
  ```json
  {
    text: "Life is beautiful."
    from: "First Last"
  }
  ```
  * Response format, i.e.
  ```json
  [ {
    text: "Life is beautiful."
    from: "First Last"
  },
   {
    text: "Life is beautiful."
    from: "First Last"
  },
   {
    text: "Life is beautiful."
    from: "First Last"
  }]
  ```