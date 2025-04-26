import {Lib} from "@amami-harhid/tscratch3likejs/s3lib-importer";
import type {S3PlayGround} from "@typeJS/s3PlayGround";
import type {S3Stage} from "@typeJS/s3Stage";
import {Jurassic01, Chill, AssetHost} from "./constant";

let stage:S3Stage;

async function preload(this:S3PlayGround) {
    this.Image.load(AssetHost+'/assets/Jurassic.svg', Jurassic01 );
    this.Sound.load(AssetHost+"/assets/Chill.wav", Chill);
}
async function prepare() {
    // ステージを作る
    stage = new Lib.Stage();
    // ステージに背景を追加
    await stage.Image.add( Jurassic01 );
    await stage.Sound.add( Chill );
}

async function setting() {

    stage.Event.whenFlag(async function*(this:S3Stage){
        for(;;){
            await this.Sound.playUntilDone(Chill);
            yield;
        }
    })

}
export {preload, prepare, setting};

