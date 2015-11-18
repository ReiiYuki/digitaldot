var scoreP1 = [];
var scoreP2 = [];
var digit = [];
for (var i = 0;i<10;i++) {
    scoreP1.push('res/images/1'+i+'.png')
    scoreP2.push('res/images/2'+i+'.png')
    digit.push('res/images/'+i+'.png')
}
var animatedReady1 = ['res/images/Ready1.png','res/images/Ready1-1.png','res/images/blank.png']
var animatedReady2 = ['res/images/Ready2.png','res/images/Ready2-1.png','res/images/blank.png']
    
var res = {
    backGround: 'res/images/bg.jpg',
    player1: 'res/images/dot1.png',
    player2: 'res/images/dot2.png',
    SparkBall: 'res/images/spark.png',
    Boundary1: 'res/images/Boundary1.png',
    Boundary2: 'res/images/Boundary2.png',
    Player1Label: 'res/images/PLAYER1LABEL.PNG',
    Player2Label: 'res/images/PLAYER2LABEL.PNG',
    BgSound: "res/sounds/techno.mp3",
    EffectSound: "res/sounds/soundmp3.mp3",
    BgMain: "res/images/menubg.jpg",
    MenuLabel: "res/images/menuLab.png",
    StartButt1: "res/images/StartLab1.PNG",
    StartButt2: "res/images/StartLab2.PNG",
    CreditButt1: "res/images/CreditLab1.PNG",
    CreditButt2: "res/images/CreditLab2.PNG",
    P1WIN: "res/images/P1WIN.png",
    P2WIN: "res/images/P2WIN.png",
    Draw: "res/images/draw.png"
};
                 
var g_resources = [];
for ( var i in res ) {
    g_resources.push( res[ i ] );
}
for (var i in scoreP1) {
    g_resources.push( scoreP1[ i ] );
    g_resources.push(scoreP2[i]);
    g_resources.push(digit[i]);
}
for (var i in animatedReady1) {
    g_resources.push(animatedReady1[i]);
    g_resources.push(animatedReady2[i]);
}