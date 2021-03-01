import 'normalize.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './assets/scss/style.scss';
import './assets/js/main.js';

let accordions = Array.from(document.getElementsByClassName("header-three-accordion"));

accordions.forEach( item => {
	item.addEventListener('click', function() {
    let show = function(element){
      element.classList.add("active")
      let panel = element.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    let hide = function(element){
      element.classList.remove("active")
      let panel = element.nextElementSibling;
      panel.style.maxHeight = null;
    }
    let toggle = function(element){
      let panel = element.nextElementSibling;
      if (panel.style.maxHeight) {
        hide(element);
      } else {
        show(element);
      }
    }

    accordions.forEach(item => {
      if (item !== this){
        hide(item)
      }
    });
    toggle(this);
  });
})

// import './assets/js/vendor/pathseg.js';
// import 'poly-decomp';
// import Matter from 'matter-js';

// class Bubbles {
//   constructor(options) {
//     this.options = {
//       element: document.getElementById('world'),
//       airFriction: 0.03, // air friction of bodies 
//     };

//     this.resizeDelay = 400;

//     // throttling variables and timeouts
//     this.resizeTimeout = null;

//     // Matter.js objects
//     this.engine = null;
//     this.render = null;
//     this.runner = null;

//     this.setSize();
//     this.initScene();
//     this.initEvents();
//   }

//   setSize() {
//     this.viewportWidth = document.documentElement.clientWidth;
//     this.viewportHeight = document.documentElement.clientHeight;
//   }

//   initScene() {
//     // engine
//     this.engine = Matter.Engine.create(); // handles the physics
//     this.engine.world.gravity.y = 0.4;

//     // world
//     this.world = this.engine.world; // stores the bodies

//     // render
//     this.render = Matter.Render.create({
// 			// this is the canvas in dom
//       canvas: this.options.element,
// 			// matter engine
//       engine: this.engine,
//       options: {
//         width: 1440,
//         height: 1024, 
//         background: 'transparent',
//         wireframes: false,
//         showAngleIndicator: false,
//       },
//     });
//     Matter.Render.run(this.render);

//     // runner 
//     this.runner = Matter.Runner.create();
//     Matter.Runner.run(this.runner, this.engine);

//     this.initSVG();
//     this.initWall();
//   }

//   random(range) {
//     const [min, max] = range;
//     return Math.random() * (max - min) + min;
//   }

//   rectangle(x, y, width, height) {
//     return Matter.Bodies.rectangle(x, y, width, height, {
//       isStatic: true,
//       render: {
// 				fillStyle: 'blue',
// 				strokeStyle:  'blue',
// 				lineWidth: 1,
//       },
//     });
//   }

//   initSVG() {
//     const el = document.getElementById('mainsvg');
//     let bpaths = el.getElementsByClassName('b');

//     for (let i = 0; i < bpaths.length; i++) {
// 			const path = bpaths[i];
//       const vertexSets = [];
			
//       const points = Matter.Svg.pathToVertices(path, 3);
			
//       vertexSets.push(Matter.Vertices.scale(points, 1.2, 1.2));

// 			try { Matter.World.add(this.engine.world, Matter.Bodies.fromVertices(100 + i * 100, 200 + i * 50, vertexSets, {
//         render: {
//           fillStyle: '#000',
//           strokeStyle: '#000',
//           lineWidth: 1,
//           airFriction: this.options.airFriction
//         },
// 			}, true));
// 			} catch(e) {
// 				console.log(e)
// 			}
//     }
// 		// console.log('yes')

//     // let cpaths = el.getElementsByClassName('b');

//     // for (let i = 0; i < cpaths.length; i++) {
// 		// 	const path = cpaths[i];
//     //   const vertexSets = [];
			
//     //   const points = Matter.Svg.pathToVertices(path, 3);
			
//     //   vertexSets.push(Matter.Vertices.scale(points, 1.2, 1.2));

// 		// 	try { Matter.World.add(this.engine.world, Matter.Bodies.fromVertices(100 + i * 100, 200 + i * 50, vertexSets, {
//     //     render: {
//     //       fillStyle: '#000',
//     //       strokeStyle: '#000',
//     //       lineWidth: 1,
//     //       airFriction: this.options.airFriction
//     //     },
// 		// 	}, true));
// 		// 	} catch(e) {
// 		// 		console.log(e)
// 		// 	}
			
//     // }
// 	}

//   initWall() {
//     Matter.World.add(this.engine.world, [
//       this.rectangle(720, 40, 1440, 20), // top
//       this.rectangle(720, 984, 1440, 20), // bottom
//       this.rectangle(40, 512, 20, 1024), // left
//       this.rectangle(1400, 512, 20, 1024), // right
//     ]);
//   }

// 	// initWall() {
//   //   Matter.World.add(this.engine.world, [
//   //     this.rectangle(280, 40, 560, 20), // top
//   //     this.rectangle(280, 760, 560, 20), // bottom
//   //     this.rectangle(40, 400, 20, 800), // left
//   //     this.rectangle(520, 400, 20, 800), // right
//   //   ]);
//   // }

//   initEvents() {
//     this.addEventListeners();
//     this.dragNDrop();
//   }

//   dragNDrop() {
//     this.mouseConstraint = Matter.MouseConstraint.create(this.engine, {
//       element: this.options.element,
//       constraint: {
//         render: {
//           visible: false,
//         },
//         stiffness: 0.6,
//       },
//     });
//     Matter.World.add(this.world, this.mouseConstraint);

//     this.mouseConstraint.mouse.element.removeEventListener('mousewheel', this.mouseConstraint.mouse.mousewheel);
//     this.mouseConstraint.mouse.element.removeEventListener('DOMMouseScroll', this.mouseConstraint.mouse.mousewheel);
//   }

//   shutdown() {
//     Matter.Engine.clear(this.engine);
//     Matter.Render.stop(this.render);
//     Matter.Runner.stop(this.runner);
//     this.removeEventListeners();
//   }

//   addEventListeners() {
//     window.addEventListener('resize', this.onResizeThrottled.bind(this));
//   }

//   removeEventListeners() {
//     window.removeEventListener('resize', this.onResizeThrottled);
//   }

//   onResizeThrottled() {
//     if (!this.resizeTimeout) {
//       this.resizeTimeout = setTimeout(this.onResize.bind(this), this.resizeDelay);
//     }
//   }

//   onResize() {
//     this.shutdown();
//     this.initScene();
//   }
// }

// window.addEventListener('DOMContentLoaded', () => {
//   new Bubbles();
// });