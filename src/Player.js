var Player = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( dot1 );
        this.spdx = 0;
        this.spdy = 0;
    },
    update: function( dt ) {
        var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x+this.spdx, pos.y+this.spdy ) );
    },
    moveUP: function( key ) {
        if (key == cc.KEY.up){
            this.spdy = 3;
        }
        if (key == cc.KEY.down){
            this.spdy = -3;
        }
        if (key == cc.KEY.right){
            this.spdx = 3;
        }
        if (key == cc.KEY.left){
            this.spdx = -3;
        }
    },
    stopMove: function( ) {
        this.spdx = 0;
        this.spdy = 0;
    }
});