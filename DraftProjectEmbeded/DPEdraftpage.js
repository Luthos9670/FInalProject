// Arrays of images for Centers (cImgs) and Power Forwards (pfImgs)
const cImgs = [
    "Images/c/Alperen Sengun.webp",
    "Images/c/Anthony Davis.webp",
    "Images/c/Bam Adebayo.webp",
    "Images/c/Brook Lopez.webp",
    "Images/c/Chet Holmgren.webp",
    "Images/c/Clint Capela.webp",
    "Images/c/Daniel Gafford.webp",
    "Images/c/Deandre Ayton.webp",
    "Images/c/Dereck Lively II.webp",
    "Images/c/Domantas Sabonis.webp",
    "Images/c/Ivica Zubac.webp",
    "Images/c/Jakob Poeltl.webp",
    "Images/c/Jalen Duren.png",
    "Images/c/Jarrett Allen.webp",
    "Images/c/Joel Embiid.webp",
    "Images/c/Jonas Valanciunas.png",
    "Images/c/Jusuf Nurkic.png",
    "Images/c/Kevon Looney.webp",
    "Images/c/Kristaps Porzingis.webp",
    "Images/c/Mark Williams.webp",
    "Images/c/Mitchell Robinson.png",
    "Images/c/Myles Turner.webp",
    "Images/c/Nic Claxton.webp",
    "Images/c/Nikola Jokic.webp",
    "Images/c/Nikola Vucevic.webp",
    "Images/c/Rudy Gobert.webp",
    "Images/c/Walker Kessler.webp",
    "Images/c/Wendell Carter Jr.png",
    "Images/c/Xavier Tillman Sr..jpeg",
    "Images/c/Zach Collins.png"
];

const pfImgs = [
    "Images/pf/Aaron Gordon.webp",
    "Images/pf/Caleb Martin.webp",
    "Images/pf/Cameron Johnson.webp",
    "Images/pf/DeMar DeRozan.webp",
    "Images/pf/Draymond Green.webp",
    "Images/pf/Evan Mobley.webp",
    "Images/pf/Giannis Antetokounmpo.webp",
    "Images/pf/Grant Williams.webp",
    "Images/pf/Isaiah Stewart.webp",
    "Images/pf/Jabari Smith Jr..png",
    "Images/pf/Jaren Jackson.webp",
    "Images/pf/Jayson Tatum.webp",
    "Images/pf/Jerami Grant.webp",
    "Images/pf/John Collins.png",
    "Images/pf/Julius Randle.webp",
    "Images/pf/Karl-Anthony Towns.webp",
    "Images/pf/Kawhi Leonard.webp",
    "Images/pf/Keegan Murray.webp",
    "Images/pf/Kenrich Williams.png",
    "Images/pf/Kevin Durant.webp",
    "Images/pf/Kyle Kuzma.webp",
    "Images/pf/LeBron James.webp",
    "Images/pf/Obi Toppin.png",
    "Images/pf/Paolo Banchero.webp",
    "Images/pf/Pascal Siakam.webp",
    "Images/pf/PJ Washington.webp",
    "Images/pf/Robert Covington.png",
    "Images/pf/Saddiq Bey.webp",
    "Images/pf/Victor Wembanyama.webp",
    "Images/pf/Zion Williamson.webp"
];

const pgImgs = [
    "Images/pg/Bradley Beal.webp",
    "Images/pg/Bronny James.webp",
    "Images/pg/Cade Cunningham.webp",
    "Images/pg/CJ McCollum.webp",
    "Images/pg/Coby White.webp",
    "Images/pg/Cole-Anthony-2K-Rating.webp",
    "Images/pg/D'Angelo Russell.jpeg",
    "Images/pg/Damian Lillard.webp",
    "Images/pg/Darius Garland.webp",
    "Images/pg/De'Aaron Fox.jpeg",
    "Images/pg/Dennis Schroder.webp",
    "Images/pg/Fred VanVleet.webp",
    "Images/pg/Jalen Brunson.webp",
    "Images/pg/Jamal Murray.webp",
    "Images/pg/Jeremy Sochan.webp",
    "Images/pg/Jrue Holiday.webp",
    "Images/pg/Kyle Lowry.webp",
    "Images/pg/LaMelo Ball.webp",
    "Images/pg/Luka Doncic.webp",
    "Images/pg/Marcus Smart.png",
    "Images/pg/Mike Conley.png",
    "Images/pg/Russell Westbrook.webp",
    "Images/pg/Scoot Henderson.webp",
    "Images/pg/Scottie Barnes.webp",
    "Images/pg/Shai Gilgeous-Alexander.webp",
    "Images/pg/Stephen Curry.webp",
    "Images/pg/Talen Horton-Tucker.png",
    "Images/pg/Trae Young.webp",
    "Images/pg/Tyrese Haliburton.webp",
    "Images/pg/Tyrese Maxey.webp",
    "Images/pg/Tyus Jones.webp"
];

const sfImgs = [
    "Images/sf/Andrew Wiggins.webp",
    "Images/sf/Ausar Thompson.webp",
    "Images/sf/Brandon Ingram.webp",
    "Images/sf/Brandon Miller.webp",
    "Images/sf/Bruce Brown.webp",
    "Images/sf/Caris LeVert.webp",
    "Images/sf/De'Andre Hunter.jpeg",
    "Images/sf/Deni-Avdija-2K-Rating.webp",
    "Images/sf/Dillon Brooks.webp",
    "Images/sf/Franz Wagner.webp",
    "Images/sf/Harrison Barnes.webp",
    "Images/sf/Jalen Williams.webp",
    "Images/sf/Jaylen Brown.webp",
    "Images/sf/Jimmy Butler.webp",
    "Images/sf/Josh Green.webp",
    "Images/sf/Josh Okogie.png",
    "Images/sf/Keldon Johnson.webp",
    "Images/sf/Khris Middleton.png",
    "Images/sf/Kyle Anderson.webp",
    "Images/sf/Lauri Markkanen.webp",
    "Images/sf/Matisse Thybulle.png",
    "Images/sf/Michael Porter Jr.webp",
    "Images/sf/Mikal Bridges.webp",
    "Images/sf/OG Anunoby.webp",
    "Images/sf/Paul George.webp",
    "Images/sf/RJ Barrett.webp",
    "Images/sf/Taurean Prince.webp",
    "Images/sf/Tobias Harris.png",
    "Images/sf/Zach LaVine.webp",
    "Images/sf/Ziaire Williams.webp"
];

const sgImgs = [
    "Images/sg/Alex Caruso.webp",
    "Images/sg/Anfernee Simons.webp",
    "Images/sg/Anthony Edwards.webp",
    "Images/sg/Austin Reaves.webp",
    "Images/sg/Bennedict Mathurin.webp",
    "Images/sg/Cam Thomas.webp",
    "Images/sg/De'Anthony Melton.jpeg",
    "Images/sg/Dejounte Murray.webp",
    "Images/sg/Derrick White.webp",
    "Images/sg/Desmond Bane.webp",
    "Images/sg/Devin Booker.webp",
    "Images/sg/Devin Vassell.webp",
    "Images/sg/Donovan Mitchell.webp",
    "Images/sg/Gary Trent Jr.png",
    "Images/sg/Herbert Jones.png",
    "Images/sg/Jaden Ivey.webp",
    "Images/sg/Jalen Green.webp",
    "Images/sg/Jalen Suggs.webp",
    "Images/sg/James Harden.webp",
    "Images/sg/Jordan Clarkson.png",
    "Images/sg/Jordan Poole.webp",
    "Images/sg/Josh Giddey.png",
    "Images/sg/Kentavious Caldwell-Pope.png",
    "Images/sg/Kevin Huerter.png",
    "Images/sg/Klay Thompson.webp",
    "Images/sg/Kyrie Irving.webp",
    "Images/sg/Malik Beasley.webp",
    "Images/sg/Quentin Grimes.png",
    "Images/sg/Terry Rozier.png",
    "Images/sg/Tyler Herro.webp"
];
//stats
const pf = [
    { name: "Aaron Gordon", rating: 85, cost: 5, position: "PF" },
    { name: "Caleb Martin", rating: 77, cost: 2, position: "PF" },
    { name: "Cameron Johnson", rating: 80, cost: 5, position: "PF" },
    { name: "Demar DeRozan", rating: 88, cost: 5, position: "PF" },
    { name: "Draymond Green", rating: 83, cost: 5, position: "PF" },
    { name: "Evan Mobley", rating: 87, cost: 5, position: "PF" },
    { name: "Giannis Antetokounmpo", rating: 97, cost: 12, position: "PF" },
    { name: "Grant Williams", rating: 76, cost: 2, position: "PF" },
    { name: "Isaiah Stewart", rating: 76, cost: 2, position: "PF" },
    { name: "Jabari Smith Jr.", rating: 80, cost: 5, position: "PF" },
    { name: "Jaren Jackson Jr", rating: 87, cost: 5, position: "PF" },
    { name: "Jayson Tatum", rating: 96, cost: 12, position: "PF" },
    { name: "Jerami Grant", rating: 81, cost: 5, position: "PF" },
    { name: "John Collins", rating: 82, cost: 5, position: "PF" },
    { name: "Julius Randle", rating: 86, cost: 5, position: "PF" },
    { name: "Karl-Anthony Towns", rating: 89, cost: 5, position: "PF" },
    { name: "Kawhi Leonard", rating: 92, cost: 12, position: "PF" },
    { name: "Keegan Murray", rating: 80, cost: 5, position: "PF" },
    { name: "Kenrich Williams", rating: 73, cost: 2, position: "PF" },
    { name: "Kevin Durant", rating: 95, cost: 12, position: "PF" },
    { name: "Kyle Kuzma", rating: 96, cost: 12, position: "PF" },
    { name: "Lebron James", rating: 95, cost: 12, position: "PF" },
    { name: "Obi Toppin", rating: 80, cost: 5, position: "PF" },
    { name: "Paoblo Bannchero", rating: 90, cost: 12, position: "PF" },
    { name: "Pascal Siakam", rating: 88, cost: 5, position: "PF" },
    { name: "Pj Washington", rating: 78, cost: 2, position: "PF" },
    { name: "Robert Convington", rating: 75, cost: 2, position: "PF" },
    { name: "Saddiq bey ", rating: 77, cost: 2, position: "PF" },
    { name: "Victor Wembanyama", rating: 91, cost: 12, position: "PF" },
    { name: "Zion Williamson", rating: 87, cost: 5, position: "PF" }
];

const c = [
    { name: "Alperen Sengun", rating: 85, cost: 5, position: "C" },
    { name: "Anthony Davis", rating: 96, cost: 12, position: "C" },
    { name: "Bam Adebayo", rating: 87, cost: 5, position: "C" },
    { name: "Brook Lopez", rating: 79, cost: 2, position: "C" },
    { name: "Chet Holmgren", rating: 87, cost: 5, position: "C" },
    { name: "Clint Capela", rating: 80, cost: 5, position: "C" },
    { name: "Daniel Gafford", rating: 81, cost: 5, position: "C" },
    { name: "Deandre Ayton", rating: 86, cost: 5, position: "C" },
    { name: "Dereck Lively II", rating: 81, cost: 5, position: "C" },
    { name: "Domantas Sabonic", rating: 89, cost: 5, position: "C" },
    { name: "Ivica Zubac", rating: 84, cost: 5, position: "C" },
    { name: "Jakob Poeltl", rating: 80, cost: 5, position: "C" },
    { name: "Jalen Duren", rating: 81, cost: 5, position: "C" },
    { name: "Jarret Allen", rating: 87, cost: 5, position: "C" },
    { name: "Joel Embiid", rating: 96, cost: 12, position: "C" },
    { name: "Jonas Valanciunas", rating: 82, cost: 5, position: "C" },
    { name: "Jusuf Nurkic", rating: 80, cost: 5, position: "C" },
    { name: "Kevon Looney", rating: 77, cost: 2, position: "C" },
    { name: "Kristaps Porzingis", rating: 87, cost: 5, position: "C" },
    { name: "Mark Williams", rating: 80, cost: 5, position: "C" },
    { name: "Mitchell Robinson", rating: 80, cost: 5, position: "C" },
    { name: "Myles Turner", rating: 84, cost: 5, position: "C" },
    { name: "Nicolas Claxton", rating: 81, cost: 5, position: "C" },
    { name: "Nikola Jokic", rating: 97, cost: 12, position: "C" },
    { name: "Nikola Vucevic", rating: 83, cost: 5, position: "C" },
    { name: "Rudy Gobert", rating: 85, cost: 5, position: "C" },
    { name: "Walker Kessler", rating: 81, cost: 5, position: "C" },
    { name: "Wendell Carter Jr.", rating: 96, cost: 12, position: "C" },
    { name: "Xavier Tillman Sr.", rating: 74, cost: 2, position: "C" },
    { name: "Zach Collins", rating: 77, cost: 2, position: "C" }
];


const pg = [
    { name: "Bradley Beal", rating: 85, cost: 5, position: "PG" },
    { name: "Bronny James jr", rating: 100, cost: 0, position: "PG" },
    { name: "Cade Cunningham", rating: 87, cost: 5, position: "PG" },
    { name: "Cj McCollum", rating: 84, cost: 5, position: "PG" },
    { name: "Coby white", rating: 82, cost: 5, position: "PG" },
    { name: "Cole Anthony", rating: 76, cost: 2, position: "PG" },
    { name: "D'Angelo Russell", rating: 80, cost: 5, position: "PG" },
    { name: "Damian Lilard", rating: 90, cost: 12, position: "PG" },
    { name: "Darius Garland", rating: 86, cost: 5, position: "PG" },
    { name: "De'Aaron Fpx", rating: 88, cost: 5, position: "PG" },
    { name: "Dennis Schroder", rating: 83, cost: 5, position: "PG" },
    { name: "Fred Vanvleet", rating: 82, cost: 5, position: "PG" },
    { name: "Jalen Brunson", rating: 93, cost: 12, position: "PG" },
    { name: "Jeremy Sochan", rating: 78, cost: 2, position: "PG" },
    { name: "Jrue Holiday", rating: 87, cost: 5, position: "PG" },
    { name: "Kyle Lowry", rating: 77, cost: 2, position: "PG" },
    { name: "Lamelo Ball", rating: 88, cost: 5, position: "PG" },
    { name: "Luka Doncic", rating: 97, cost: 12, position: "PG" },
    { name: "Marcus Smart", rating: 79, cost: 2, position: "PG" },
    { name: "Mike Conley", rating: 80, cost: 5, position: "PG" },
    { name: "Russel Westbrook", rating: 79, cost: 2, position: "PG" },
    { name: "Scot Henderson", rating: 78, cost: 2, position: "PG" },
    { name: "Scottie Barnes", rating: 85, cost: 5, position: "PG" },
    { name: "Shai Gilgeous-Alexander", rating: 96, cost: 12, position: "PG" },
    { name: "Stephen Curry", rating: 95, cost: 12, position: "PG" },
    { name: "Talen Horton-Tucker", rating: 75, cost: 2, position: "PG" },
    { name: "Trae Young", rating: 89, cost: 5, position: "PG" },
    { name: "Tyrese Haliburton", rating: 87, cost: 5, position: "PG" },
    { name: "Tyrese Maxey", rating: 89, cost: 5, position: "PG" },
    { name: "Tyus Jones", rating: 78, cost: 2, position: "PG" }
];
        
const sf = [
    { name: "Andrew Wiggins", rating: 81, cost: 5, position: "SF" },
    { name: "Ausar Thompson", rating: 78, cost: 2, position: "SF" },
    { name: "Brandon Ingram", rating: 87, cost: 5, position: "SF" },
    { name: "Brandon Miller", rating: 81, cost: 5, position: "SF" },
    { name: "Bruce Brown", rating: 77, cost: 2, position: "SF" },
    { name: "Caris LeVert", rating: 79, cost: 2, position: "SF" },
    { name: "De'Andre Hunter", rating: 80, cost: 5, position: "SF" },
    { name: "Deni Avdija", rating: 79, cost: 2, position: "SF" },
    { name: "Dillon Brooks", rating: 79, cost: 2, position: "SF" },
    { name: "Franz Wagner", rating: 86, cost: 5, position: "SF" },
    { name: "Harrison Barnes", rating: 79, cost: 2, position: "SF" },
    { name: "Jalen Williams", rating: 86, cost: 5, position: "SF" },
    { name: "Jaylen Brown", rating: 93, cost: 12, position: "SF" },
    { name: "Jimmy Butler", rating: 87, cost: 5, position: "SF" },
    { name: "Josh Green", rating: 76, cost: 2, position: "SF" },
    { name: "Josh Okogie", rating: 74, cost: 2, position: "SF" },
    { name: "Keldon Johnson", rating: 79, cost: 2, position: "SF" },
    { name: "Khris Middleton", rating: 85, cost: 5, position: "SF" },
    { name: "Kyle Anderson", rating: 76, cost: 2, position: "SF" },
    { name: "Lauri MarkKanen", rating: 86, cost: 5, position: "SF" },
    { name: "Matisse Thybulle", rating: 74, cost: 2, position: "SF" },
    { name: "Michael Porter Jr.", rating: 83, cost: 5, position: "SF" },
    { name: "Mikal Bridges", rating: 79, cost: 2, position: "SF" },
    { name: "OG Anunoby", rating: 86, cost: 5, position: "SF" },
    { name: "Paul George", rating: 89, cost: 5, position: "SF" },
    { name: "RJ Barrett", rating: 84, cost: 5, position: "SF" },
    { name: "Taurean Prince", rating: 76, cost: 2, position: "SF" },
    { name: "Tobias Harris", rating: 79, cost: 2, position: "SF" },
    { name: "Zach LaVine", rating: 84, cost: 5, position: "SF" },
    { name: "Ziare Williams", rating: 75, cost: 2, position: "SF" }
];
        
const sg = [
    { name: "Alex Caruso", rating: 81, cost: 5, position: "SG" },
    { name: "Anfernee Simons", rating: 81, cost: 5, position: "SG" },
    { name: "Anthony Edwards", rating: 94, cost: 12, position: "SG" },
    { name: "Austin Reaves", rating: 81, cost: 5, position: "SG" },
    { name: "Bennedict Mathurin", rating: 80, cost: 5, position: "SG" },
    { name: "Cam Thomas", rating: 84, cost: 5, position: "SG" },
    { name: "De'Anthony Melton", rating: 77, cost: 2, position: "SG" },
    { name: "Dejounte Murray", rating: 86, cost: 5, position: "SG" },
    { name: "Derrick White", rating: 87, cost: 5, position: "SG" },
    { name: "Desmond Bane", rating: 83, cost: 5, position: "SG" },
    { name: "Devin Booker", rating: 93, cost: 12, position: "SG" },
    { name: "Devin Vassell", rating: 81, cost: 5, position: "SG" },
    { name: "Donovan Mitchhell", rating: 93, cost: 12, position: "SG" },
    { name: "Gary Trent Jr.", rating: 77, cost: 2, position: "SG" },
    { name: "Herbert Jones", rating: 82, cost: 5, position: "SG" },
    { name: "Jaden Ivey", rating: 80, cost: 5, position: "SG" },
    { name: "Jalen Green", rating: 85, cost: 5, position: "SG" },
    { name: "Jalen Suggs", rating: 83, cost: 5, position: "SG" },
    { name: "James Harden", rating: 84, cost: 5, position: "SG" },
    { name: "Jordan Clarkson", rating: 77, cost: 2, position: "SG" },
    { name: "Jordan Poole", rating: 84, cost: 5, position: "SG" },
    { name: "Josh Giddey", rating: 81, cost: 5, position: "SG" },
    { name: "Kentavious Caldwell-Pope", rating: 78, cost: 2, position: "SG" },
    { name: "Kevin Huerter", rating: 76, cost: 2, position: "SG" },
    { name: "Klay Thompson", rating: 81, cost: 5, position: "SG" },
    { name: "Kyrie Irving", rating: 92, cost: 12, position: "SG" },
    { name: "Malik Beasley", rating: 75, cost: 2, position: "SG" },
    { name: "Quentin Grimes", rating: 74, cost: 2, position: "SG" },
    { name: "Terry Rozier", rating: 80, cost: 5, position: "SG" },
    { name: "Tyler Herro", rating: 85, cost: 5, position: "SG" }
];


// functions
const team1rating = [];
const team2rating = [];
const lockedImages = [];

function shuffleCenterImage(imageId) {
    if (lockedImages.includes(imageId)) return;

    const imageContainer = document.getElementById(`image${imageId}`);
    const img = imageContainer.querySelector('img');
    const p = imageContainer.querySelector('p');  
    
    const randomnumber = (Math.floor(Math.random() * cImgs.length))+1;
    
    
    img.src = cImgs[randomnumber];  
    
    
    const costText = c[randomnumber].cost === null ? "N/A" : `$${c[randomnumber].cost}`;
    
    
    p.textContent = `Position: ${c[randomnumber].position}, Cost: ${costText}, Rating: ${c[randomnumber].rating}`;
    team1rating[1]=c[randomnumber].rating;
    
    imageContainer.style.display = "block";
}


function shufflePowerForwardImage(imageId) {
    if (lockedImages.includes(imageId)) return;

    const imageContainer = document.getElementById(`image${imageId}`);
    const img = imageContainer.querySelector('img');
    const p = imageContainer.querySelector('p');
    
    const randomnumber = (Math.floor(Math.random() * pfImgs.length))+1;
    
    
    img.src = pfImgs[randomnumber];  
    
    
    const costText = pf[randomnumber].cost === null ? "N/A" : `$${pf[randomnumber].cost}`;
    
    
    p.textContent = `Position: ${pf[randomnumber].position}, Cost: ${costText}, Rating: ${pf[randomnumber].rating}`;
    team1rating[2]=pf[randomnumber].rating;
    
    imageContainer.style.display = "block";
}

function shuffleSmallForwardImage(imageId) {
    if (lockedImages.includes(imageId)) return;

    const imageContainer = document.getElementById(`image${imageId}`);
    const img = imageContainer.querySelector('img');
    const p = imageContainer.querySelector('p');  
    
    
    const randomnumber = (Math.floor(Math.random() * sfImgs.length))+1;
    
    img.src = sfImgs[randomnumber];  
    
   
    const costText = sf[randomnumber].cost === null ? "N/A" : `$${sf[randomnumber].cost}`;
    
    
    p.textContent = `Position: ${sf[randomnumber].position}, Cost: ${costText}, Rating: ${sf[randomnumber].rating}`;
    team1rating[3]=sf[randomnumber].rating;
    imageContainer.style.display = "block"; 
}

function shuffleShootingGuardImage(imageId) {
    if (lockedImages.includes(imageId)) return;

    const imageContainer = document.getElementById(`image${imageId}`);
    const img = imageContainer.querySelector('img');
    const p = imageContainer.querySelector('p'); 
    
    const randomnumber = (Math.floor(Math.random() * sgImgs.length))+1;
    
    // Set the image source
    img.src = sgImgs[randomnumber];  
    
    // Check if the cost is null, and display "N/A" if so, or display the cost
    const costText = sg[randomnumber].cost === null ? "N/A" : `$${sg[randomnumber].cost}`;
    
    // Set the text content of <p> to show the position and cost of the selected player
    p.textContent = `Position: ${sg[randomnumber].position}, Cost: ${costText}, Rating: ${sg[randomnumber].rating}`;
    team1rating[4]=sg[randomnumber].rating;
    imageContainer.style.display = "block";  // Ensure the container is visible
}

// Shuffle function for Point Guards
function shufflePointGuardImage(imageId) {
    if (lockedImages.includes(imageId)) return;

    const imageContainer = document.getElementById(`image${imageId}`);
    const img = imageContainer.querySelector('img');
    const p = imageContainer.querySelector('p');  // Get the <p> element
    
    // Generate a random number to select a player
    const randomnumber = (Math.floor(Math.random() * pgImgs.length));
    
    // Set the image source
    img.src = pgImgs[randomnumber];  
    
    // Check if the cost is null, and display "N/A" if so, or display the cost
    const costText = sg[randomnumber].cost === null ? "N/A" : `$${sg[randomnumber].cost}`;
    
    // Set the text content of <p> to show the position and cost of the selected player
    p.textContent = `Position: ${pg[randomnumber].position}, Cost: ${costText}, Rating: ${pg[randomnumber].rating}`;
    team1rating[5]=pg[randomnumber].rating;
    imageContainer.style.display = "block";  // Ensure the container is visible
}

// Team 2--------------------------------------------------------------------------------
function shuffleCenterImage2(imageId) {
    if (lockedImages.includes(imageId)) return;

    const imageContainer = document.getElementById(`image${imageId}`);
    const img = imageContainer.querySelector('img');
    const p = imageContainer.querySelector('p');  // Get the <p> element
    
    // Generate a random number to select a player
    const randomnumber = (Math.floor(Math.random() * cImgs.length))+1;
    
    // Set the image source
    img.src = cImgs[randomnumber];  
    
    // Check if the cost is null, and display "N/A" if so, or display the cost
    const costText = c[randomnumber].cost === null ? "N/A" : `$${c[randomnumber].cost}`;
    
    // Set the text content of <p> to show the position and cost of the selected player
    p.textContent = `Position: ${c[randomnumber].position}, Cost: ${costText}, Rating: ${c[randomnumber].rating}`;
    team2rating[1]=c[randomnumber].rating;
    imageContainer.style.display = "block";  // Ensure the container is visible
}

// Shuffle function for Power Forwards
function shufflePowerForwardImage2(imageId) {
    if (lockedImages.includes(imageId)) return;

    const imageContainer = document.getElementById(`image${imageId}`);
    const img = imageContainer.querySelector('img');
    const p = imageContainer.querySelector('p');  // Get the <p> element
    
    // Generate a random number to select a player
    const randomnumber = (Math.floor(Math.random() * pfImgs.length))+1;
    
    // Set the image source
    img.src = pfImgs[randomnumber];  
    
    // Check if the cost is null, and display "N/A" if so, or display the cost
    const costText = pf[randomnumber].cost === null ? "N/A" : `$${pf[randomnumber].cost}`;
    
    // Set the text content of <p> to show the position and cost of the selected player
    p.textContent = `Position: ${pf[randomnumber].position}, Cost: ${costText}, Rating: ${pf[randomnumber].rating}`;
    team2rating[2]=pf[randomnumber].rating;
    
    imageContainer.style.display = "block";  // Ensure the container is visible
}

// Shuffle function for Small Forwards
function shuffleSmallForwardImage2(imageId) {
    if (lockedImages.includes(imageId)) return;

    const imageContainer = document.getElementById(`image${imageId}`);
    const img = imageContainer.querySelector('img');
    const p = imageContainer.querySelector('p');  // Get the <p> element
    
    // Generate a random number to select a player
    const randomnumber = (Math.floor(Math.random() * sfImgs.length))+1;
    
    // Set the image source
    img.src = sfImgs[randomnumber];  
    
    // Check if the cost is null, and display "N/A" if so, or display the cost
    const costText = sf[randomnumber].cost === null ? "N/A" : `$${sf[randomnumber].cost}`;
    
    // Set the text content of <p> to show the position and cost of the selected player
    p.textContent = `Position: ${sf[randomnumber].position}, Cost: ${costText}, Rating: ${sf[randomnumber].rating}`;
    team2rating[3]=sf[randomnumber].rating;
    imageContainer.style.display = "block";  // Ensure the container is visible
}

// Shuffle function for Shooting Guards
function shuffleShootingGuardImage2(imageId) {
    if (lockedImages.includes(imageId)) return;

    const imageContainer = document.getElementById(`image${imageId}`);
    const img = imageContainer.querySelector('img');
    const p = imageContainer.querySelector('p');  // Get the <p> element
    
    // Generate a random number to select a player
    const randomnumber = (Math.floor(Math.random() * sgImgs.length))+1;
    
    // Set the image source
    img.src = sgImgs[randomnumber];  
    
    // Check if the cost is null, and display "N/A" if so, or display the cost
    const costText = sg[randomnumber].cost === null ? "N/A" : `$${sg[randomnumber].cost}`;
    
    // Set the text content of <p> to show the position and cost of the selected player
    p.textContent = `Position: ${sg[randomnumber].position}, Cost: ${costText}, Rating: ${sg[randomnumber].rating}`;
    team2rating[4]=sg[randomnumber].rating;
    imageContainer.style.display = "block";  // Ensure the container is visible
}

// Shuffle function for Point Guards
function shufflePointGuardImage2(imageId) {
    if (lockedImages.includes(imageId)) return;

    const imageContainer = document.getElementById(`image${imageId}`);
    const img = imageContainer.querySelector('img');
    const p = imageContainer.querySelector('p');  // Get the <p> element
    
    // Generate a random number to select a player
    const randomnumber = (Math.floor(Math.random() * pgImgs.length));
    
    // Set the image source
    img.src = pgImgs[randomnumber];  
    
    // Check if the cost is null, and display "N/A" if so, or display the cost
    const costText = sg[randomnumber].cost === null ? "N/A" : `$${sg[randomnumber].cost}`;
    
    // Set the text content of <p> to show the position and cost of the selected player
    p.textContent = `Position: ${pg[randomnumber].position}, Cost: ${costText}, Rating: ${pg[randomnumber].rating}`;
    team2rating[5]=pg[randomnumber].rating;
    imageContainer.style.display = "block";  // Ensure the container is visible
}
console.log(team1rating);
// Lock function to prevent further shuffling


// Shuffle all images (modified function to handle different positions correctly)
function shuffleAll() {
    for (let i = 1; i <= 5; i++) {
        if (!lockedImages.includes(i)) {
            if (i === 1) {
                shuffleCenterImage(i);  // Shuffle Centers for image1
            } else if (i === 2) {
                shufflePowerForwardImage(i);  // Shuffle Power Forwards for image2
            } else if (i === 3) {
                shuffleSmallForwardImage(i);  // Shuffle Small Forwards for image3
            } else if (i === 4) {
                shuffleShootingGuardImage(i);  // Shuffle Shooting Guards for image4
            } else if (i === 5) {
                shufflePointGuardImage(i);  // Shuffle Point Guards for image5
            }
        }
    }
}

function shuffleAll2() {
    // Hide the Shuffle All button for the second row after it's clicked
    const shuffleAllButton2 = document.querySelector('.shuffle-all2');
    shuffleAllButton2.style.display = "none";

    // Shuffle and lock the second row of players (images 6 to 10)
    for (let i = 6; i <= 10; i++) {
        if (!lockedImages.includes(i)) {
            // Shuffle the image for each player
            if (i === 6) {
                shuffleCenterImage2(i);
            } else if (i === 7) {
                shufflePowerForwardImage2(i);
            } else if (i === 8) {
                shuffleSmallForwardImage2(i);
            } else if (i === 9) {
                shuffleShootingGuardImage2(i);
            } else if (i === 10) {
                shufflePointGuardImage2(i);
            }

            // Lock the image immediately after shuffling
            lockImage(i);

            // Hide the shuffle and lock buttons for the second row of players
            const imageContainer = document.getElementById(`image${i}`);
            const shuffleButton = imageContainer.querySelector('.shuffle');
            const lockButton = imageContainer.querySelector('.lock');
            
            // Hide the shuffle and lock buttons
            shuffleButton.style.display = "none";
            lockButton.style.display = "none";
        }
    }
}




//Win conditions


function lockImage(imageId) {
    const shuffleButton = document.querySelector(`#image${imageId} .shuffle`);
    shuffleButton.disabled = true; // Disable the shuffle button

    // Find the image container and the player data based on the imageId
    const imageContainer = document.getElementById(`image${imageId}`);
    const img = imageContainer.querySelector('img');
    const p = imageContainer.querySelector('p');
    
    const playerData = {
        position: p.textContent.split(",")[0].replace("Position: ", ""),
        cost: p.textContent.split(",")[1].replace("Cost: ", ""),
        rating: p.textContent.split(",")[2].replace("Rating: ", ""),
        imgSrc: img.src
    };
    if (!lockedImages.includes(imageId)) {
        lockedImages.push(imageId);
    }
    checkIfLocked();

}

function checkIfLocked() {
    //console.log(`Checking if all images are locked. Current locked images: ${lockedImages.length}`);
    if (lockedImages.length === 10) {
        document.querySelector('.start-button').style.display = 'block';  // Show Start button
        //console.log('All images are locked. Showing the Start button.');
    }
}




function checkWinner() {
    let rating1 = team1rating[1]+team1rating[2]+team1rating[3]+team1rating[4]+team1rating[5];
    let rating2 = team2rating[1]+team2rating[2]+team2rating[3]+team2rating[4]+team2rating[5];
    if (rating1 > rating2) {
        result = "Team 1 wins!";
    } else if (rating1 < rating2) {
        result = "Team 2 wins!";
    } else {
        result = "It's a tie!";
    }
    document.getElementById("result").innerText = result;

}