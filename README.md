<h1 align="center">Rose Grounds</h1>

`main image`

## Description:
**Garden** is an Ecology React.js app that allows users to look up their favorite roses species: garden locations, varieties, teas. The option to subscribe to a Newletter is provided on the front page for interested patrons.

- Client side (frontend) utilizes React.js & react-router-dom in combination with Material MUI create themes to provide cohesive structure.
- Server side (backend) uses Node.js / pgvector in combination with PostGreSQL to provide database structure on the frontend when interfacing between client and server side.
- Material UI in combination with traditional CSS is used for a cohesive design aesthetic.

## Technology Stack
- **Frontend/Client:** React.js, HTML5, CSS, framework, etc.
- **API:** Api calls or external sources used
- **Backend/Server:** node.js/express or python alternatives, include databases

<h2 align="center">Video:</h2>

## Screen Shots:
<p align="center">Please reference the screenshot folder for more available images</p>

`selected image 1`

`selected image 2`

`selected image 3`

## Run Code (Environment)

### Front-End Instructions `<examples below>`
- confirm that config is appropriate:
```
> node -v
> npm -v
> git --version
```

- Initial package.json & install dependenies(localhost:3000):
    - Must be `cd`'d into frontend/client for install
    - MUI, `react-router-dom`, redux, formik, etc... (see resources)
```
> npx create-react-app <project name>
> cd <project name>
> npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
> npm install --save react-router-dom
> npm install react-redux @reduxjs/toolkit
> npm install dotenv react-responsive-carousel
> npm install react-material-ui-carousel --save

```
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run start
```

### Back-End Helpful Instructions `<examples below>`
- Initial package.json & install dependencies:
    - Must be `cd`'d into backend/server for install
```
> npx create-strapi-app@latest <project name>
> cd <project name>
> npm install --save stripe
```
- Strapi Database generated (ctrl-c to exit):
```
> npm run develop
```
- **Avoid** *npm run start* and use the `npm run develop`. 
- Allow server to restart with each edit (see resources): 
    - **Content-Type Builder**: Item entry
    - **Media Library**: upload photos
    - **Permissions**: Settings > Roles > Public
- When using .env variables remember to [install prior](https://www.npmjs.com/package/dotenv/v/14.0.0)
```
npm install dotenv --save
```
-
    - Create a .env file in the root directory of your project.
    - Import and configure dotenv.
    - Establish a .gitignore [here](https://git-scm.com/docs/gitignore)

- In frontend fetch `item` from backend (*localhost:1337*):
```
const grouping = "items"
const items = await fetch(
`http://localhost:1337/api/${grouping}`
)
```
--------------------------
### Deployment



## Contact:
<!--- You can add in your linkedin, medium, stack overflow, dev.to account, etc. here --->
If you want to contact me you can reach me at <nelson@oakhalo.com>.

Connect with me on <a href="https://www.linkedin.com/in/ayla-nelson/">LinkedIn</a>

Connect with me on <a href="https://github.com/oakHalo">Oakhalo.dev</a>

## Resources:

- `Tech used and links associated`
- `Tech used and links associated`

`<examples below>`
- **PostMan** for API Tests [here](https://www.postman.com/)
    - jsonwebtoken / [jwt](https://jwt.io/) for Authentification & install [here](https://www.npmjs.com/package/jsonwebtoken)
    - jwt Debugger [here](https://jwt.io/#debugger-io)
- **WorkOS** allows for additional Authentification components [here](https://workos.com/docs?_gl=1*1lp38wf*_up*MQ..*_gs*MQ..&gclid=CjwKCAjw8uTQBhAdEiwAVvtJyiDnuTToeXJbBTP_y3VVI0h1rPJ2xGbXGE3HJoVf7-13ob9aktQ5DhoCwLYQAvD_BwE&gbraid=0AAAAACcEmgpoWDNXnqRSX44dZp-Ovgzx0)
    - Single Sign-On [documentation](https://workos.com/docs/authkit/sso)
    - Social Logins [documentation](https://workos.com/docs/authkit/social-login)
- **Rose Petal Tea** article for fun [here](https://www.inspirededibles.ca/2021/06/rose-petal-tea-warm-or-iced.html)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs) part of password hasing for user Authentification. 


#### **style:** 
- `frameworks and links associated`

- Filler Text [typographic](https://generator.lorem-ipsum.info/)
    - Lorem Ipsum 
- Google Fonts [here](https://fonts.google.com/)
- Images aspect Ratio **3:2** for MainCarousel

#### **helpful hint:** 
- `useful hints for future projects to go faster`
- console log testing with `ctr-alt-l` 
- Always Stay Positive & Triple Check Permissions :)
- Material UI `sx` Comparison Table (justification): 

| **Feature** | **Using the sx Prop (<Box sx={{ p: 2 }} />)** | **Using Top-Level Props (<Box p={2} />)** |
| :--- | --- | --- |
| MUI Version Status | Modern standard and highly recommended. | Deprecated / Removed in newer versions. |
| Typing Support | Perfect TypeScript autocomplete coverage. | Poor or non-existent typing in newer releases. |
| CSS Overriding | Predictable behavior as a single source of truth. | Complex and buggy when combining different props. |
| Advanced Features | Supports nested selectors, pseudo-classes, media queries. | Limited strictly to simple spacing and alignment. |

**TSX**

```
// ❌ Deprecated / Broken Practice
<Box p={2} color="primary.main" className="custom-class" />

// ✅ Best Practice
<Box sx={{ p: 2, color: 'primary.main', '&:hover': { opacity: 0.8 } }} />

```




<!-- 
### TODO stx: 
Future Structure (stx):
backend
frontend
images
screenShots [contains video link]
troubleShooting [contains issues resolved]

HOME page
Rose Varieties General with LLM for Scraped for General Information (questioning) Page
Location Rose Gardens (Maps) - Today's Weather Based on Location
Rose Tea Page Making - Zen Phrases LLM (generation? pin the phrases you like?) if logged in
Not Found Page

2. The Fresh Petal MethodPrep the teapot: Preheat your teapot by swirling a small amount of boiling water in it for 5 minutes, then discard the water.Steep: Place about 2 loosely packed cups of fresh rose petals into the teapot. Pour 3 cups of near-boiling water (around \(200^{\circ}\text{F}\) or \(93^{\circ}\text{C}\)) over the petals.Wait: Cover the teapot and let steep for 5 to 10 minutes. The water will absorb a delicate flavor and a faint pink/yellow hue.
---
https://www.inspirededibles.ca/2021/06/rose-petal-tea-warm-or-iced.html
---
3. The Dried Petal/Bud MethodDrying: Spread your freshly picked petals or whole buds on a baking sheet or screen, and allow them to air-dry in a cool, well-ventilated area for 2 to 3 weeks until crisp.Steep: Use about 1 tablespoon of dried petals or 1 to 2 teaspoons of dried buds per cup of hot water. Steep covered for 7 to 10 minutes to allow the flavors to properly rehydrate and extract.
---
https://www.learningherbs.com/blog/rosebud-tea#gsc.tab=0
---
4. The Simmer Method (Concentrated)For a deeper, more robust flavor, use this traditional decoction method:Place the rose petals or buds in a small saucepan and cover with cold water.Bring to a gentle simmer over medium-high heat.Let simmer for 5 to 15 minutes, or until the petals lose their color and the liquid darkens.Strain the liquid, sweeten with a bit of sugar or honey, and serve hot or chilled.
---
https://the-tea-chest.blog/2020/06/20/how-to-make-rose-tea/
---
-->
