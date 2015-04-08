var Score = cc.Node.extend({
    
    ctor : function( PlayerNumber ){
        this._super();
        
        this.spark = null;
        this.playerNumber = PlayerNumber;
        
        if ( PlayerNumber == 1 ){
            this.picOfPlayer = res.Player1Label;
            this.scoreDigit = scoreP1;
        }else if ( PlayerNumber == 2 ){
            this.picOfPlayer = res.Player2Label;
            this.scoreDigit = scoreP2
        }
        
        this.playerLabel = cc.Sprite.create(this.picOfPlayer);
        this.playerLabel.setAnchorPoint(new cc.Point(0.5,1));
        this.playerLabel.setPosition(new cc.Point(120,100));
        this.addChild( this.playerLabel );
        
        this.FirstDigit = cc.Sprite.create(this.scoreDigit[0]);
        this.FirstDigit.setAnchorPoint(new cc.Point(1,0.5));
        this.FirstDigit.setPosition(new cc.Point(80,120));
        this.addChild(this.FirstDigit)
        
        this.SecondDigit = cc.Sprite.create(this.scoreDigit[0]);
        this.SecondDigit.setAnchorPoint(new cc.Point(1,0.5));
        this.SecondDigit.setPosition(new cc.Point(120,120));
        this.addChild(this.SecondDigit)
        
        this.ThirdDigit = cc.Sprite.create(this.scoreDigit[0]);
        this.ThirdDigit.setAnchorPoint(new cc.Point(1,0.5));
        this.ThirdDigit.setPosition(new cc.Point(160,120));
        this.addChild(this.ThirdDigit)
    },
    
    update : function(dt) {
        score = this.spark.getScore(this.playerNumber);
        digit1 = Math.floor((score/100)%10);
        digit2 = Math.floor((score/10)%10);
        digit3 = score%10
        
        this.FirstDigit.initWithFile(this.scoreDigit[digit1])
        this.SecondDigit.initWithFile(this.scoreDigit[digit2])
        this.ThirdDigit.initWithFile(this.scoreDigit[digit3])
    },
    
    setSpark : function(SparkBall) {
        this.spark = SparkBall;
    }
    
});