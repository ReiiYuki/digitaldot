var SparkBall = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( res.SparkBall );
        this.spdx = 0;
        this.spdy = 0;
    },
    update: function( dt ) {
        var pos = this.getPosition();
        if (pos.x<40||pos.x>760){
            if (pos.x<40){
                this.spdx*=-1
                this.setPositionX(50);
                console.log(this.spdx+"x")
            }
            else if (pos.x>760){
                this.spdx*=-1
                this.setPositionX(700);
                console.log(this.spdx+"x")
            }
        }
        else {
            this.setPositionX(pos.x+this.spdx);
        }
        if (pos.y<40||pos.y>565){
            if (pos.y<40){
                this.spdy*=-1
                this.setPositionY(50);
                console.log(this.spdy+"y")
            }
            else if (pos.y>565){
                this.spdy*=-1
                this.setPositionY(560);
                console.log(this.spdy+"y")
            }
        }
        else {
            this.setPositionY(pos.y+this.spdy);
        }
    },
    move : function(player) {
        if (checkPlayerSparkCollision(player,this)==1){
            this.spdx = 10;
            this.spdy = 0;
        }
        if (checkPlayerSparkCollision(player,this)==2){
            this.spdx = 10;
            this.spdy = -10;
        }
        if (checkPlayerSparkCollision(player,this)==3){
            this.spdx = 10;
            this.spdy = 10;
        }
        if (checkPlayerSparkCollision(player,this)==4){
            this.spdx = -10;
            this.spdy = 0;
        }
        if (checkPlayerSparkCollision(player,this)==5){
            this.spdx = -10;
            this.spdy = -10;
        }
        if (checkPlayerSparkCollision(player,this)==6){
            this.spdx = -10;
            this.spdy = 10;
        }
        if (checkPlayerSparkCollision(player,this)==7){
            this.spdx = 0;
            this.spdy = -10;
        }
        if (checkPlayerSparkCollision(player,this)==8){
            this.spdx = 0;
            this.spdy = 10;
        }
    },

}); 