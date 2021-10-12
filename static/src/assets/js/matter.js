
//MATTER JS

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
		MouseConstraint = Matter.MouseConstraint,
		Mouse = Matter.Mouse;

// create an engine
  var engine = Engine.create(),
        world = engine.world;


// create renderer
   var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 600,
            height: 850,
            background: 'whitesmoke',
            showAngleIndicator: false,
            wireframes: false
        }
    });



//sol
var ground = Bodies.rectangle(1000, 850, 2000,1, { isStatic: true });

//murs
var murdroit = Bodies.rectangle(0,0,1,1600, { isStatic: true } );

var murgauche = Bodies.rectangle(600,0,1,1600, { isStatic: true });

//obstacle
//var ground2 = Bodies.trapezoid(100, 400, 30, 120, 20, { isStatic: true });


//image 1 jaune
var t = Bodies.circle(200, -200, 90, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.4,
                friction: 0.1,
                render: {
                    sprite: {
                        texture: 'https://66.media.tumblr.com/cfdc0eadf39b8279386f49c337516959/tumblr_prvajkVevC1v8evnjo3_400.png'
                    }
                }
            });


//image 2 bleu
var r = Bodies.circle(400, -400, 90, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.4,
                friction: 0.1,
                render: {
                    sprite: {
                        texture: 'https://66.media.tumblr.com/ef6b9a5e3f7fd2598d005ea574e12ee6/tumblr_prvajkVevC1v8evnjo1_250.png'
                    }
                }
            });

//image 3 marron
var a = Bodies.circle(300, -600, 90, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.5,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://66.media.tumblr.com/d30cc35c3e5be96909666aedfab99f9d/tumblr_prvajkVevC1v8evnjo4_250.png'
                    }
                }
            });


//image 4
var n = Bodies.rectangle(200, -900, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://66.media.tumblr.com/a00bbaa27e4d420a429bf8403423d3f3/tumblr_prvajkVevC1v8evnjo5_400.png'
                    }
                }
            });

//image 5
var s = Bodies.rectangle(400, -1200, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://66.media.tumblr.com/f70b1a815aa108394673525d9b3c2961/tumblr_prvajkVevC1v8evnjo6_250.png'
                    }
                }
            });


//image 5
var g = Bodies.rectangle(300, -1500, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://66.media.tumblr.com/d8eb92d228e3dbaaed1d661afafe895d/tumblr_prvajkVevC1v8evnjo2_400.png'
                    }
                }
            });

//image 5
var r1 = Bodies.rectangle(200, -1800, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://66.media.tumblr.com/ef6b9a5e3f7fd2598d005ea574e12ee6/tumblr_prvajkVevC1v8evnjo1_250.png'
                    }
                }
            });


//image 5
var e = Bodies.rectangle(400, -2100, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://66.media.tumblr.com/0ff09b5ccc68e767e346ea158725ebd6/tumblr_prvaobCUHo1v8evnjo1_250.png'
                    }
                }
            });



//image 5
var s1 = Bodies.rectangle(300, -2300, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://66.media.tumblr.com/f70b1a815aa108394673525d9b3c2961/tumblr_prvajkVevC1v8evnjo6_250.png'
                    }
                }
            });




//image 5
var s2 = Bodies.rectangle(200, -2500, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://66.media.tumblr.com/f70b1a815aa108394673525d9b3c2961/tumblr_prvajkVevC1v8evnjo6_250.png'
                    }
                }
            });



//image 5
var i = Bodies.rectangle(400, -2800, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://66.media.tumblr.com/f6b1234fd6611bc36679fed942dc8ece/tumblr_prvakfU3lL1v8evnjo1_250.png'
                    }
                }
            });



//image 5
var o = Bodies.rectangle(300, -3100, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://66.media.tumblr.com/5052b810048f840bca7ac55cdda3c122/tumblr_prvakfU3lL1v8evnjo2_400.png'
                    }
                }
            });




//image 5
var n1 = Bodies.rectangle(200, -3500, 90, 140, {
                density: 0.0005,
                frictionAir: 0.01,
                restitution: 0.3,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: 'https://66.media.tumblr.com/a00bbaa27e4d420a429bf8403423d3f3/tumblr_prvajkVevC1v8evnjo5_400.png'
                    }
                }
            });




// add all of the bodies to the world
World.add(engine.world, [murdroit, murgauche, ground,  t, r, a, n, s, g, r1, e, s1, s2, i, o, n1]);


// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);






// add mouse control
var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });


World.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;