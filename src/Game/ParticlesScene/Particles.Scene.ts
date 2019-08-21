import { System, Sprite, TweenSystem, BlueprintBuilder } from "webgladiator";
import { interval, fromEvent } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';
import { Scene, Entity, Text } from "webgladiator";
import { GameObjectBuilder } from "webgladiator";
import { Game } from "../Game";
import { PARTICLES_CONFIG } from "./Particles.Config";
import { particlesSystem } from "webgladiator";
const snitch = (items) => items[Math.floor(Math.random() * items.length)];

export class ParticlesScene extends Scene {
    owner: Game;
    isAlive = true;
    particleContainer;
    start() {
        this.particleContainer = this.getNode("particle");
        particlesSystem.emit(this.particleContainer, ["Resources/particle.png", "Resources/fire.png"], PARTICLES_CONFIG);

        this.particleContainer.x = window.innerWidth / 2;
        this.particleContainer.y = window.innerHeight / 2;
        fromEvent(window, "pointermove").pipe(takeWhile(() => this.isAlive)).subscribe((e: PointerEvent) => {

            this.particleContainer.x = e.clientX;
            this.particleContainer.y = e.clientY;
        })
    }

    kill() {
        this.isAlive = false;
        super.kill();
    }

}
