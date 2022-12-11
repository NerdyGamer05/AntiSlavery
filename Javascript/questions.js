function randomizeQ(arr) {
  return arr.sort((a, b) => 0.5 - Math.random());
}
const questions = [
{
  numb: 1,
  question: "What was the name of William Lloyd Garrison's newspaper?",
  answer: "The Liberator",
  options: randomizeQ([
    "The North Star",
    "The Liberator",
    "The Emancipator",
    "Freedom's Journal"    
  ]),  
  explanation: `<p class="explanationText">Garrison began publishing his own newspaper in 1831, under the name of <b><i>The Liberator</i></b>.</p>`
},
{
  numb: 2,
  question: "Why did Garrison burn a copy of the Constitution?",
  answer: "He believed that the Constitution was pro-slavery.",
  options: randomizeQ([
    "He was having a bad day.",
    "He believed that the Constitution was pro-slavery.",
    "Most of the Founding Fathers were slave owners.",
    "It was an accident."
  ]),
    explanation: `<p class="explanationText">Garrison claimed that the Constitution was a <b>proslavery</b> document. An example of this was the <sup>3</sup>&frasl;<sub>5</sub> clause, which resulted in slaves being counted as three-fifths of a person towards congressional representation.</p>`,
},
{
  numb: 3,
  question: "Approximately how many people did Nat Turner and his followers kill?",
  answer: "55",
  options: randomizeQ([
    "30",
    "45",
    "75",
    "55"
  ]),
    explanation: `<p class="explanationText">Nat Turner led a revolt in 1831, as part of the abolition movement. In response to the violent revolt, <b>hundreds</b> of African Americans were murdered and new legislation was passed to supress slaves' rights.</p>`
},
];