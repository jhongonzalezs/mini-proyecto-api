// routes/superheroes.js
const express = require('express');
const router = express.Router();

// Datos de superhéroes
const superheroes = [
    {
        id: 1,
        name: 'Superman',
        powers: ['Super strength', 'Flight', 'X-ray vision', 'Heat vision', 'Invulnerability'],
        weaknesses: ['Kryptonite', 'Magic', 'Red sun radiation'],
        image: 'https://static.dc.com/dc/files/default_images/Char_Gallery_Superman_SUP01_16_5b9b02501915d5.80725381.jpg?w=1200'
    },
    {
        id: 2,
        name: 'Wonder Woman',
        powers: ['Super strength', 'Flight', 'Combat skills', 'Lasso of Truth', 'Super speed'],
        weaknesses: ['Piercing weapons', 'Loss of her bracelets'],
        image: 'https://static.dc.com/2023-12/char_gallery_wonderWoman_1.jpg?w=1200'
    },
    {
        id: 3,
        name: 'Batman',
        powers: ['Intelligence', 'Martial arts', 'Gadgets', 'Stealth', 'Peak human condition'],
        weaknesses: ['Human vulnerability', 'Guilt over his parents\' death'],
        image: 'https://static.dc.com/2024-03/batman_charGal_2024_1.jpg?w=1200'
    },
    {
        id: 4,
        name: 'Spider-Man',
        powers: ['Wall-crawling', 'Spider-sense', 'Super strength', 'Agility', 'Web-shooting'],
        weaknesses: ['Ethyl chloride pesticide', 'His loved ones'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Spider-Man.jpg'
    },
    {
        id: 5,
        name: 'Iron Man',
        powers: ['Powered armor suit', 'Genius-level intellect', 'Energy repulsors', 'Flight', 'Advanced weaponry'],
        weaknesses: ['Dependency on the armor', 'Heart condition'],
        image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/04/iron-man-25-curiosidades-vengador-dorado-marvel_25.jpg?tf=1920x'
    },
    {
        id: 6,
        name: 'Thor',
        powers: ['God of Thunder', 'Super strength', 'Flight', 'Weather manipulation', 'Immortality'],
        weaknesses: ['Warrior’s madness', 'Mjolnir’s loss'],
        image: 'https://i0.wp.com/www.tomosygrapas.com/wp-content/uploads/2022/08/Thor-Banner.jpg?w=849&ssl=1'
    },
    {
        id: 7,
        name: 'Captain America',
        powers: ['Super soldier serum', 'Enhanced strength', 'Agility', 'Master tactician', 'Vibranium shield'],
        weaknesses: ['Human vulnerability', 'Moral code'],
        image: 'https://static.wikia.nocookie.net/marveldatabase/images/b/b1/Captain_America_Vol_6_2_Textless.jpg/revision/latest?cb=20110719042719'
    },
    {
        id: 8,
        name: 'The Flash',
        powers: ['Super speed', 'Time travel', 'Intangibility', 'Enhanced reflexes', 'Speed Force connection'],
        weaknesses: ['Cold temperatures', 'Time paradoxes'],
        image: 'https://static.dc.com/dc/files/default_images/Char_Gallery_Flash_758_6055049612af35.61135649.jpg?w=1200'
    },
    {
        id: 9,
        name: 'Aquaman',
        powers: ['Super strength', 'Aquatic telepathy', 'Enhanced swimming', 'Trident mastery', 'Underwater breathing'],
        weaknesses: ['Dehydration', 'Pollution'],
        image: 'https://static.dc.com/2023-11/aquaman_char_gallery_3.jpg?w=1200'
    },
    {
        id: 10,
        name: 'Green Lantern',
        powers: ['Power ring', 'Energy constructs', 'Flight', 'Force fields', 'Interstellar travel'],
        weaknesses: ['Power ring’s charge', 'Fear'],
        image: 'https://static.dc.com/dc/files/default_images/HJGLC_1_02_color_rev_final-Gallery_57fc364b710481.90075369.jpg?w=1200'
    },
    {
        id: 11,
        name: 'Hulk',
        powers: ['Super strength', 'Invulnerability', 'Regeneration', 'Limitless stamina', 'Anger empowerment'],
        weaknesses: ['Emotional vulnerability', 'Human form'],
        image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/03/hulk-11-superheroes-que-vencieron_9.jpg?tf=1920x'
    },
    {
        id: 12,
        name: 'Black Panther',
        powers: ['Enhanced strength', 'Agility', 'Vibranium suit', 'Master tactician', 'Stealth'],
        weaknesses: ['Loss of vibranium', 'Human vulnerability'],
        image: 'https://i0.wp.com/www.tomosygrapas.com/wp-content/uploads/2016/05/wakanda_cover.jpg'
    },
    {
        id: 13,
        name: 'Doctor Strange',
        powers: ['Sorcery', 'Mystic arts', 'Time manipulation', 'Astral projection', 'Teleportation'],
        weaknesses: ['Physical vulnerability', 'Magic limitations'],
        image: 'https://www.akiracomics.com/imagenes/poridentidad?identidad=a8ca0f63-fe79-4c1f-8447-7ad488b2af27&ancho=850&alto='
    },
    {
        id: 14,
        name: 'Scarlet Witch',
        powers: ['Reality warping', 'Telekinesis', 'Mind control', 'Energy manipulation', 'Teleportation'],
        weaknesses: ['Mental instability', 'Overuse of powers'],
        image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/09/scarlet-witch-comic-social-featured.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5'
    },
    {
        id: 15,
        name: 'Cyborg',
        powers: ['Cybernetic enhancements', 'Super strength', 'Technopathy', 'Advanced weaponry', 'Flight'],
        weaknesses: ['Technology dependency', 'Human vulnerability'],
        image: 'https://static.dc.com/dc/files/default_images/GalleryChar_1900x900_JL4_3_52ab719cd80487.15199749.jpg?w=1200'
    },
    {
        id: 16,
        name: 'Green Arrow',
        powers: ['Master archer', 'Martial arts', 'Stealth', 'Gadgets', 'Peak human condition'],
        weaknesses: ['Human vulnerability', 'Limited resources'],
        image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/04/10-best-green-arrow-comics-for-non-green-arrow-fans.jpg?q=70&fit=crop&w=1100&h=618&dpr=1'
    },
    {
        id: 17,
        name: 'Ant-Man',
        powers: ['Size manipulation', 'Super strength (when enlarged)', 'Insect communication', 'Stealth', 'Genius-level intellect'],
        weaknesses: ['Human vulnerability', 'Limited stamina when enlarged'],
        image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Split-image-of-Ant-Man-comic-book-feature.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5'
    },
    {
        id: 18,
        name: 'Wolverine',
        powers: ['Regeneration', 'Adamantium skeleton', 'Enhanced senses', 'Super strength', 'Combat skills'],
        weaknesses: ['Adamantium poisoning', 'Memory loss'],
        image: 'https://cdn.mos.cms.futurecdn.net/vxcLorRdyZPjbmoZ7Sf6VQ-650-80.jpg.webp'
    },
    {
        id: 19,
        name: 'Vision',
        powers: ['Density manipulation', 'Super strength', 'Intangibility', 'Flight', 'Energy blasts'],
        weaknesses: ['Emotional vulnerability', 'Power dependency'],
        image: 'https://frikazzos.com/wp-content/uploads/2022/07/vision-poderes.jpg'
    },
    {
        id: 20,
        name: 'Star-Lord',
        powers: ['Master tactician', 'Expert pilot', 'Gadgets', 'Enhanced durability', 'Leadership'],
        weaknesses: ['Human vulnerability', 'Overconfidence'],
        image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=820x10000:format=jpg/path/s68b38128fedb8160/image/ibe84dad2bb0538ab/version/1551825199/image.jpg'
    }
];



/**
 * @swagger
 * components:
 *   schemas:
 *     Superhero:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The superhero's unique identifier
 *         name:
 *           type: string
 *           description: The name of the superhero
 *         powers:
 *           type: array
 *           items:
 *             type: string
 *           description: A list of the superhero's powers
 *         weaknesses:
 *           type: array
 *           items:
 *             type: string
 *           description: A list of the superhero's weaknesses
 *         image:
 *           type: string
 *           description: A URL to the superhero's image
 *       example:
 *         id: 1
 *         name: Superman
 *         powers:
 *           - Super strength
 *           - Flight
 *           - X-ray vision
 *         weaknesses:
 *           - Kryptonite
 *           - Magic
 *           - Red sun radiation
 *         image: https://www.dccomics.com/sites/default/files/styles/comic_book_preview/public/char_hero_sup_20190116_sup_char_thumb_5c4030a93e48e6.74300792.jpg
 */

/**
 * @swagger
 * /superheroes:
 *   get:
 *     summary: Get list of all superheroes
 *     description: Retrieves a list of all superheroes with their respective details.
 *     responses:
 *       '200':
 *         description: A list of superheroes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Superhero'
 */

/**
 * @swagger
 * /superheroes/{id}:
 *   get:
 *     summary: Get a superhero by ID
 *     description: Retrieves details of a superhero based on their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the superhero
 *     responses:
 *       '200':
 *         description: Superhero details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Superhero'
 *       '404':
 *         description: Superhero not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

// Ruta para obtener todos los superhéroes
router.get('/', (req, res) => {
    res.json(superheroes);
});

// Ruta para obtener un superhéroe por ID
router.get('/:id', (req, res) => {
    const hero = superheroes.find(s => s.id === parseInt(req.params.id));
    if (hero) {
        res.json(hero);
    } else {
        res.status(404).json({ message: 'Superhero not found' });
    }
});

module.exports = router;
