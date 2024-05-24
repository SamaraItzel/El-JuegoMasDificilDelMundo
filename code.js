var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["786d64ec-d298-41c7-a4a3-970765cc8ad6","63aed2a1-6078-4466-91c3-c32c145caf8e","5a06e36f-e083-46cd-8156-af99f382da78"],"propsByKey":{"786d64ec-d298-41c7-a4a3-970765cc8ad6":{"name":"obstacle","sourceUrl":"assets/api/v1/animation-library/gamelab/8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb/category_fantasy/wing_bot.png","frameSize":{"x":218,"y":128},"frameCount":8,"looping":true,"frameDelay":2,"version":"8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1744,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb/category_fantasy/wing_bot.png"},"63aed2a1-6078-4466-91c3-c32c145caf8e":{"name":"Sam","sourceUrl":null,"frameSize":{"x":69,"y":98},"frameCount":2,"looping":true,"frameDelay":12,"version":"EglX4f6494qsoAZqsZDRygbXXXt_Lb6r","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":98},"rootRelativePath":"assets/63aed2a1-6078-4466-91c3-c32c145caf8e.png"},"5a06e36f-e083-46cd-8156-af99f382da78":{"name":"Sam2","sourceUrl":"assets/api/v1/animation-library/gamelab/Af7NpLfOWHlazTmrOp5NbuJO_oHxQPBc/category_fantasy/alienPink_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"Af7NpLfOWHlazTmrOp5NbuJO_oHxQPBc","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Af7NpLfOWHlazTmrOp5NbuJO_oHxQPBc/category_fantasy/alienPink_walk.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 10;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary1.shapeColor="#7FFF00";
  boundary2 = createSprite(190,260,420,3);
  boundary2.shapeColor="#7FFF00";
  
  sam = createSprite(20,190,13,13);
  sam.setAnimation("Sam2");
  sam.scale=0.20;
  //sam.shapeColor = "green";
  
  car1 = createSprite(110,130,10,10);
  car1.setAnimation("obstacle");
  car1.scale=0.13;
  //car1.shapeColor = "red";
  car2 = createSprite(225,130,10,10);
  car2.setAnimation("obstacle");
  car2.scale=0.13;
  //car2.shapeColor = "red";
  car3 = createSprite(175,250,10,10);
  car3.setAnimation("obstacle");
  car3.scale=0.13;
  //car3.shapeColor = "red";
  car4 = createSprite(280,250,10,10);
  car4.setAnimation("obstacle");
  car4.scale=0.13;
  //car4.shapeColor = "red";
  
 
//Agrega velocidad para hacer que el auto se mueva.
  car1.velocityY=3;
  car2.velocityY=3;
  car3.velocityY=-3;
  car4.velocityY=-3;

function draw() {
   background("black");
  textSize(20);
  stroke("white");
  fill("white");
  text("Vidas: " + life,200,100);
  strokeWeight(1);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  // Crea la función bounceoff para hacer que el auto rebote en los límites.
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);

  //Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
  if(keyDown("right")){
    sam.x+=3;
  }
  if(keyDown("left")){
    sam.x = sam.x-3;
  }

  //Agregar la condición de reducir la vida de Sam si toca el carro.
  if(sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)){
    sam.x=20;
    sam.y=190;
    life-=1;
  }
  
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
