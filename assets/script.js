

// Put all the images in a JavaScript array
var $imgs = $(".section-link");


// If you store your content in an array of objects, you can do this without creating 
// more than one display div. You'll just get the content from the object in the
// array that has the same index as the image (within a different array)
var data = [
  {
    title: "Dearest Karishma",
    text: "Firstly, mad thanks to Karishma for being one of the smartest folks I have met and most understanding of everyone. It’s not everyday you meet someone who is an incredible coworker that you want to make your friend. What a treasure!!!!! Let us continue our secret fruit club virtually. "
  },
  {
    title: "Dearest Susan",
    text: "The most vivid memory I have is seeing Susan Schuman’s no-show socks peek out of her silver loafers, and thinking how humbling that was. Ah, yes, they too wear socks that they want to hide. Ah, yes, they too are human. Thanks Susan for letting me in on that vision summit!!!"
  },
  {
    title: "Dearest Andy",
    text: "Andy, when I first introduced myself to you in real life in the production room, I didn’t really know that you were the Andy Oglesby that I worked with via slack. I hope that no matter where I am in the world, your mouse will finds its way to connect to my computer."
  },
  {
    title: "Dearest Jen",
    text: "Jen!! Taking me and Arthur out to lunch was hella cool, especially since we weren’t really working together (or sitting next to each other!!) yet. Hope the natural gum surpassed your criteria. You have the energy that reminds me so much of my Arab family, and I absolutely loved that. A replica of my cousin in every way!!!  Thank you for putting the blinds up for me!!! It was short-lived, but incredible nonetheless. Also I hope you will always remember me when it’s hot outside. I will always remember you when I am birthing."
  },
  {
    title: "Dearest Whitney",
    text: "Whitney, thanks for the tea-staining op. My eczema and I never felt so alive. Hope you get to write some poetic code one day. "
  },  
  {
    title: "Dearest Katie",
    text: "Katie, your baby is the cutest!!!!!!!! Thank you for bringing me along on the meeting with Chris Flink. There is a sparkle in the way you speak that comforts me with aspiration. You and Will were the first non-designers I presented my portfolio to, and the way you connected all kinds of work to the one project I was showing you was incredibly eye-opening."
  },  
    {
    title: "Dearest Will",
    text: "There was one unWined where you said my name in the most correct way I have heard it in a very long time. I don’t quite remember the conversation in which it was mentioned, but I remember so well because it felt exactly like hearing strangers speak Arabic on the streets of San Francisco. I was transported home. Thank you for that feeling."
  },  
    {
    title: "Dearest Chris Riggs",
    text: "I hope it's okay that I love refering to both your first and last name! The enthusiasm in which you presented the Exploratorium work to me is unmatched!!! What an intro it was! You really kept it fresh, and I’m so glad I got to be in that one week of you joining the Ancestry project. My soul had been approaching death by non-design, but thankfully it was brought back to me!!"
  },  
      {
    title: "Dearest Aki",
    text: "I am so grateful for that first lunch that we had with you. Everyone was having some good-looking sushi, except for me because I was fasting. I felt so empowered by the fact that you were curious and were asking me questions about fasting. As a Muslim in the US, people tend to shy away and don’t engage me with such openness, probably out of fear of stepping on the wrong toes. But this was the most amazing stream of questions, thank you forever! It made fasting while working at SYP feel so much more normal."
  },  
      {
    title: "Dearest Anya",
    text: "You are a warrior!!!! Watching you approach the complexity of relationships is incredible to me. You never dismiss the difficult, and that is something I don’t get to see everyday. I am in awe of how much strength you carry within yourself. I want to learn so much more from you!! Thanks for teaching me about the amazing cashew/dark chocolate combo. It is life-changing."
  },  
      {
    title: "Dearest Arne",
    text: "Thank you so much for showing me the mother room when I asked about an enclosed space in the building. I sometimes shy away from asking for such resources, and I’m so so glad for you pointing me to the perfect place for prayer. Also, talk about mood lighting!!!"
  },  
      {
    title: "Dearest Erika",
    text: "I cannot express my gratitude for you!! Working with you in the Ancestry project felt like I had been working with you for a long time, so open and at ease. I am so so so so lucky for this experience, and really hope our paths will cross again. All those notes, the incredible color coding, the cuteness breaks, the team dinner, the thoughtfulness, the conversations, introducing me to the Martha Graham technique, the amazing pod transformation, for taking pictures of meetings I’m not in, for being so welcoming, for sharing your amazing homemade meal stories, and everything else! A million times thank you. "
  },  
      {
    title: "Dearest Caleb",
    text: "Thanks for the laughs back when we used to sit near each other. Ah, the days of yore. If you ever work on projects in Kuwait you know who to call!! P.S. It was such a surprise to see you in Burlingame on a casual stroll!!! Hope you will tell people that you once worked with a girl from the desert. "
  },  
      {
    title: "Dearest Issie",
    text: "I wish I had gone to the Fairmont in Berkeley that one weekend! Alas, the picture of you and I having a drink after a massage can only live on in my memory. And now that I am giving it life here, perhaps our collective memory. I absolutely enjoyed talking with you. P.S. You must stay at the spa suites at Bardessono one day."
  },  
      {
    title: "Dearest Rie",
    text: "I do hope we run into one another accidentally wearing the same dress!!! Your sneakers are very cool of course, as is your perceived sentiment of airports—one that I absolutely share, living in between worlds. Thank you for so many learnings, for the opportunity here, and of course for the Exploratorium tickets, which I am sharing with Vasilia!!!"
  },  
        {
    title: "Dearest Hannah M",
    text: "I will never wear color again without thinking of you!!! Unless I slowly start to wear a lot of color, in which case I will still think of you because I just did it."
  },  
        {
    title: "Dearest Corley",
    text: "Tea Time was one of my favorite moments at SYP, because it was the perfect platform to ramble on about my design and mental endeavors. It’s absolutely beautiful that you put this down-to-earth, small gathering for us to get to know one another. The pastries looked amazing, and thank you endlessly for telling me to grab a piece for after I broke my fast that day. Your thoughtfulness is so heartwarming!!! Too bad my slow ass didn’t actually get to doing that."
  },  
      {
    title: "Dearest Christian",
    text: "I am eternally thankful you are part of SYP because the greatness definitely needs to be grounded in the reality of this world and all its complexities. It was hard for me to see how to do that in a professional setting, especially since I have a ton of optimistic energy that will die if not presented with a very critical reality check, especially since I am fresh out of an art school that is very much “Make art that matters”, especially since I am from Kuwait! Having a more thorough conversation with you is one of the moments that I will cherish for many reasons, but mainly for learning how to continue to grow."
  },  
        {
    title: "Dearest Bob",
    text: "TEA STAINING back at ya!!!!"
  },  
        {
    title: "Dearest Tim",
    text: "Tim ah yes the flan master! We got our golden time back."
  },  
      {
    title: "Dearest Judith",
    text: "Judith your jib jabs are overwhelmingly amazing. I have no words!!! Thank you for embracing the rollercoaster ride of Ancestry, I hope you make it to the finish line with a ton of smiles and laughs!!!"
  },  
        {
    title: "Dearest Ben",
    text: "I thought it was the best thing ever that our introduction happened over the kitchen sink after tea time. Short n sweet, as they say. It’s good to have some non-American accents in the office!!!"
  },  
        {
    title: "Dearest Arthur",
    text: "Hell yeah SYP Interns of 2018."
  },  
      {
    title: "Dearest Dzigbodi",
    text: "Thank you for hosting the cookbook club!!! You are the most efficient host and can read minds from a thousand thoughts away. Your knives are very cool, and the movie you made with Bob is even cooler. That was the best thing. Really."
  },  
        {
    title: "Dearest Jamie",
    text: "The image of your hair swaying as you walk will never be forgotten. Choosing Horse, Horse, Horse is the most appropriate in this context. Am I even making any sense here? My favorite thing is when you talked about being hopped up on Dr. Pepper sugar after getting burgers with Jen. That’s what I’m talking about!!!!"
  },  
        {
    title: "Dearest Kat",
    text: "Thank you so much for being there through all my production woes and wrong file-sending and last minute printing. If you ever go in that coffee train in Pacifica with the fantastic sign, please send pictures!!"
  },  
      {
    title: "Dearest Mickey",
    text: "I couldn’t ask for a more illuminating moment than you and I learning something completely unexpected when trying to fit that perfect start into the perfect circle. Thank you for the coffee at Pinterest that one time!! I can say no more!!"
  },  
        {
    title: "Dearest Liz",
    text: "I love everything about you!!! Hopefully we can take a walk around the block one day. I will never forget our shared love for Math. "
  },  
          {
    title: "Dearest Hannah E",
    text: "You are super cool and my favorite thing ever is recognizing you from the photo that Bob sent when you were both in New York, potentially vacuuming."
  },  
      {
    title: "Dearest Mandisa",
    text: "I had so much fun at the office Happy Hour playing Cards Against Humanity!!!!!! Thank you so much for making it a blast."
  },  
        {
    title: "Dearest Rob",
    text: "Your nonchalant approach to marriage is the most incredible thing I have witnessed the past 5 years in SF. As it should be, in my opinion!!!"
  },  
        {
    title: "Dearest Sacha",
    text: "Of course I will miss your energy!!! It has been amazing sharing the journey of waiting for your things to arrive from New York.  I hope one day you wear sneakers to work and remember me!"
  },  
      {
    title: "Dearest Mo",
    text: "Indeed I will be back!!! Thank you for every single time that you say good morning Yasmeen, because it is truly the most wholesome way to start the day. I don’t always accidentally rhyme, but I think this is the most appropriate space to do so. Rock on!!! P.S. I love your shirts!!!"
  },  
        {
    title: "Dearest Sarah",
    text: "Your humor is just!!!! Hope you never let go of your boyfriend because that Outerlands bread is just too good. Clearly you can see where my priorities are. I'm so glad we sat near one another. Your conversations are A+."
  },  
          {
    title: "Dearest Danielle",
    text: "We have never met but I have never felt so strongly about someone’s online presence!!!! Your emails are the best, your slacks are the best, I think you’re the best."
  },  
      {
    title: "Dearest Vasilia",
    text: "If you ever go to the Exploratorium after dark, I will be there in spirit!!! I just have endless appreciation for you. I’ve said this once and will say it again and again, but production is the highest stakes in the entire company!!! Printers are ruthless!!! And amazing, obviously."
  },  
        {
    title: "Dearest Keith",
    text: "I don’t know you personally, and have never met or spoken with you, but I thought I should pay tribute to the implied hero of Bob and Dzigbodi’s movie."
  },  
        {
    title: "Dearest Clint",
    text: "It was super special to get to work with you both on Exploratorium and Ancestry!!! Keep it weird pls!!! Sprinkle some comic sans into the company, maybe. Kazoos! P.S. Will never forgive defacing your own lil baby picture. But I guess the beard must live on."
  },  
      {
    title: "Dearest Lisa",
    text: "Thank you for greeting me with warmth when my desk and I moved to the center of the office!!"
  },  
        {
    title: "Dearest Tanisha",
    text: "8 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },  
          {
    title: "Dearest Nicholas",
    text: "Nothing is more grounding than hearing someone who has been in the professional world for quite some time talk about something as universal as falling in love with a city. Thank you for the talk while we were waiting for that one interview!!! I hope we do continue our conversation in six months...and I can tell you all about how I will have managed to stay slow in New York!!"
  },  
      {
    title: "Dearest Raul",
    text: "I fixed the javascript!!!!! I am so glad we met in SF. Nothing brings people closer than a silly mistake in code that is fixed easily. Ah, the frustration!"
  },  
        {
    title: "Dearest Daniel",
    text: "I think our shining moment was getting the whole office to put together an office beach in celebration of our birthdays. I will neevr forget when you walked to my desk on my first day and gave me my work laptop. It was like you were like an angel sent from digital heaven. What a role!!"
  },  
        
];

// Get reference to the output area
var $outputDiv = $(".section-display");

// Set a click event handler for each of the images
$imgs.on("click", function(){
  // Find the child elements within the output div that need updating and
  // extract the content from the array of objects that correspond
  // to the index of the image that was clicked.
  $(".title", $outputDiv).text(data[$(this).index()].title);
  $(".text", $outputDiv).text(data[$(this).index()].text);    
});


$(document).on('mousewheel .sypfaces', function() {
    $('.sypfaces').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
    
    });
