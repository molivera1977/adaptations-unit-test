/* ═══════════════════════════════════════════════════════
   ANIMAL ADAPTATIONS — where each paragraph sits on the page pictures (story-audio.js draws the 🔊)
   Same design as Dollars and Sense (Marcos 11/3: "Is there any way to have the story read aloud from the
   picture like putting a speaker next to each paragraph?" … "For my lower kids, they would be needed on
   both the review and test" … "i dont want to record them. Why can't you?").
   The article's words are NOT in this file or anywhere on the site (never a whole Wonders story in a
   file). When a student taps 🔊, their own browser reads the words off the picture (ocr/, Tesseract)
   and the device's voice says them, the way a screen reader would.
   box   = [left, top, right, bottom] in pixels of the 858 × 1118 page picture (pages 100–103, from
           Marcos's photos 11/7; page 100 resized to match); a piece that runs on under the photo has
           two boxes (both light up while it is read)
   side  = which side of the picture its 🔊 sits on (L = left, R = right)
   start = the first words, so a person (and the checks) can name the piece
   Boxes found 11/17 with the Mac's text reader (Vision) line by line, then grouped by paragraph; the
   photo credits are left out, and so is the hand-lettered title (the reader cannot read it).
   Same file in adaptations-review and adaptations-unit-test (keep the copies the same).
═══════════════════════════════════════════════════════ */
window.STORY_PICTURE = { w: 858, h: 1118 };

window.STORY_PARAGRAPHS = [
  { id:'100-2', page:100, side:'L', start:'Essential Question', box:[[70,844,345,882],[124,900,492,1012]] },   // two boxes: the green ? beside it is not read

  { id:'101-1', page:101, side:'L', start:'What would you do if you saw a skunk', box:[[100,48,505,305]] },
  { id:'101-2', page:101, side:'L', start:'The special ways that animals have', box:[[100,316,505,536],[100,536,766,670]] },
  { id:'101-3', page:101, side:'R', start:'When a skunk turns and sprays (photo words)', box:[[540,418,781,524]] },
  { id:'101-4', page:101, side:'L', start:'Staying Warm', box:[[100,678,756,918]] },
  { id:'101-5', page:101, side:'L', start:'The tip of the caribou’s nose', box:[[100,918,756,1056]] },

  { id:'102-1', page:102, side:'L', start:'Finding Food', box:[[54,54,428,448],[54,448,756,514]] },
  { id:'102-2', page:102, side:'R', start:'Lichen can grow (photo words)', box:[[430,362,706,419]] },
  { id:'102-3', page:102, side:'L', start:'Insects in Disguise', box:[[54,526,757,838]] },
  { id:'102-4', page:102, side:'L', start:'This phasmid is called a walking stick (photo words)', box:[[28,946,200,1076]] },

  { id:'103-1', page:103, side:'L', start:'The alligator’s physical adaptations (photo words)', box:[[108,54,550,136]] },
  { id:'103-2', page:103, side:'L', start:'Water, Please!', box:[[106,377,795,615]] },
  { id:'103-3', page:103, side:'L', start:'Other species benefit', box:[[106,628,795,854]] },
  { id:'103-4', page:103, side:'R', start:'Summarize', box:[[356,866,797,1050]] },
];

/* How the voice should say a word the picture shows, when the device voice gets it wrong
   (one word for one word, so the highlight stays on the right word). */
window.STORY_SAY = {
  'Brrrr': 'Brrr',       // a shiver ("Brrrr!"), fewer r's so the voice says it as a sound
};
