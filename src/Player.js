var Player = cc.Sprite.extend({
    
    ctor: function(pic,DIR) {
        
        this._super();
        this.initWithFile( pic);
        
        this.keyboard = DIR;
        
        this.spdx = 0;
        this.spdy = 0;
                
    },
    
    update: function( dt ) {
        
        var pos = this.getPosition();
        
        if (pos.x<40||pos.x>760){
            
            if (pos.x<40){
                
                this.spdx*=-1
                this.setPositionX(50);
                
            }
            else if (pos.x>760){
                
                this.spdx*=-1
                this.setPositionX(700);
                
            }
            
        }
        else {
            
            this.setPositionX(pos.x+this.spdx);
            
        }
        if (pos.y<40||pos.y>565){
            
            if (pos.y<40){
                
                this.spdy*=-1
                this.setPositionY(50);
                
            }
            else if (pos.y>565){
                
                this.spdy*=-1
                this.setPositionY(560);
                
            }
            
        }
        else {
            
            this.setPositionY(pos.y+this.spdy);
            
        }
    },
    
    moveUP: function( key ) {
        
        if (key == this.keyboard[0]){
            
            this.spdy = 12;
            
        }
        if (key == this.keyboard[1]){
            
            this.spdy = -12;
            
        }
        if (key == this.keyboard[2]){
            
            this.spdx = 12;
            
        }
        if (key == this.keyboard[3]){
            
            this.spdx = -12;
            
        }
    },

});
Player.DIR = {
    
    PLAYER1: [cc.KEY.w,cc.KEY.s,cc.KEY.d,cc.KEY.a],
    PLAYER2: [cc.KEY.up,cc.KEY.down,cc.KEY.right,cc.KEY.left],
    PLAYER3: [cc.KEY.o,cc.KEY.l,cc.KEY[";"],cc.KEY.k],
    PLAYER4: [cc.KEY.num8,cc.KEY.num2,cc.KEY.num6,cc.KEY.num4]
    
};