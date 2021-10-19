// MATTER JS

import Matter from 'matter-js'

// Ok images has doubled in size 40 entries :/

import { images, imageCoords } from './images'

// module aliases
const { Engine } = Matter
const { Render } = Matter
const { World } = Matter
const { Bodies } = Matter
const { MouseConstraint } = Matter
const { Mouse } = Matter

// create an engine
const engine = Engine.create()
const { world } = engine

// create renderer
const render = Render.create({
  element: document.body,
  engine,
  options: {
    width: 1000,
    height: 1000,
    background: '#E1FF00',
    showAngleIndicator: false,
    wireframes: false,
  },
})

// sol
const ground = Bodies.rectangle(1000, 800, 2000, 1, { isStatic: true })
// wall left
const wallLeft = Bodies.rectangle(0, 0, 1, 1600, { isStatic: true })
// wall right
const wallRight = Bodies.rectangle(1000, 0, 1, 1600, { isStatic: true })

const worldOjects = []

// create items

const randomdec = () => (Math.random() * (40 - 30) + 30) / 1000

for (let index = 0; index < imageCoords.length; index += 1) {
  const url = images[index]
  const { x, y } = imageCoords[index]

  const image = Bodies.circle(x + 80, y + 40, 13, {
    density: 0.04,
    frictionAir: randomdec(),
    restitution: randomdec(),
    friction: randomdec(),
    render: {
      sprite: {
        texture: url,
        xScale: 0.1,
        yScale: 0.1,
      },
    },
  })
  worldOjects.push(image)
}

engine.gravity.scale = 0

const button = document.getElementById('button')
button.addEventListener('click', () => {
  engine.gravity.scale = 0.001
})

// add all of the bodies to the world
World.add(engine.world, [wallLeft, wallRight, ground, ...worldOjects])

// run the engine
Matter.Runner.run(engine)

// run the renderer
Render.run(render)

// add mouse control
const mouse = Mouse.create(render.canvas)
const mouseConstraint = MouseConstraint.create(engine, {
  mouse,
  constraint: {
    stiffness: 0.2,
    render: {
      visible: false,
    },
  },
})

World.add(world, mouseConstraint)

// keep the mouse in sync with rendering
render.mouse = mouse
