var Boundary  = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( res.Boundary1 );
        this.state = 1;
    },

});