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
