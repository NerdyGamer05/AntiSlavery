function randomizeq(arr) {
  return arr.sort((a, b) => 0.5 - Math.random());
}
const questions = [
  {
  numb: 1,
  question: "True or False: Teens are among the highest risk age groups to die in a vehicle fire.",
  answer: "True",
  options: randomizeq([
    "True",
    "False"
  ]),  
  explanation: `
  <span class="bigText">Nearly 50% of all car fires occur to people ages 15-34</span>
  <br>
  <br>
  <div class="imagePolaroid">
    <img src="/Images/Explanation/one.png" alt="Explanation Image One" class="explanationImage">
    <div class="imageContainer">
    <p>Highway vehicle fire deaths and injuries by age group: 2013-2017</p>
    </div>
  </div>
`
},
  {
  numb: 2,
  question: "On average how many vehicle fires occur each year in the U.S?",
  answer: "200,000",
  options: randomizeq([
    "75,000",
    "115,000",
    "163,000",
    "200,000"
  ]),
    explanation: ``,
},
  {
  numb: 3,
  question: "True or False: When a car catches fire you should open the hood and trunk if possible to help extinguish the flames.",
  answer: "False",
  options: randomizeq([
    "True",
    "False"
  ]),
    explanation: `<p class="explanationText"><b>NEVER</b> open the hood or trunk of a burning vehicle, doing so gives the fire more access to oxygen creating a high possibility of flames flaring up.</p>`
},
  {
  numb: 4,
  question: "What is the first step you should take if your car lights on fire while driving?",
  answer: "Pull over to a safe area",
  options: randomizeq([
    "Call 911",
    "Pull over to a safe area",
    "Quickly jump out before it explodes",
    "Grab a fire extinguisher if accessible"
  ]),
    explanation: `
    <span class="bigText" style="text-decoration:underline">Steps:</span>
    <br>
    <ol class="explanationText">
      <li>Pull over as quickly and safely</li>
      <li">Once you have stopped, <b>TURN OFF</b> the engine.</li>
      <li><b>GET</b> everyone out of the car. Never return to a burning car for anything.</li>
      <li><b>MOVE</b> everyone at least 100 feet from the burning car and well away from traffic.</li>
      <li><b>CALL</b> 9-1-1.</li>
    </ol>
`
},
  {
  numb: 5,
  question: "True or False: Nearly every vehicle fire causes the car to explode.",
  answer: "False",
  options: randomizeq([
    "True",
    "False"
  ]),
    explanation: `<p class="explanationText">Explosions rarely occur in car fires because gas tanks are designed to break well before enough pressure builds up to cause an explosion.</p>`
},
  {
  numb: 6,
  question: "What is the aboslute minimum distance you should be from a burning vehicle?",
  answer: "100 ft",
  options: randomizeq([
    "50 ft",
    "100 ft",
    "150 ft",
    "200 ft"
  ]),
    explanation: `<p class="explanationText">Flames can shoot further than 10 feet from a burning car in an instant. Explosions  are also a risk when there's a vehicle fire and can happen without notice. You also want to be 100 feet as it keeps you far away from the heat of the fire.</p>`
}, 
  {
  numb: 7,
  question: "What are some gas car fire warning signs?",
  answer: "Gas level decreases rapidly",
  options: randomizeq([
    "Gas level decreases rapidly",
    "The brake pedal becomes hard to push down",
    "The car stops suddenly",
    "Windshield wiper fluid no longer gets sprayed"
  ]),
    explanation: `
    <span class="bigText" style="text-decoration:underline">Warning Signs:</span>
    <br>
    <ul class="explanationText" style="list-style-image:url('/Images/bp.png')">
      <li>Damaged or loose wiring.</li>
      <li>Fuses that have blown more than once.</li>
      <li>Loud noises from the exhaust system.</li>
      <li>Rapid changes in fuel level, oil level, or engine temperature.</li>
      <li>Spilled oil after an oil change, a missing oil cap or one that doesn"t fit.</li>
      <li>Worn out or loose hoses.</li>
      <li>The smell of burning rubber or metal.</li>
      <li>Smoke coming from the engine or brakes.</li>
    </ul>`
},
  {
  numb: 8,
  question: "What class fire extinguisher is the best to have in a gas car in case of a fire?",
  answer: "Class ABC",
  options: randomizeq([
    "Class A",
    "Class B",
    "Class C",
    "Class ABC"
  ]),
    explanation: `
  <span class="bigText">Class ABC Fire extinguishers are suitable to extinguish Class A B and C fires</span>
  <br>
  <br>
  <div class="imagePolaroid">
    <img src="/Images/Explanation/eight.png" alt="Explanation Image Eight" class="explanationImage">
  </div>`
},
  {
  numb: 9,
  question: "What type of car has the highest chance to catch fire?",
  answer: "Hybrid Cars",
  options: randomizeq([
    "Gas Cars",
    "Electric Cars",
    "Hybrid Cars",
    "There's not a major difference"
  ]),
    explanation: `
  <span class="bigText">Hybrid-powered cars were involved in about 3,475 fires per every 100,000 sold. <b>(3.4%)</b><br>Gasoline-powered cars, about 1,530. <b>(1.5%)</b><br>Electric vehicles (EVs) saw just 25 fires per 100,000 sold <b>(0.25%)</b></span>
  <br>
  <br>
  <div class="imagePolaroid">
    <img src="/Images/Explanation/nine.png" alt="Explanation Image One" class="explanationImage">
  </div>`
},
  {
  numb: 10,
  question: "Electric Vehicle (EV) fires can occur when",
  answer: "All options are correct",
  options: randomizeq([
    "A traffic crash or other abuse does sufficient damage to cause ignition during or immediately after the crash.",
    "A EV is charging due to overcharging or problems with the charging stations or cables",
    "A battery reignites after an initial fire has been completely dealt with",
    "All options are correct"
  ]),
    explanation: `
  <p class="explanationText">
    <ol class="explanationText">
      <li>When a vehicle is stationary. Extreme temperatures, high humidity, internal cell failure, and abuse of a LIB at some prior time can all cause such fires.</li>
      <li>When the EV is charging due to overcharging or problems with the charging stations or cables.</li>
      <li>After a traffic crash or other abuse does sufficient damage to cause ignition during or immediately after the crash.</li>
      <li>When an LIB reignites long after an initial fire has been handled.</li>
      <li>Due to external factors, such as arson or other fires (wildland, structure, or other vehicles) nearby.</li>
    </ol>
  </p>
  <br> 
  <div class="imagePolaroid">
    <img src="/Images/Explanation/ten.png" alt="Explanation Image One" class="explanationImage">
  </div>`
},
  {
  numb: 11,
  question: "What is the biggest reason that Electric Vehicles (EV) are the hardest vehicle fires to extinguish?",
  answer: "The stored energy in lithium batteries act as a massive fuel source",
  options: randomizeq([
    "The way EV’s are built allows the fire to hide inside the car making it hard to reach",
    "The stored energy in lithium batteries act as a massive fuel source",
    "EVs are still new and dont have the same safety measures as gas cars",
    "They are actually the easiest to extinguish"
  ]),
    explanation: `<p class="explanationText">Lithium-ion battery fires can reach more than 3000 degrees fahrenheit whereas gas fires only reach about 1500 degrees fahrenheit. Since lithium-ion batteries act as their own fuel source firefighters usually have to put out the fire multiple times before the batteries stop reigniting. Even then, Lithium ion batteries can reignite hours or even days after</p>`
},
];