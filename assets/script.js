

// Put all the images in a JavaScript array
var $imgs = $(".section-link");


// If you store your content in an array of objects, you can do this without creating 
// more than one display div. You'll just get the content from the object in the
// array that has the same index as the image (within a different array)
var data = [
  {
    title: "Default Ipsum 1",
    text: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Default Ipsum 2",
    text: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Default Ipsum 3",
    text: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Default Ipsum 4",
    text: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Default Ipsum 5",
    text: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
});


$(document).ready(function () {
    $('.sypfaces').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
    
    });
