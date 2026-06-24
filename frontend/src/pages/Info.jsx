//COMMENTS: Components
import InfoCard from '../components/InfoCard';
//COMMENT: material UI components that factor in... 
import { Box, Typography } from '@mui/material';

const InfoPage = () => {
    
    return (
        <Box 
            sx={{
                margin: "70px auto",
                width: "80%",
                padding: "40px 0",
                
            }} >
            <Typography variant="h3" textAlign="center">
            A Brief History of Roses
            </Typography>
           
                <Box sx={{ textAlign: 'justify'
                   }}>
                    <p>Roses are among the oldest cultivated flowers in human history. Wild roses evolved millions of years ago, with fossil evidence suggesting rose ancestors existed at least 35 million years ago. Modern garden roses, which exist in a diverse array of forms globally, are the evolutionary descendants of rose-like ancestors that inhabited the Northern Hemisphere approximately 33 to 23 million years ago. 
                    Evidence of these ancient plants is preserved within the fossil record of the Oligocene epoch, with specimens discovered across Europe, Asia, and western North America. During this era, the prevailing temperate climate and abundant insect populations created an environment very similar to the conditions that roses continue to thrive in today. 
                    Paleontological examinations have identified these fossils as precursors to the genus by recognizing key morphological traits that persist in contemporary wild species, such as five-petaled floral structures, characteristic serrated oval foliage, and the presence of vibrant, colorful hips.
                    </p>
                </Box>
            <Typography variant="h5" textAlign="center">
            Ancient Origins (3000 BCE–500 BCE)
            </Typography>
                  <Box sx={{ textAlign: 'justify',
                    py: 2,
                   }}>
                    The first known cultivation of roses likely occurred in ancient China around 3000 BCE. Early civilizations in Mesopotamia, Persia, Egypt, and China valued roses for their fragrance, medicinal properties, and ceremonial uses. Written evidence of rose cultivation appears in Mesopotamia around 2200 BCE. 
                    The genetic foundation of modern roses lies in early species like Rosa hilliae, which typically featured five single petals. These ancestral varieties include the dog rose (Rosa canina), often utilized in hedging, and the Scotch rose (Rosa pimpinellifolia),
                    a resilient shrub that flourishes in harsh seaside environments. Other foundational species include Rosa gallica from southern Europe, Rosa carolina from the eastern United States, and the hardy Rosa blanda, native to the American prairies. 
                    The transformation of wild roses into diverse garden cultivars is a historical process that may date back to 3,000 BCE in China. In these early civilizations, roses served various roles, from the production of rosewater and medicinal oils to use as celebratory confetti. Historical records by Confucius indicate that roses were a staple in the Imperial Palace gardens by 500 BCE,
                    a period during which the emperor’s library housed extensive literature on the flower. Notably, China was the exclusive origin of yellow roses; since no wild roses in Europe possessed this pigment, all modern yellow varieties trace their lineage back to Chinese ancestors.
                    
                </Box>
            <Typography variant="h5" textAlign="center">
            Roses in the Classical World
            </Typography>

                    <Box sx={{ textAlign: 'justify',
                    py: 2,
                   }}> 
                   In Greco-Roman culture, the rose was a profound symbol of beauty, love, and opulence. The Romans, in particular, established vast gardens to support their extensive use of the flower in religious rites, perfumes, and public festivities. 
                    This high demand transformed rose oil and water into significant commodities within Persian and Mediterranean trade networks.The Roman passion for roses was most evident during their extravagant banquets, where petals were lavishly showered upon guests from ceilings. 
                    Beyond private luxury, roses held a prominent place in civic life; during the Rosalia festival, the flower served as a tribute to the deceased and a celebration of the spring harvest, as citizens draped military standards, monuments, and tombs in fresh petals.
                    </Box>
            <Typography variant="h5" textAlign="center">
            The Persian and Islamic Golden Age
            </Typography>

                    <Box sx={{ textAlign: 'justify',
                    py: 2,
                   }}>
                    Modern Iran, formerly Persia, became renowned for cultivating fragrant roses like the Damask rose. The spread of rose water production established the flower as a cultural symbol of paradise and divine beauty. The Damask rose is the primary source for rose water and essential oils. 
                    Likely originating in Persia and the Middle East, it became the focus of a sophisticated Persian distillation industry by the Roman era, supplying culinary, medicinal, and ritual needs.
                    Historically, roses were valued for scent over appearance. The Damask rose was preferred for its potent fragrance and stable essence. Persian extraction techniques set global standards; first-century records show rose oil production was labor-intensive, requiring 7,000 blossoms for one recipe. 
                    Today, rose water remains a staple in Middle Eastern culinary and ceremonial traditions. The Damask rose is still commercially grown in Iran, Turkey, and Bulgaria, with Bulgaria's Valley of Roses serving as a major global supplier for the perfume industry.
                    </Box>

            <Typography variant="h5" textAlign="center">
            Medieval Europe
            </Typography>
            <Box sx={{ textAlign: 'justify'
                   }}>
                    <p>Medieval monasteries grew roses for medicine, perfume, and religious purposes. The flower became a vital symbol for Christianity and European royalty, notably representing the rival houses in England's Wars of the Roses.
                    By the 12th century, the rose was a Christian icon linked to the Virgin Mary, inspiring architectural features like Notre Dame's rose windows. Additionally, the 13th-century Catholic rosary derives its name from "rosarium," meaning a garland of roses.
                    </p>

                    <p> In 15th-century England, the rose symbolized a decades-long power struggle. The House of York used a white rose (Rosa alba) as its crest, while the House of Lancaster adopted a red rose as its rival emblem. This conflict, aimed at ousting King Henry VI starting in 1455, is known as the Wars of the Roses. The war concluded in 1485 at the Battle of Bosworth Field, where Henry Tudor defeated King Richard III. After ascending as King Henry VII, Tudor married Elizabeth of York to reconcile the factions. He created the Tudor rose—merging white and red—to symbolize a unified England.
                    Beyond history and religion, the rose is immortalized in literature through William Shakespeare’s Romeo and Juliet. In Act 2, Scene 2, Juliet Capulet famously argues that a rose would maintain its sweet fragrance regardless of its name, suggesting that Romeo’s character is independent of his family title.
                    </p>
                   </Box>

            <Typography variant="h5" textAlign="center">
            The Rise of Modern Roses
            </Typography>
                <Box sx={{ textAlign: 'justify'
                   }}>
                    <p>The arrival of Chinese roses in Europe marked a significant turning point in botanical history. In the late 18th century, the introduction of Rosa chinensis sparked a major horticultural shift. 
                    By interbreeding these specimens with European varieties—which typically only flowered once annually—botanists developed plants with year-round blooming cycles, intense new colors, and innovative petal structures. This cross-continental genetic integration became the cornerstone for nearly all contemporary garden roses, including the iconic Hybrid Tea.
                    The specific impacts of this horticultural advancement can be attributed to several key factors:
                    </p>
                    <ul>
                        <li>The Four Stud Chinas: The foundation of European breeding rested on four primary imports: Slater's Crimson China, Parson's Pink China (also known as 'Old Blush'), Hume's Blush Tea-scented China, and Parks' Yellow Tea-scented China.</li>
                        <li>Perpetual Flowering: Unlike traditional European roses such as Gallicas and Damasks, which had limited flowering periods, Chinese varieties introduced the genetic trait for repeat blooming from spring through the first frost.</li>
                        <li>Expanded Aesthetics: These roses introduced vibrant, warm tones—specifically true yellows and deep reds—alongside intricate petal arrangements that were previously non-existent in Western varieties.</li>
                    </ul>
                </Box>

                <Typography variant="h5" textAlign="center">
                The 19th Century Rose Revolution
                </Typography>
                <Box sx={{ textAlign: 'justify'
                   }}>
                    <p>Rose cultivation surged during the early 19th century, largely fueled by the patronage of Joséphine de Beauharnais. Her world-renowned rose gardens at Malmaison served as the site for the development of thousands of new cultivars, laying the groundwork for the modern hybrid tea rose.
                    </p>
                    <p>
                    During the Victorian era, floriography—a visual language using flowers to represent specific emotions—emerged as a way for individuals to navigate strict social codes regarding the expression of affection. 
                    This practice was popularized in the United Kingdom and the United States by Charlotte de La Tour’s 1819 publication, Le Langage Des Fleurs. De La Tour based her work on Mary Wortley Montagu’s assertions that these floral systems were rooted in Turkish harem traditions. 
                    Morley notes that floriography provided a method for discrete, coded communication and is seeing a modern revival. In this symbolic system, lilies represented loved ones, while poppies signified peace. Roses held complex meanings based on hue: red denoted passion, pink expressed admiration, yellow suggested friendship, white meant secrecy, and crimson was used for mourning.
                    </p>

                    <p>The 'Noisette roses,' which constitute the first group of hybrids bred in America, were established in 1800s South Carolina. The lineage began when Louis Noisette, a nurseryman in France, sent an 'Old Blush' China rose to his brother Philippe in the U.S. Philippe shared the specimen with his neighbor, John Champneys, who successfully crossed it with the climbing musk rose (Rosa moschata) to create 'Champneys' Pink Climber.' When seeds from this new variety were returned to France, they produced the Noisette Carnée climber; subsequent crossing of Noisette varieties with tea roses led to further hybrid development.
                    </p>
                </Box>
                <Typography variant="h5" textAlign="center">
                Roses Today
                </Typography>
                <Box sx={{ textAlign: 'justify'
                   }}>
                   <p>The contemporary co-evolution of roses has yielded a remarkable variety of expressions, ranging from gardens and teas to festivals and fashion-forward creative endeavors. Presently, the globe is home to more than 150 rose species and tens of thousands of cultivated varieties. As the most popular ornamental flower in the world, roses are integral to perfumery, cosmetics, culinary arts, and various cultural celebrations.
                    </p>
                    <p> The lineage of modern roses traces back to hybrid teas, which were later joined by floribundas and grandifloras. Developed in the late 19th century by the Dutch-based Poulsen company—which remains active today—floribundas were created by crossing dwarf China roses with small hybrid teas to yield compact shrubs featuring clusters of small, double blossoms.

                    Emerging in the 1950s, grandiflora roses resulted from crosses between hybrid teas and floribundas. While these tall, hardy bushes with full blooms are common in modern gardens, they generally lack the intense fragrance characteristic of Old World roses. Their popularity for large-scale garden displays stems from their standardized form and a diverse, vibrant palette of colors.
                    </p>

                    <p>The narrative of rose cultivation continues to evolve as growers worldwide introduce new hybrids annually in pursuit of the ideal rose. At the same time, species roses preserve the foundational gene pool, and old roses maintain a dedicated following among those who value their natural growth patterns and powerful scents.
                    </p>
                </Box>
                <Typography variant="h5" textAlign="center">
                Symbolism Through the Ages
                </Typography>
                <Box sx={{ textAlign: 'justify'
                   }}>
                   <p>
                    The multifaceted symbolism of the rose has been shaped by various cultures throughout history, representing concepts such as:
                    </p>
                    <ul>
                        <li>Romance and love</li>
                        <li>Perfection and beauty</li>
                        <li>Confidentiality "sub rosa"</li>
                        <li>Sacred devotion</li>
                        <li>Authority and royalty</li>
                        <li>Tribute and remembrance</li>
                    </ul>
                    
                    <p>
                    As a result, the contemporary rose is far more than a mere botanical specimen; it represents the culmination of millennia of selective breeding, international trade, and cultural synthesis spanning the Middle East, Asia, Europe, and the Americas.
                    </p>
                </Box>
            <Typography variant="h4" textAlign="center">
            Teas, Fashion, Festivals
            </Typography>
            <Box 
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, 300px)',
                    justifyContent: 'space-around',
                    rowGap: '20px',
                    columnGap: '1.33%',
                    mx: 'auto',       // Shorthand for margin-left: auto and margin-right: auto
                    maxWidth: '100%', // Ensures it doesn't overflow its parent container
                }}
                    >
                <InfoCard />
                <InfoCard />
                <InfoCard />
            </Box>

        </Box>
    )
}

export default InfoPage;