var Player = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( res.player1 );
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
    moveUP: function( key ) {
        var pos = this.getPosition();
        if (key == cc.KEY.up){
            this.spdy = 12;
        }
        if (key == cc.KEY.down){
            this.spdy = -12;
        }
        if (key == cc.KEY.right){
            this.spdx = 12;
        }
        if (key == cc.KEY.left){
            this.spdx = -12;
        }
    },
    stopMove: function( ) {
        var pos = this.getPosition();
        if (this.spdx != 0){
            if (this.spdx>0){
                this.spdx-=2;
            }
            if (this.spdx<0){
                this.spdx+=2;
            }
        }
        if (this.spdy != 0){
            if (this.spdy>0){
                this.spdy-=2;
            }
            if (this.spdy<0){
                this.spdy+=2;
            }
        }
        
    },

});
