/* ═══════════════════════════════════════════════════════
   ANIMAL ADAPTATIONS — TEST · WRITTEN RESPONSE (#21, #22)
   R.A.D. FILL-IN (Marcos 10/21): like the R.A.D. review homework, but with
   boxes to type in — "no lines that need to be deleted".
   - r = the Restate line, printed in full (nothing to type).
   - a, d = the Answer and Detail sentences. Each {…} is a box the student
     fills with words found on the cited story page. "a|b" = forms accepted
     as matching the story (the sheet row reports "boxes that match").
   - Graded by the teacher (not auto-scored). Box words come from the cited page
     (pages 101 and 103, checked against Marcos's photos 11/17).
═══════════════════════════════════════════════════════ */
window.WRITTEN_DIRECTIONS = 'Each answer is a R.A.D. answer with some words missing. R is done for you. Find the missing words in the story and type them in the boxes. Then type your whole R.A.D. answer in the big box.';

/* What each letter means — the same names as the R.A.D. Online Quiz */
window.RAD_STEPS = [
  { key: 'R', name: 'Restate', tip: 'This part is done for you. Read it.' },
  { key: 'A', name: 'Answer',  tip: 'Find the missing words in the story. Type them in the boxes.' },
  { key: 'D', name: 'Detail',  tip: 'Find the missing words that tell more. Type them in the boxes.' }
];

window.WRITTEN_PROMPTS = [
  {
    id: 'W1',
    label: 'Question 21',
    prompt: 'How are caribou able to live in the cold Arctic tundra? Use details from page 101.',
    r: 'Caribou are able to live in the cold Arctic tundra because their bodies help them stay warm.',
    a: 'To stay warm, caribou have two layers of {fur} and a thick layer of {fat}.',
    d: 'The short {hair} on a caribou’s muzzle helps to warm the {air} before they inhale it into their lungs.'
  },
  {
    id: 'W2',
    label: 'Question 22',
    prompt: 'The Essential Question asks, “What helps an animal survive?” How do alligators survive the dry season in the Everglades? Use details from page 103.',
    r: 'Alligators survive the dry season in the Everglades by making water holes.',
    a: 'Alligators use their feet and {snouts|snout} to clear dirt from holes in the limestone {bedrock}.',
    d: 'When the ground dries up, the alligators can {drink} from their water {holes|hole}.'
  }
];
