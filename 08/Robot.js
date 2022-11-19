Robot = function(x, y, z) {
    

    var fromHelper = HELPER.cylinderSkeletonMesh(3, 5, 'blue');
    var geometry = fromHelper[0];
    var material = fromHelper[1];
    var bones = fromHelper[2];
    var mesh = new THREE.SkinnedMesh(geometry, material);
    var skeleton = new THREE.Skeleton(bones);
    mesh.add(bones[0]);
    mesh.bind(skeleton);

    this.root= bones[0];
    this.root.position.set( x, y, z );

    this.head = bones[1];
    this.neck = bones[2];
    this.neck.position.y = -10;
    this.torso = bones[3];
    this.torso.position.y = -30;

    this.body_mesh = mesh;
  
    
  //Left  Arm
  // left upper arm, left lower arm and left hand
    var fromHelper = HELPER.cylinderSkeletonMesh(3, 5, 'blue');
    var geometry = fromHelper[0];
    var material = fromHelper[1];
    var bones = fromHelper[2];
    var mesh = new THREE.SkinnedMesh(geometry, material);
    var skeleton = new THREE.Skeleton(bones);
    mesh.add(bones[0]);
    mesh.bind(skeleton);
    
    // Left upper arm
    this.neck.add(bones[0]);

    this.left_upperarm = bones[1];
    this.left_upperarm.position.y = -5;
    this.left_upperarm.position.x = 5;
    
    //Left lower arm
    this.left_lowerarm = bones[2];
    this.left_lowerarm.position.y = -15;
    this.left_lowerarm.position.x = 5;

    //left hand
    this.left_hand = bones[3];
    this.left_hand.position.x = 5;
    this.left_hand.position.y = -5;
     this.leftarm_mesh = mesh;
  
    
  // right arm
// right upper arm, right lower arm and right hand
  var fromHelper = HELPER.cylinderSkeletonMesh(3, 5, 'blue');
  var geometry = fromHelper[0];
  var material = fromHelper[1];
  var bones = fromHelper[2];
  var mesh = new THREE.SkinnedMesh(geometry, material);
  var skeleton = new THREE.Skeleton(bones);
  mesh.add(bones[0]);
  mesh.bind(skeleton);

  this.neck.add(bones[0]);  
// right upper arm

    this.right_upperarm = bones[1];
    this.right_upperarm.position.y = -5;
    this.right_upperarm.position.x = -5;

   // right lower arm
    this.right_lowerarm = bones[2];
    this.right_lowerarm.position.y = -15;
    this.right_lowerarm.position.x = -5;

    // right hand
    this.right_hand = bones[3];
    this.right_hand.position.y = -5;
    this.right_hand.position.x = -5;
    this.right_arm_mesh = mesh;



// left leg
// left upper leg, left lower leg and right foot

var fromHelper = HELPER.cylinderSkeletonMesh(3, 5, 'blue');
var geometry = fromHelper[0];
var material = fromHelper[1];
var bones = fromHelper[2];
var mesh = new THREE.SkinnedMesh(geometry, material);
var skeleton = new THREE.Skeleton(bones);
mesh.add(bones[0]);
mesh.bind(skeleton);

this.torso.add(bones[0]);


// left upper leg

  this.left_upperleg = bones[1];
  this.left_upperleg.position.x = 5;
  this.left_upperleg.position.y = -5;
 

 // left lower leg
  this.left_lowerleg = bones[2];
  this.left_lowerleg.position.y = -15;
  this.left_lowerleg.position.x = 5;

  // left leg
  this.left_foot = bones[3];
  this.left_foot.position.y = -5;
  this.left_foot.position.x = 5;

  // this.left_foot.position.x = 5;
    // this.left_foot.position.y = -5;

  
  //mesh
  this.leftleg_mesh = mesh;


// right leg
// right upper leg, right lower leg and right foot

var fromHelper = HELPER.cylinderSkeletonMesh(3, 5, 'blue');
var geometry = fromHelper[0];
var material = fromHelper[1];
var bones = fromHelper[2];
var mesh = new THREE.SkinnedMesh(geometry, material);
var skeleton = new THREE.Skeleton(bones);
mesh.add(bones[0]);
mesh.bind(skeleton);

this.torso.add(bones[0]);

// right upper leg

  this.right_upperleg = bones[1];
  this.right_upperleg.position.x = -5;
  this.right_upperleg.position.y = -5;
 

 // right lower leg
  this.right_lowerleg = bones[2];
  this.right_lowerleg.position.y = -15;
  this.right_lowerleg.position.x = -5;

  // right leg
  this.right_foot = bones[3];
  this.right_foot.position.y = -5;
  this.right_foot.position.x = -5;

  //mesh
  this.rightleg_mesh = mesh;
  this.movement = null;

  };
  
  
  Robot.prototype.show = function(scene) {
    scene.add(this.body_mesh);
    scene.add(this.leftarm_mesh);
    scene.add(this.right_arm_mesh);
    scene.add(this.leftleg_mesh);
    scene.add(this.rightleg_mesh);
  
  };
  
  Robot.prototype.raise_left_arm = function() {
  
    this.movement = 'raise left arm';
  
  };
  
  Robot.prototype.lower_left_arm = function() {
  
    this.movement = 'lower left arm';
  
  };
  
  Robot.prototype.kick = function() {
  
    this.movement = 'kick';
  
  };
  
  Robot.prototype.dance = function() {
    
    this.movement = 'dance';
  
  };
  Robot.prototype.walk = function(){

    this.movement = 'walk';
  }
  Robot.prototype.onStep= function(){
    allRobots = [];
    for(var a in allRobots){
      a=allRobots[a];
      if(a.root.position.distanceTo(this.root.position) < 10){
        this.root.rotateY(Math.PI/2);
      }
    } 
if(this.root.position.z > 490 || this.root.position.z < -490){
  this.root.rotateY(Math.PI/2);
}else if(this.root.position.x > 490 || this.root.position.x < -490){
  this.root.rotateY(Math.PI/2);
}
if(this.root.position.x > 10 && this.root.position.x < 20 && this.root.position.z > 50 && this.root.position.z < -50){
  this.root.rotateY(Math.PI/2);
}
this.root.translateZ(40);
  };

  Robot.prototype.onAnimate = function() {
  
    if (this.movement == 'raise left arm') {
        var T = Math.PI;
      this.left_upperarm.quaternion.slerp( new THREE.Quaternion(Math.sin(-T/2),  // w
                                                                0,               // x
                                                                0,               // y
                                                                Math.cos(-T/2)), // z
                                          0.1 );
  
    } else  if (this.movement == 'lower left arm') {
  
      this.left_upperarm.quaternion.slerp( new THREE.Quaternion(0, 0, 0, 1),
                                          0.1 );
  
    } 
    
    else if (this.movement == 'walk') {
    
      // check if slerp reached almost the end
      if (this.right_upperleg.quaternion.w < 0.93) {
       
        this.movement = 'walk2';  // signal that the kick is done and the leg should move back
      }
      this.left_upperleg.quaternion.slerp(new THREE.Quaternion(0,0,0, 1), 0.1);

      var T = -Math.PI/4;
      this.right_upperleg.quaternion.slerp(new THREE.Quaternion(Math.sin(T/2),
                                                      0, 
                                                      0, 
                                                      Math.cos(T/2)),
                                                       0.1);
      this.onStep();
    }
         else if(this.movement == 'walk2') {
          if(this.left_upperleg.quaternion.w < .93){
            this.movement = 'walk';
          }

          this.right_upperleg.quaternion.slerp(new THREE.Quaternion(0,0,0,1), 0.1);
          
          var T = -Math.PI/4;
          this.left_upperleg.quaternion.slerp(new THREE.Quaternion(Math.sin(T/2), 
                                                                            0,
                                                                            0,
                                                                           Math.cos(T/2)),
                                                                             0.1);                              
             this.onStep();
         }
    
    
     else if (this.movement == 'kick') {
    
      if(this.right_upperleg.quaternion.w < 0.72){
        this.movement ='kick done';
      }else {
        var T = -Math.PI/2;
      this.right_upperleg.quaternion.slerp( new THREE.Quaternion( Math.sin( T / 2 ),   // x
                                                                  0,                   // y
                                                                  0,                   // z
                                                                  Math.cos( T / 2 ) ), // w
                                                                    0.1 );
    }
    
  } else if(this.movement == 'kick done'){
    this.right_upperleg.quaternion.slerp( new THREE.Quaternion(0,0,0,1), 0.1 );
  }
  
  
  
  
  else if (this.movement == 'dance') {
  
      if (typeof this.dancer === 'undefined') {
  
        this.dancer = setInterval(function() {
  
          // 
          // some random translation
          //
          var shakehead = 3*Math.random();
          if (Math.random() < .5) {
            shakehead *= -1;
          }
  
          var shakeneck = 3*Math.random();
          if (Math.random() < .5) {
            shakeneck *= -1;
          }
  
          var shaketorso = 3*Math.random();
          if (Math.random() < .5) {
            shaketorso *= -1;
          }
  
          this.head.position.x += shakehead;
  
          this.neck.position.x += shakeneck;
  
          this.torso.position.x += shaketorso;
  
  
          //
          // use actions
          //
          if (Math.random() < .3) {
            this.raise_left_arm();
          }
  
          if (Math.random() < .3) {
            this.lower_left_arm();
          }
  
          if (Math.random() < .3) {
            this.kick();
          }
  
          if (Math.random() < .3) {
            this.movement = 'kick done';
          }
  
        }.bind(this), 500);
  
      }
  
    }
  
  };