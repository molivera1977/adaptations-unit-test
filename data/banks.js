/* ═══════════════════════════════════════════════════════
   ANIMAL ADAPTATIONS — TEST QUESTION BANKS (built 2026-11-17; test Fri 11/20)
   Written new for this year's class (Marcos 10/21: never last year's test or review).
   Same words and same parts of the article as the review, with different sentences
   and stems. Every item is as hard as its review item: the review and the test are
   matching forms (Marcos 11/3: the easiest-to-hardest rule is for math; a reading review
   matches its test). tools/check-banks.js checks it: vocabulary and CLOZE choices are the
   same kind of word as the answer, and the article questions use real details from the
   wrong part of the article as wrong answers.
   Marcos 11/17: all 29 vocab words on every form.
     VOCAB_BANK  29 items, each word once, NEW: 15 Used Right + 14 Endings, the review Set 1's kinds
                 (Dollars and Sense rule: "Then make new ones for the test. Half Used Right and half
                 Endings."), no sentence copied from the review
     COMP_BANK   P01–P10 article details (in the article's own words) · P11–P20 Part A / Part B pairs
     CLOZE_BANK  C01–C29 (same word per id on every form; new sentence)
   answer = index into choices (choices are shuffled at run time).
   page = the article page (100–103) the story panel opens to.
   The teacher dashboard reads this file (REVIEW_FILES) — keep ids stable.
═══════════════════════════════════════════════════════ */

/* Vocabulary: the Vocab Practice's two kinds, with four choices. Used Right: four sentences, one uses the
   word the right way. Endings: the start of a sentence with the word underlined, and four endings, one
   that fits what the word means. */
function aaUsedRight(word) { return `Which sentence uses <b>${word}</b> the right way?`; }
function aaEnding(stem, word) {
  const underlined = stem.replace(new RegExp('\\b' + word + '\\b', 'i'), m => `<u>${m}</u>`);
  // the hidden period: the voice stops after the blank before "Which ending…" (Marcos 11/3, Dollars and Sense);
  // the question sits on its own line with space above it
  return `${underlined} __________<span class="say-stop" style="display:none">.</span> <span class="end-ask" style="display:block;margin-top:0.75em">Which ending makes the most sense?</span>`;
}

window.VOCAB_BANK = [
  /* ── USED RIGHT: WHICH SENTENCE USES THE WORD THE RIGHT WAY? (the 15 odd-numbered words) ── */
  { id:"V01", q:aaUsedRight("predator"), choices:["A predator is the cozy pillow on Grandma's couch.", "A ladybug is a tiny predator that eats the aphids on Mom's roses.", "The predator is a rainbow that shows up after a storm.", "My predator is the number on my house."], answer:1 },
  { id:"V03", q:aaUsedRight("adaptation"), choices:["An adaptation is the bus that takes us to school.", "My adaptation is a funny joke I tell.", "A snake's stretchy jaw, a handy adaptation, lets it swallow food bigger than its head.", "The adaptation is a board game with dice."], answer:2 },
  { id:"V05", q:aaUsedRight("poisonous"), choices:["The poisonous milk was cold and fresh, so we drank it all.", "We happily ate the poisonous salad for a good, healthy meal.", "The poisonous orange juice was a healthy breakfast.", "Some jellyfish are poisonous, so swimmers stay away from their long tentacles."], answer:3 },
  { id:"V07", q:aaUsedRight("behavioral trait"), choices:["Penguins huddle close together for warmth, one behavioral trait that keeps them alive in the cold.", "A behavioral trait is a penguin's black and white feathers.", "A behavioral trait is a shoe you wear on your foot.", "The behavioral trait is a song on the radio."], answer:0 },
  { id:"V09", q:aaUsedRight("harsh"), choices:["We napped on the warm grass in the harsh, gentle sunshine.", "The harsh winter on the mountaintop froze every pond solid.", "A harsh snowstorm is warm and calm.", "The harsh pillow was soft and fluffy."], answer:1 },
  { id:"V11", q:aaUsedRight("annual"), choices:["The annual school picnic happens every five minutes.", "An annual is a kind of soup.", "Grandpa's annual checkup at the doctor's office is every January.", "The annual sunset lasts all week."], answer:2 },
  { id:"V13", q:aaUsedRight("tundra"), choices:["The tundra is a busy city full of tall buildings.", "Monkeys swing through the steamy tundra of the rain forest.", "We swam in the tundra at the water park.", "Polar bears roam the icy tundra along the Arctic coast."], answer:3 },
  { id:"V15", q:aaUsedRight("lichen"), choices:["Lichen slowly spread in gray-green spots across the barn's roof.", "The lichen barked when the doorbell rang.", "Lichen is a sweet drink made from oranges.", "We wore lichen on our feet to go hiking."], answer:0 },
  { id:"V17", q:aaUsedRight("sources"), choices:["The sources jumped over the fence.", "Beehives are the farmer's main sources of honey.", "Sources are the pages of a coloring book.", "The sources are a kind of shoe."], answer:1 },
  { id:"V19", q:aaUsedRight("dribbles"), choices:["The waterfall dribbles with a giant, roaring crash.", "The baby dribbles her blocks into a tall tower.", "Syrup dribbles slowly over the edge of my pancakes.", "Dad dribbles the car to work each day."], answer:2 },
  { id:"V21", q:aaUsedRight("nocturnal"), choices:["My nocturnal alarm clock wakes me at sunrise.", "The nocturnal butterfly rests after dark and is busy only in bright sunshine.", "Nocturnal means a kind of breakfast cereal.", "The nocturnal possum wakes up at dusk and looks for bugs in the dark."], answer:3 },
  { id:"V23", q:aaUsedRight("brutal"), choices:["The brutal cold snap froze the water pipes in our basement.", "The brutal sunrise was soft and pretty.", "Our brutal nap was calm and cozy.", "A brutal hug is gentle and kind."], answer:0 },
  { id:"V25", q:aaUsedRight("marsh"), choices:["The marsh is a kind of pancake.", "Muskrats swim through the tall grass of the wet marsh.", "My marsh is the top step of the stairs.", "We built a sandcastle in the dry marsh at the beach."], answer:1 },
  { id:"V27", q:aaUsedRight("benefit"), choices:["We benefit our socks before we put them on.", "Houseplants benefit from being kept dry in a dark closet for months.", "Students benefit from recess because they come back calm and ready to learn.", "The dog will benefit the ball across the yard."], answer:2 },
  { id:"V29", q:aaUsedRight("pounce"), choices:["The sun will pounce behind the clouds all afternoon.", "Please pounce the milk into your glass.", "We pounce our teeth before bed.", "The mountain lion crouched behind a fallen tree, then sprang to pounce on a deer."], answer:3 },
  /* ── ENDINGS: WHICH ENDING MAKES THE MOST SENSE? (the 14 even-numbered words) ── */
  { id:"V31", q:aaEnding("When Tia sliced the onion, glands near her eyes", "glands"), choices:["filled her eyes with tears.", "made her hair grow longer.", "turned her eyes purple.", "played a loud song."], answer:0 },
  { id:"V33", q:aaEnding("We call an armadillo's hard shell a physical trait, since it is", "physical trait"), choices:["a game the armadillo plays.", "a covering that is part of the armadillo's body.", "a sound the armadillo makes.", "a hole where the armadillo hides."], answer:1 },
  { id:"V35", q:aaEnding("When Dad started the lawn mower, Kim felt vibrations", "vibrations"), choices:["in a painting at a museum far away.", "in a book she read last week.", "in the handle under her hands.", "on the far side of the moon."], answer:2 },
  { id:"V37", q:aaEnding("Every spring, the salmon migrate, so they", "migrate"), choices:["stay in one spot their whole lives.", "climb trees to find nuts.", "dig holes in the backyard.", "swim up the river back to where they hatched."], answer:3 },
  { id:"V39", q:aaEnding("The average dog at the shelter weighs 30 pounds, so most dogs there are", "average"), choices:["about 30 pounds.", "as big as a horse.", "smaller than a mouse.", "made of cotton."], answer:0 },
  { id:"V41", q:aaEnding("The young pianist's talent was extraordinary, so", "extraordinary"), choices:["no one came to hear her play.", "people traveled from far away to hear her play.", "she was asked to stop playing.", "her playing sounded like everyone else's."], answer:1 },
  { id:"V43", q:aaEnding("Mom bought a compact vacuum cleaner because it", "compact"), choices:["takes up the whole hallway.", "is too heavy to lift.", "fits neatly in the small closet.", "needs a truck to move it."], answer:2 },
  { id:"V45", q:aaEnding("The space station has several chambers, so the astronauts move between", "chambers"), choices:["one tiny box with no doors.", "trees and flowers on the moon.", "the swings at the playground.", "separate rooms for sleeping, working, and eating."], answer:3 },
  { id:"V47", q:aaEnding("As the dry summer went on, the pond's water started to decline, and so the pond", "decline"), choices:["got lower and lower.", "got deeper and deeper.", "spilled over its banks.", "turned into chocolate milk."], answer:0 },
  { id:"V49", q:aaEnding("Sitting on the leaf, the green tree frog stayed camouflaged, so the bird", "camouflaged"), choices:["spotted the frog at once.", "flew by without seeing it.", "heard the frog shouting.", "saw the frog's bright red coat."], answer:1 },
  { id:"V51", q:aaEnding("The prairie ecosystem has grass, bison, prairie dogs, and hawks that", "ecosystem"), choices:["never meet or need each other.", "live inside a shoebox.", "need one another to survive.", "are made of plastic."], answer:2 },
  { id:"V53", q:aaEnding("Because the stormy conditions made the sea rough, the fishing boats", "conditions"), choices:["raced far out into the waves.", "lifted off like airplanes.", "turned into submarines.", "stayed tied up at the dock."], answer:3 },
  { id:"V55", q:aaEnding("The workers drilled deep into the bedrock, so they were cutting through", "bedrock"), choices:["the hard stone hidden beneath the dirt.", "soft, fluffy snow.", "a pile of feathers.", "warm, sticky honey."], answer:0 },
  { id:"V57", q:aaEnding("To robins, grasshoppers are tasty prey, so the grasshoppers", "prey"), choices:["chase the robins out of the yard.", "try to hop away when a robin lands nearby.", "teach the robins to sing.", "eat the robins for dinner."], answer:1 },
];

window.COMP_BANK = [
  /* ── PART I: ARTICLE DETAILS (the article's own words) ──────────── */
  { id:"P01", page:101, lvl:1, trap:3, q:"Skunks have a built-in survival system. What do they use to blast a predator? (page 101)", choices:["a horrible-smelling spray made by the glands under their tails","short hair on their muzzles","colors that change to blend in","feet and snouts that clear dirt"], answer:0 },
  { id:"P02", page:101, lvl:1, trap:3, q:"According to page 101, what are adaptations? (page 101)", choices:["the special ways that animals have to survive","the coldest part of winter","holes in the limestone bedrock","the foods caribou find in winter"], answer:0 },
  { id:"P03", page:101, lvl:1, trap:2, q:"Which of these is the example of a behavioral trait on page 101? (page 101)", choices:["birds that migrate south every winter","animals that sense the smallest vibrations in the ground","animals that hear sounds from miles away","birds that build nests in tall trees"], answer:0 },
  { id:"P04", page:101, lvl:1, trap:3, q:"Besides two layers of fur, what else do caribou have to stay warm? (page 101)", choices:["a thick layer of fat","a stomach with four chambers","a log-shaped body","colors that change"], answer:0 },
  { id:"P05", page:101, lvl:1, trap:2, q:"The tip of the caribou’s nose and mouth has a name. What is it? (page 101)", choices:["a muzzle","a snout","a gland","a whisker"], answer:0 },
  { id:"P06", page:102, lvl:1, trap:3, q:"Caribou have unusual stomachs. How many chambers does the stomach have? (page 102)", choices:["four","two","six","ten"], answer:0 },
  { id:"P07", page:102, lvl:1, trap:2, q:"According to page 102, what is easier to find in the large forest area? (page 102)", choices:["food","water holes","phasmids","warm sand"], answer:0 },
  { id:"P08", page:102, lvl:1, trap:2, q:"According to page 102, phasmids look like two kinds of things. What are they? (page 102)", choices:["leaves or twigs","logs in the water","skunk tails","bright flowers"], answer:0 },
  { id:"P09", page:103, lvl:1, trap:3, q:"In Florida’s Everglades, what do alligators clear out with their feet and snouts? (page 103)", choices:["dirt from holes in the limestone bedrock","snow, so they can find food","food in a large forest area","streams of melting snow"], answer:0 },
  { id:"P10", page:103, lvl:1, trap:2, q:"How often does the article say alligators eat? (page 103)", choices:["only a few times each month","over six pounds every day","every winter","every hour"], answer:0 },
  /* ── PART II: PART A / PART B ────────────────────────────────────── */
  { id:"P11", page:101, lvl:3, trap:0, q:"Part A: What is page 101 mostly about? (page 101)", choices:["Animals have body parts and ways of acting that help them survive.","Skunks spray every animal they see.","Caribou are the biggest animals in the tundra.","Birds fly south because they like to travel."], answer:0 },
  { id:"P12", page:101, lvl:2, trap:3, q:"Part B: Which sentence from page 101 best supports the answer to Part A?", choices:["“These include physical traits such as the skunk’s spray and animals with bright colors and markings that warn predators that they are poisonous.”","“Brrrr!”","“Only 4 or 5 feet long, caribou can weigh over 500 pounds.”","“It is covered in short hair.”"], answer:0 },
  { id:"P13", page:101, lvl:3, trap:0, q:"Part A: What can the reader conclude about the Arctic tundra? (page 101)", choices:["It is a very cold place to live.","It is a hot, dry desert.","It is full of tall forests.","It has warm weather all year."], answer:0 },
  { id:"P14", page:101, lvl:2, trap:3, q:"Part B: Which sentence from page 101 best supports the answer to Part A?", choices:["“Imagine living in a place where the average annual temperature is an extraordinary 10° to 20°F.”","“They also have compact bodies.”","“Skunks have a built-in survival system.”","“It is covered in short hair.”"], answer:0 },
  { id:"P15", page:102, lvl:3, trap:0, q:"Part A: Why is winter a hard time for caribou? (page 102)", choices:["There is less food for them to find.","Their fur stops keeping them warm.","Alligators hunt them in the snow.","The streams are too warm to drink."], answer:0 },
  { id:"P16", page:102, lvl:3, trap:3, q:"Part B: Which sentence from page 102 best supports the answer to Part A?", choices:["“Even so, caribou still have a tough time in the coldest part of winter when their food sources decline.”","“Caribou have unusual stomachs.”","“Phasmids look like leaves or twigs.”","“Look closely at the photo of the tree branch.”"], answer:0 },
  { id:"P17", page:102, lvl:3, trap:0, q:"Part A: What can the reader conclude about why the phasmid is hard to find in the photo? (page 102)", choices:["It blends in with the branch it is on.","It is hiding under the snow.","It is too small to see at all.","It flew away before the photo was taken."], answer:0 },
  { id:"P18", page:102, lvl:3, trap:3, q:"Part B: Which sentence from page 102 best supports the answer to Part A?", choices:["“These insects can change colors to really blend in with their surroundings.”","“It is a phasmid.”","“Some phasmids are known as leaf insects, or walking sticks.”","“Every day, a caribou eats over six pounds of lichen!”"], answer:0 },
  { id:"P19", page:103, lvl:3, trap:0, q:"Part A: What can the reader conclude about how alligators catch their food? (page 103)", choices:["They stay very still and then attack quickly.","They chase animals for miles.","They hunt every hour of the day.","They eat only plants."], answer:0 },
  { id:"P20", page:103, lvl:3, trap:3, q:"Part B: Which sentence from page 103 best supports the answer to Part A?", choices:["“The normally motionless alligator may pounce on them without warning.”","“Plants grow there.”","“Other species benefit from these water holes, too.”","“In the end, it’s all about survival!”"], answer:0 },
];

window.COMP_PAIRS = [['P11','P12'], ['P13','P14'], ['P15','P16'], ['P17','P18'], ['P19','P20']];

window.CLOZE_BANK = [
  { id:"C01", q:"The polar bear is a powerful __________ that hunts seals on the ice.", choices:["predator","bedrock","sources"], answer:0 },
  { id:"C02", q:"A snake’s venom is made in special __________ near its fangs.", choices:["marsh","glands","conditions"], answer:1 },
  { id:"C03", q:"An owl’s ability to turn its head almost all the way around is one __________ that helps it spot food.", choices:["tundra","bedrock","adaptation"], answer:2 },
  { id:"C04", q:"A rhino’s thick horn is a __________ you can see on its face.", choices:["physical trait","behavioral trait","lichen"], answer:0 },
  { id:"C05", q:"Mom keeps the medicine locked up because some of it is __________ to small children.", choices:["compact","poisonous","average"], answer:1 },
  { id:"C06", q:"When the fireworks boomed, we felt __________ in our chests.", choices:["sources","chambers","vibrations"], answer:2 },
  { id:"C07", q:"Building a new nest every spring is a __________ of the robin.", choices:["behavioral trait","physical trait","marsh"], answer:0 },
  { id:"C08", q:"Each year, the wildebeest __________ hundreds of miles to find fresh grass.", choices:["decline","migrate","benefit"], answer:1 },
  { id:"C09", q:"The sailors faced __________ winds and icy waves on their trip around the cape.", choices:["annual","nocturnal","harsh"], answer:2 },
  { id:"C10", q:"In our town, the __________ amount of snow each winter is about two feet.", choices:["average","extraordinary","poisonous"], answer:0 },
  { id:"C11", q:"Grandma’s __________ family reunion brings everyone together each August.", choices:["brutal","annual","compact"], answer:1 },
  { id:"C12", q:"Hitting three home runs in one game was an __________ thing to do.", choices:["average","annual","extraordinary"], answer:2 },
  { id:"C13", q:"Few people live on the cold, windy __________ of northern Canada.", choices:["tundra","marsh","chambers"], answer:0 },
  { id:"C14", q:"The __________ stroller folds into a small bag for the airplane.", choices:["nocturnal","compact","extraordinary"], answer:1 },
  { id:"C15", q:"The rocky cliff was dotted with patches of gray-green __________.", choices:["sources","vibrations","lichen"], answer:2 },
  { id:"C16", q:"The underground mine had dark __________ connected by long tunnels.", choices:["chambers","conditions","glands"], answer:0 },
  { id:"C17", q:"Books, maps, and websites can all be __________ of information for a report.", choices:["chambers","sources","ecosystem"], answer:1 },
  { id:"C18", q:"When the cold weather came, the number of flowers in the garden began to __________.", choices:["migrate","pounce","decline"], answer:2 },
  { id:"C19", q:"Sweat __________ down the runner’s face on the hot afternoon.", choices:["dribbles","benefit","decline"], answer:0 },
  { id:"C20", q:"The gray rabbit was __________ among the rocks, so the eagle never noticed it.", choices:["compact","camouflaged","annual"], answer:1 },
  { id:"C21", q:"The __________ moth sleeps during the day and flies around the porch light at night.", choices:["harsh","average","nocturnal"], answer:2 },
  { id:"C22", q:"A cave __________ includes bats, blind fish, and tiny insects that need each other.", choices:["ecosystem","tundra","lichen"], answer:0 },
  { id:"C23", q:"Climbers on the mountain faced a __________ blizzard with freezing winds.", choices:["annual","brutal","compact"], answer:1 },
  { id:"C24", q:"Dry __________ in the forest made the rangers worry about wildfires.", choices:["sources","prey","conditions"], answer:2 },
  { id:"C25", q:"The rangers paddled a canoe through the __________, past reeds and lily pads.", choices:["marsh","bedrock","tundra"], answer:0 },
  { id:"C26", q:"The bridge’s thick pillars rest on solid __________ at the bottom of the river.", choices:["lichen","bedrock","chambers"], answer:1 },
  { id:"C27", q:"Farmers __________ from spring rain because it helps their crops grow.", choices:["decline","migrate","benefit"], answer:2 },
  { id:"C28", q:"Seals are __________ for the orcas that hunt in the cold ocean.", choices:["prey","sources","conditions"], answer:0 },
  { id:"C29", q:"The cheetah sprinted, then leaped to __________ on the gazelle.", choices:["migrate","pounce","benefit"], answer:1 },
];
