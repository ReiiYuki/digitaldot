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
        
        this.CreditButton = cc.Sprite.create(res.CreditButt1);
        this.CreditButton.setPosition(cc.p(350,200));
        this.addChild(this.CreditButton);
        
        this.select = MainLayer.DIR.START;
        console.log(this.select);
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
    onKeyDown: function( keyCode, event ) {
        
    },
    onKeyUp: function( keyCode, event ) {
        if (keyCode == cc.KEY.down ) {
            this.selecting();

           	console.log( keyCode+"" + this.select );

        }
        if (keyCode == cc.KEY.enter) {
            if (this.select == MainLayer.DIR.START){
                cc.director.runScene(new StartScene());
            }
            else {
            }
        }
    },
    selecting: function() {
        if (this.select == MainLayer.DIR.START) {
            this.select = MainLayer.DIR.CREDIT;
        } 
        else {
            this.select = MainLayer.DIR.START;
        }
    },
    update: function(dt) {

        if (this.select == MainLayer.DIR.START){
            this.StartButton.initWithFile(res.StartButt2);
            this.CreditButton.initWithFile(res.CreditButt1);
        }
        if (this.select == MainLayer.DIR.CREDIT){
            this.StartButton.initWithFile(res.StartButt1);
            this.CreditButton.initWithFile(res.CreditButt2);
        }
    }
});
MainLayer.DIR = {
    START: 1,
    CREDIT: 0
}
var MainScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new MainLayer();
        layer.init();
        this.addChild( layer );
    }
});