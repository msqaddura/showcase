/**
 * Ugly approach use https://www.npmjs.com/package/iocjs instead;
 */

import { AutolayoutAdapter } from "webgladiator";
import { PixiResourceAdapter } from "webgladiator";
import { TimelineMaxAdapter } from "webgladiator";
import { BlueprintBuilder } from "webgladiator";
import { DeviceAdapter } from "webgladiator";
import { PixiAudioAdapter } from "webgladiator";
import { System } from "webgladiator";
import { GameBlueprint } from "./Game/Game.Blueprint";

const manifest = {
  device: new DeviceAdapter(),
  layout: new AutolayoutAdapter(),
  resource: new PixiResourceAdapter(),
  tween: new TimelineMaxAdapter()
};

System.getInstance().inject(manifest);

window.onload = () => {
  window["myWorld"] = BlueprintBuilder.getInstance().createObject(
    null,
    GameBlueprint
  );
};
