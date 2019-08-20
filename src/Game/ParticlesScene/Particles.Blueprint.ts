import { Graphics, Sprite, BlueprintUtil, Entity } from "webgladiator";
import { ParticlesScene } from "./Particles.Scene";
// tslint:disable-next-line: variable-name
export const ParticlesSceneBlueprint = {
    name: "ParticlesScene",
    lazy: true,
    ctor: ParticlesScene,
    layout: { name: "Game" },
    scaleOnly: false,
    blueprints: [
        { ctor: Entity, name: "particle" },
        // { ctor: Graphics, name: "diag_end", left: 512, top: 1024, PivotX: 1, PivotY: 1 },
        // { ctor: Sprite, name: "background", fromImage: "Resources/background.jpeg" },
    ]
}