var GameLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();

        //create the background image and position it at the center of screen
        var centerPos = cc.p(800 / 2, 600 / 2);
        var spriteBG = cc.Sprite.create(bg);
        spriteBG.setPosition(centerPos);
        this.addChild(spriteBG);
    }
});
 
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});