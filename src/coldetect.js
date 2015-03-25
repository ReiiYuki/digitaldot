var checkPlayerSparkCollision = function( player , spark ) {
    positionPlayer = player.getPosition();
    positionSpark = spark.getPosition();
    if (positionPlayer.x>positionSpark.x-60 && positionPlayer.x<positionSpark.x-20){
        if (positionPlayer.y>positionSpark.y-30 && positionPlayer.y < positionSpark.y +30){
            return 1;
        }
        else if (positionPlayer.y>positionSpark.y+30 && positionPlayer.y < positionSpark.y +90){
            return 2;
        }
        else if (positionPlayer.y<positionSpark.y-30 && positionPlayer.y > positionSpark.y -90){
            return 3;
        }
    }
    else if (positionPlayer.x<positionSpark.x+60 && positionPlayer.x>positionSpark.x+20){
        if (positionPlayer.y>positionSpark.y-30 && positionPlayer.y < positionSpark.y +30){
            return 4;
        }
        else if (positionPlayer.y>positionSpark.y+30 && positionPlayer.y < positionSpark.y +90){
            return 5;
        }
        else if (positionPlayer.y<positionSpark.y-30 && positionPlayer.y > positionSpark.y -90){
            return 6;
        }
    }
    else if (positionPlayer.x<=positionSpark.x+20 && positionPlayer.x>=positionSpark.x-20) {
        if (positionPlayer.y<positionSpark.y+30 && positionPlayer.y >= positionSpark.y){
            return 7;
        }
        else if (positionPlayer.y > positionSpark.y-30 && positionPlayer.y < positionSpark.y){
            return 8;
        }
    }
};
var checkObjectBoundaryCollision = function(object) {
    posObjX = object.getPositionX;
    posObjY = object.getPositionY;
    if (posObjX<40){
        object.spdx*=-2
        object.setPositionX(42);
        console.log(object.spdx+"")
    }
    if (posObjX>760){
        object.spdx*=-2
        object.setPositionX(758);
        console.log(object.spdx+"")
    }
    if (posObjY<35){
        object.spdy*=-2
        object.setPositionY(40);
        console.log(object.spdy+"")
    }
    if (posObjY<565){
        object.spdy*=-2    
        object.setPositionY(560);
        console.log(object.spdy+"")
    }
}