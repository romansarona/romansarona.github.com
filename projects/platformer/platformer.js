$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-60, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);
   

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(680, 400, 87, 20);
    createPlatform(179, 487, 100, 60); 
    createPlatform(907, 230, 200, 50);
    createPlatform(570, 550, 200, 70); 
    createPlatform(370, 100, 200, 70); 
    
    
    
    
    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    
    
    createCollectable("amongus", 500, 450,);
    createCollectable("amongus", 250, 400,); 
    createCollectable("amongus", 150, 470,); 
    createCollectable("amongus", 550, 243,); 
    createCollectable("amongus", 430, 189,); 
    createCollectable("amongus", 170, 567,); 
    createCollectable("amongus", 550, 368,); 
    createCollectable("amongus", 780, 257,); 
    createCollectable("amongus", 456, 785,); 
    createCollectable("amongus", 973, 457,); 
    createCollectable("amongus", 386, 325,); 
    createCollectable("amongus", 510, 300,); 
    createCollectable("amongus", 850, 300,); 
    createCollectable("amongus", 786, 300,); 

    
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)

    createCannon("left", 500, 1111); 
    createCannon("top", 500, 1111); 
    createCannon("right", 500, 1111); 





    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
