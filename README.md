<h1 align="center">Rose Grounds</h1>

`main image`

## Description:
**Garden** is an Ecology React.js app that allows users to look up their favorite roses species: garden locations, varieties, teas. The option to subscribe to a Newletter is provided on the front page for interested patrons.

- Client side (frontend) utilizes React.js & react-router-dom in combination with Material MUI create themes to provide cohesive structure.
- Server side (backend) uses Node.js / pgvector in combination with PostGreSQL to provide database structure on the frontend when interfacing between client and server side.
- Material UI in combination with traditional CSS is used for a cohesive design aesthetic.

## Technology Stack
- **Frontend/Client:** React.js, HTML5, CSS, Material UI, 
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
    - MUI, `react-router-dom`, redux, formik, etc... (see resources) do both material UI and Google icons in case of depreciation
```
> npx create-react-app <project name>
> cd <project name>
> npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
> npm install --save google-icon
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
> mkdir <project name>
> cd <project name>
> npm install @datastax/astra-db-ts langchain openai dotenv
> npm install @langchain/community @langchain/core puppeteer
> npm install langchain puppeteer
> npm install ai
> npm install ts-node
> npm install @ai-sdk/react
> npx ai-elements@latest
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
- **Github Copilot** [documentation](https://github.com/features/copilot/ai-code-editor?utm_campaign=copilot-brand&utm_medium=sem&utm_source=google&ocid=AIDcmmh2h80ugd_SEM__k_Cj0KCQjw2_TQBhCnARIsAF3-XhyzJBjUdIPSzw7jXkjkb13MyI-qhmFerOkJ56HK2BjTuC2QGIokMtYaAsFNEALw_wcB_k_) 
- **PostMan** for API Tests [here](https://www.postman.com/)
    - jsonwebtoken / [jwt](https://jwt.io/) for Authentification & install [here](https://www.npmjs.com/package/jsonwebtoken)
    - jwt Debugger [here](https://jwt.io/#debugger-io)
- **WorkOS** allows for additional Authentification components [here](https://workos.com/docs?_gl=1*1lp38wf*_up*MQ..*_gs*MQ..&gclid=CjwKCAjw8uTQBhAdEiwAVvtJyiDnuTToeXJbBTP_y3VVI0h1rPJ2xGbXGE3HJoVf7-13ob9aktQ5DhoCwLYQAvD_BwE&gbraid=0AAAAACcEmgpoWDNXnqRSX44dZp-Ovgzx0)
    - Single Sign-On [documentation](https://workos.com/docs/authkit/sso)
    - Social Logins [documentation](https://workos.com/docs/authkit/social-login)
- **Rose Petal Tea** article for fun [here](https://www.inspirededibles.ca/2021/06/rose-petal-tea-warm-or-iced.html)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs) part of password hasing for user Authentification. 

- [MASTRA](https://mastra.ai/docs/rag/overview) for RAG (Retrieval-Augmented Generation) that supports [OpenAI](https://openai.com/), Current OpenAI Embedding Models:
    - `text-embedding-3-small` A highly efficient, low-cost model. It natively features 1536 dimensions but can be programmatically shortened (e.g., to 512 dimensions) without losing its underlying concept-representing properties
    - `text-embedding-3-large` OpenAI's most capable embedding model. It natively supports up to 3072 dimensions, yielding higher accuracy for complex tasks, and can also be shortened to lower dimensions
    
    [DOCUMENTATION](https://developers.openai.com/api/docs/guides/embeddings)
    - General Rules for CHUNKING [guide](https://www.kaggle.com/discussions/general/503436)



#### API
##### Plant Based API
- Plant API Trefle API Service for [Node.js](https://github.com/aself101/trefle-api)
    - Security NOTE: API calls can be through backend / server or frontend / client directly to TREFLE API [DIRECTLY](https://docs.trefle.io/docs/advanced/client-side-apps) client-side applications less favored (provided an option)
- Plant API [documentation](https://perenual.com/docs/api)
- Plant Database API with taxomony and Classification, Characteristics, Plant Growth Requirements - [API Farmer](https://apifarmer.com/plant-database-api/)

##### Weather based API
 - Weather Data API [open source](https://open-meteo.com/en/docs), variables included in main page. Government data listed as references as well. 
 - Google DeepMind API [AI weather](https://deepmind.google/science/weathernext/) forestcast. 

##### Location Based API
- Google Maps for React Applications [documentation](https://developers.google.com/codelabs/maps-platform/maps-platform-101-react-js#2) and [Platform](https://mapsplatform.google.com/lp/maps-apis/)
- Open Mape Tiles [styles](https://openmaptiles.org/styles/) and [schema](https://openmaptiles.org/schema/), including [maptiler](https://www.maptiler.com/server/) for deploying private, fast maps.

##### Protein Folds Based API
- AlphaFold Protein Structure Database [documentation](https://alphafold.ebi.ac.uk/), to compare for similar species and fun co-evolution fun facts!



#### **style:** 
- `frameworks and links associated`

- Filler Text [typographic](https://generator.lorem-ipsum.info/)
    - Lorem Ipsum 
- Google Fonts [here](https://fonts.google.com/)

##### Material UI [Documentation](https://mui.com/material-ui/getting-started/)
- Images aspect Ratio **3:2** for MainCarousel
- Material UI icons [catalogue](https://mui.com/material-ui/material-icons/?query=info) vs Google [Icons](https://fonts.google.com/icons)

#### **helpful hint:** 
- `useful hints for future projects to go faster`
- console log testing with `ctr-alt-l` 
- Always Stay Positive & Triple Check Permissions :)
- Material UI `sx` to mimic periods, depending on text length / static / imported: 
```
py: 2, // 'py' applies padding to both top and bottom (Theme spacing unit, e.g., 2 = 16px)
```

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

| **Feature** | **Github Copilot** | **[CodeRabbit](https://www.coderabbit.ai/)** |
| :--- | --- | --- |
| Primary Use| General coding assistance, completion, and workspace chat. | Pull request review, deep bug detection, and code quality control.|
| Integrations | Primarily native to GitHub, though supports IDE extensions. | Works across GitHub, GitLab, Bitbucket, and Azure DevOps.|
| Analysis Depth | Line-by-line completion and conversational chat; reviews are essentially quick spellchecks. | Advanced analysis, structural and performance problem catching (e.g., N+1 database issues). |
| Review Rules | Basic instructions via markdown. | Deep custom rules and path-scoped configurations (.coderabbit.yaml). |

--------

Retrieval-Augmented Generation (**RAG**) connects LLM to fresh, private or specific information:

| **Stage** | **What it does** | **Typical Tool/Framework** |
| :--- | --- | --- |
| Document | Holds raw, unorganized text. | PDF, Markdown, HTML |
| Chunking | Splits text into logical blocks. | LangChain Text Splitters, LlamaIndex |
| Embedding | Translates text blocks to numbers. | OpenAI, Hugging Face Transformers |
| Vector DB | Indexes and finds similar vectors. | Pinecone, Qdrant, Milvus, Chroma |

**Vector DB** is required for User Question -> Embed Query - > Retrieve Chunks -> LLM Answer? 



<!-- 
### TODO stx: 
Future Structure (stx):
backend
frontend
images
screenShots [contains video link]
troubleShooting [contains issues resolved]

NavBar - [RAG search (i), Info with Tea/Festivals/Fashion, Mapping to Gardens / TripAdvisor, TOOD: Nursery Growth Tips]
HOME page - [RAG search (i), Info with Tea/Festivals/Fashion, Mapping to Gardens / TripAdvisor]
RAG search (i) page - Rose Varieties General with LLM for Scraped for General Info with Tea/Festivals/Fashion - Static Page with links to new Webpages
Mapping to Gardens / TripAdvisor - Google Maps API request Call for establishing gardens near YOU! 

FOOTER - [Mission Statement / Our Team, Terms & Conditions / Privacy Policy, Brief History / Info page, Rose Varities (wikipedia link), Advise for Growing Roses / Nurseries, Contact Info]

- Connect "Garden" to gardens pages around the world where you can explore further and have a full page -> direct to trip planner? 

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
