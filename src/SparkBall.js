var Player = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( dot1 );
        this.spdx = 0;
        this.spdy = 0;
    },
    update: function( dt ) {
        var pos = this.getPosition();
        this.setPosition( new cc.Point( pos.x, pos.y ) );
    },

}); 