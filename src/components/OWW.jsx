import React from 'react'

import '../oww.css'
import Contact from './Contact'
import Scroll3D from './Scroll3D'

function OWW() {

  const content = [

    <img className="oww-logo" src="./images/oww-logo.svg" alt="The logo for One Way Wellington." />,

  ]

  return (
    <div className="oww">
      <div className="starfield__wrapper" />
      <div className="corridor__wrapper" />

      <Scroll3D content={content} initialZ={-200} zIndex={-1} />

      <div className="oww__content" >

        <div className="oww-card__outer">
          <div className="oww-card oww-card--text">
            <h3 className="oww-card__title">In A Galaxy, Not So Far Away...</h3>
            <p className="paragraph-break">
              Planet Wellington calls out to the galaxy in desperate need for artists - the world can only move forward with help from these creative thinkers! One Way Wellington is a 2D spaceship building/management game about transporting creative talent across the Milky Way to the ‘Coolest Little Capital’.
            </p>
            <img className="oww-image oww-image--end" src="./images/oww-ship.jpg" alt="A spaceship flying through space, filled with passengers." />
          </div>
        </div>

        <div className="oww-card__outer">
          <div className="oww-card oww-card--text">
            <h3 className="oww-card__title">My Involvement</h3>
            <p className="paragraph-break">
              As the Creator and Developer of One Way Wellington, I've been responsible for everything from ideation to production and release.
            </p>
            <p className="paragraph-break">
              This solo project has been an exciting venture because I’ve pursued what I love, designing and programming video games, while taking the project through the entire production pipeline alongside Wellington-based client, WellingtonNZ.
             </p>
            <p>
              One Way Wellington was presented at the Massey Exposure Exhibition, November 2019.
             </p>
          </div>
        </div>

        <div className="oww-card__outer">
          <div className="oww-card oww-card--text">

            <h3 className="oww-card__title">The Game</h3>


            <h4>Build Your Ship</h4>
            <p className="paragraph-break">
              In One Way Wellington, your first task is to construct a spaceship. Lay down the ship plans, then hire advanced builder robots to build them.
            </p>


            <h4>Travel The Galaxy</h4>
            <p className="paragraph-break">
              Once your ship ticks all the boxes, it's time to set sail. Using the map, draw a path between planets en-route to Planet Wellington. You can travel as far across the galaxy as you have fuel.
            </p>

            <h4>Collect Passengers</h4>
            <p className="paragraph-break">
              As you arrive at each planet station, select passengers to board onto your ship. Be careful not to accommodate more passengers than you have the oxygen supplies for.
            </p>

            <img className="oww-image oww-image--break" src="./images/oww-game.jpg" alt="Build your ship, travel the galaxy and collect passengers in One Way Wellington." />

            <h4>Passenger Needs</h4>
            <p className="paragraph-break">
              You need to care for your passengers to keep them happy. Provide beds, bathrooms and cafes to tend to their basic needs.
            </p>

            <h4>Robots Need Love Too</h4>
            <p>
              Thanks to the latest creative innovations, your Wellington-designed builder robots rely on the most advanced fuel type, coffee! Make sure your robots have access to a coffee station to recharge.
            </p>

          </div>
        </div>


        <div className="oww-card__outer">
          <div className="oww-card oww-card--text">
            <h3 className="oww-card__title">Technologies and Challenges</h3>
            <p className="paragraph-break">
              One Way Wellington was built with C# in Unity Engine. During production I developed several systems of interest that needed to work together.
            </p>

            <h4>Building</h4>
            <p className="paragraph-break">
              The building system posed challenges. By design, I wanted players to lay down plans/blueprints for their Builder Robots to later implement. This includes construction of the ship (hull, walls, fuel tanks), as well as instillation of interior furniture (ship controls, oxygen vents, beds, toilets, etc). Some larger furniture items could also span over multiple tiles.
            </p>
            <p className="paragraph-break">
              The solution involves a 2-dimensional array of tile objects. Each one stores a value for 'to-do' construction and 'completed' construction. The 'to-do' is a Job object, a reference to another system (explained later).
            </p>
            <p className="paragraph-break">
              Tiles are rendered using a separate system. The build system tells the render system that a tile has changed, rather than constant checks of the entire map for changes. The Render System uses the Unity built-in Tilemap, which is extended to support connected textures.
            </p>

            <h4>Jobs</h4>
            <p className="paragraph-break">
              The role of the Job System is to unify the allocation and execution of all agent tasks. I gave each agent a brain, so that they're in control of their current task and put their needs first.
            </p>
            <p className="paragraph-break">
              Use case: when a Builder Robot is low on energy, they need to recharge.
              </p>
            <ul>
              <li>
                They ask the Job System to find the closest coffee machine that's not already in use. If the Job System is successful, the Builder Robot gets a new Job: "Go to Charging Pad at (x, y)".
                </li>

              <li>
                This Job needs to know what to do next, otherwise the Robot will get to the Coffee Machine and have nothing to do. The Job has a 'nextJob' value, a reference to another Job object. In this case: "Use Charging Pad until fully charged"
                </li>
              <li>
                Once fully charged, the task is marked as complete so the builder can now ask the Job System for the next construction task.
                </li>
            </ul>

            <h4>Pathfinding</h4>
            <p className="paragraph-break">
              The Unity built-in method for pathfinding is designed for 3D games, along the X/Z plane, while the 2D Tilemap used for rendering is fixed to the X/Y plane. At the time, neither were designed to work together, which posed a big challenge for getting agents to move around the map.
            </p>

            <h4>Oxygen</h4>
            <p className="paragraph-break">
              I created a dynamic Oxygen System using a recursive flood-fill algorithm. This updates every game-tick to redistribute oxygen evenly from room-to-room. Because this frequent task was computationally expensive, this updated asynchronously using multi-threading.
            </p>
            <p className="paragraph-break">
              Oxygen is evenly distributed between all tiles of an enclosed room (must be surrounded by walls and airlock doors). If an airlock door opens, oxygen is free to flow and distribute between both rooms.
            </p>

            <h4>Time Control</h4>
            <p className="paragraph-break">
              Sometimes the player may want to increase the game speed to reduce waiting time of building or travel. I implemented a time control system that switches between 1x, 2x and 5x time speeds.
              I used the Unity built-in time-scale. This increases the game-tick without affecting the rendering-tick - so the game should run at 60 FPS, regardless of the time speed setting.
            </p>

            <h4>Objectives</h4>
            <p className="paragraph-break">
              It was important for the game to include a specific set of objectives, so that a new player can be learn the game at their own pace.
            </p>
            <p className="paragraph-break">
              The Objectives System I made works by displaying a set of 1-3 objectives at a time. For example, the player may see:
            </p>
            <ul>
              <li>Construct at least 30 Hull tiles</li>
              <li>Construct at least 1 Airlock Door</li>
              <li>Hire at least 1 Builder Robot</li>
            </ul>
            <p>
              The game waits for the player to complete all three objectives before displaying the next set of objectives. 
            </p>

          </div>
        </div>

      </div>
      <Contact extraStyle={"contact--oww"}/>
    </div>

  )
}

export default OWW
