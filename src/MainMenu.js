var MainLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },
    init: function() {
        this._super();
        var centerPos = cc.p( 400 , 300 );
        var spriteBG = cc.Sprite.create( res.BgMain );
        spriteBG.setPosition( centerPos );
        this.addChild( spriteBG );
        
        var header = cc.Sprite.create(res.MenuLabel);
        header.setPosition(cc.p(350,450));
        this.addChild(header);
        
        this.StartButton = cc.Sprite.create(res.StartButt2);
        this.StartButton.setPosition(cc.p(350,300));
        this.addChild(this.StartButton);

        this.scheduleUpdate();
        this.addKeyboardHandlers();
        return true;
    },
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    },
    onKeyDown: function( keyCode, event ){
    
    },
    onKeyUp: function( keyCode, event ) {
        cc.director.runScene(new StartScene());
        
    },

});

var MainScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new MainLayer();
        layer.init();
        this.addChild( layer );
    }
});