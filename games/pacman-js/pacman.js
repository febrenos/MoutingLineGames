class Pacman {
    constructor(x,y,width,height,speed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = DIRECTION_RIGHT
        this.currentFrame = 1
        this.frameCount = 7

        setInterval(() => {
            this.changeAnimation()
        }, 10);
    }

    moveProcess(){
        this.changeDirectionIfPossible();
        this.moveForwards();
        if(this.checkCollision()){
            this.moveBackwards();
        }
    }
    eat(){

    }
    moveBackwards(){
        switch(this.direction){
            case DIRECTION_RIGHT:
                this.x -= this.speed
                break
            case DIRECTION_UP:
                this.y += this.speed
                break
            case DIRECTION_LEFT:
                this.x += this.speed
                break
            case DIRECTION_BOTTOM:
                this.y -= this.speed
                break
        }
    }
    moveForwards(){
        switch(this.direction){
            case DIRECTION_RIGHT:
                this.x += this.speed
                break
            case DIRECTION_UP:
                this.y += this.speed
                break
            case DIRECTION_LEFT:
                this.x += this.speed
                break
            case DIRECTION_BOTTOM:
                this.y += this.speed
                break
        }
    }
    checkCollision(){
        if( map[this.getMapY()][this.getMapX()] == 1
            || map[this.getMapXRightSide()][this.getMapX()] == 1
            || map[this.getMapY()][this.getMapXRightSide()] == 1
            || map[this.getMapYRightSide()][this.getMapXRightSide()] == 1)
        {
            return true;
        }
        return false;
    }
    checkGhostcollision(){

    }
    changeDirectionIfPossible(){

    }
    changeAnimation(){
        this.currentFrame = this.currentFrame == this.frameCount? 1: this.currentFrame + 1;
    }
    draw(){

    }
    getMapX(){
        return parseInt(this.x/oneBlockSize)
    }
    getMapY(){
        return parseInt(this.y/oneBlockSize)
    }
    getMapXRightSide(){
        return parseInt((this.x + 0.9999 * oneBlockSize)/oneBlockSize)
        }
    getMapXRightSide(){
        return parseInt((this.y + 0.9999 * oneBlockSize)/oneBlockSize)
    }
        
}