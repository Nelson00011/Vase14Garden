import { DataAPIClient } from "@datastax/astra-db-ts";
import { PuppeteerWebBaseLoader } from 'langchain/document_loaders/web/puppeteer';

import OpenAI from "openai";

import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

import "dotenv/config" 

//COMMENT: Type clearly defined
type SimilarityMetric = "dot_product" | "cosine" | "euclidean"

const { ASTRA_DB_NAMESPACE, 
    ASTRA_DB_COLLECTION, 
    ASTRA_DB_API_ENDPOINT, 
    ASTRA_DB_APPLICATION_TOKEN, 
    OPENAI_API_KEY } = process.env

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const vaseData = [
    "https://en.wikipedia.org/wiki/Rose",
    "https://en.wikipedia.org/wiki/Garden_roses",
    "https://nationaldaycalendar.com/lists/7-most-beautiful-rose-gardens-in-the-us",
    "https://en.wikipedia.org/wiki/List_of_Rosa_species",
    "https://en.wikipedia.org/wiki/Rosa_rugosa",
    "https://en.wikipedia.org/wiki/Rosa_multiflora",
    "https://en.wikipedia.org/wiki/Rosaceae",
    "https://en.wikipedia.org/wiki/Rosales",
    "https://en.wikipedia.org/wiki/Hybrid_tea_rose",
    "https://en.wikipedia.org/wiki/Rosa_%27Soleil_d%27Or%27"
]

const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN);

const db = client.db(ASTRA_DB_API_ENDPOINT, { namespace: ASTRA_DB_NAMESPACE })

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 512,
    chunkOverlap: 100
});

const createCollection = async (similarityMetric: SimilarityMetric = "dot_product") => {
    const res = await db.createCollection(ASTRA_DB_COLLECTION, {
        vector: {
            dimension: 1536,
            metric: similarityMetric,
        }
    })
    console.log(res)
}

const loadSampleData = async () => {

   const collection = await db.collection(ASTRA_DB_COLLECTION)

   for await ( const url of vaseData){

    const content = await scrapePage(url)
    const chunks = await splitter.splitText(content)

    for await (const chunk of chunks){
        const embedding = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: chunk,
            encoding_format: "float"
            });

        const vector = embedding.data[0].embedding
        //COMMENT: vector console.log
        console.log(vector)

        const res = await collection.insertOne({
            $vector: vector, 
            text: chunk
        })
         //COMMENT: res console.log
        console.log(res)

    }
   }
}

const scrapePage = async(url: string) => {
    const loader = new PuppeteerWebBaseLoader(url, {
        launchOptions: {
            headless: true
        },
        gotoOptions: {
            waitUntil: "domcontentloaded"
        },
        evaluate: async (page, browser) => {
            const result = await page.evaluate(() => document.body.innerHTML)
            await browser.close()
            return result
        }
    })

    return ( await loader.scrape())?.replace(/<[^>]*>?/gm, '')
}

createCollection().then(()=> loadSampleData())
