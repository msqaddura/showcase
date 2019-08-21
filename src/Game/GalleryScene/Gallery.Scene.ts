import { System, Sprite, TweenSystem, BlueprintBuilder } from "webgladiator";
import { interval, timer } from "rxjs";
import { takeUntil, takeWhile } from "rxjs/operators";
import { Scene, Entity, Text } from "webgladiator";
import { GameObjectBuilder } from "webgladiator";
import { Game } from "../Game";
import { GALLERY_CONFIG } from "./GALLERY.Config";

const snitch = items => items[Math.floor(Math.random() * items.length)];

export class GalleryScene extends Scene {
  owner: Game;
  isAlive = true;
  start() {
    const slides = [];
    for (let i = 0; i < GALLERY_CONFIG.TOTAL; i++) {
      let blueprints = [];
      for (let j = 0; j < GALLERY_CONFIG.SLIDE_SIZE; j++) {
        let textOrImage =
          Math.random() < 0.5
            ? {
                ctor: Sprite,
                fromImage: snitch(GALLERY_CONFIG.IMAGES)
              }
            : {
                ctor: Text,
                text: snitch(GALLERY_CONFIG.TEXTS),
                options: {
                  fontSize: Math.random() * 20 + 20,
                  fill: 0x0000ff
                }
              };

        blueprints.push({
          ...textOrImage,
          y: 256 + 256 * j,
          name: `item_${j}`,
          anchorX: 0.5,
          anchorY: 0.5,
          x: 256
        });
      }
      slides.push({ ctor: Entity, blueprints, name: "slide" });
    }

    timer(0, GALLERY_CONFIG.INTERVAL)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe(value => {
        if (this.getNode("slide")) {
          this.removeNode("slide");
        }
        BlueprintBuilder.getInstance().createAndAddObject(
          this,
          slides[value % slides.length]
        );
      });
    //BlueprintBuilder.getInstance().createAndAddObject(this, { ctor: Sprite, fromImage: "Resources/tile.png" })
  }

  kill() {
    this.isAlive = false;
    super.kill();
  }
}
