// https://www.codewars.com/kata/592993301fad491f26000072

function draw(twoRectangles) {
    var canvas = new Canvas(100,100)  //Create a 100 x 100 canvas
    var ctx = canvas.getContext('2d'); 
    ctx.fillStyle="#ffffff"
    ctx.fillRect(0,0,100,100)  //Draw background
    //Don't delete or modify the code above
    
    //Your code:
    //Sort rectangles
    let rectangle1 = [...twoRectangles[0][0], ...twoRectangles[0][1]]
    let rectangle2 = [...twoRectangles[1][0], ...twoRectangles[1][1]]
    if (rectangle2[1] > rectangle2[3]) {
        rectangle2 = [rectangle2[0], rectangle2[3], rectangle2[2], rectangle2[1]]
    }
    if (rectangle2[0] > rectangle2[2]) {
        rectangle2 = [rectangle2[2], rectangle2[1], rectangle2[0], rectangle2[3]]
    }
    if (rectangle1[1] > rectangle1[3]) {
        rectangle1 = [rectangle1[0], rectangle1[3], rectangle1[2], rectangle1[1]]
    }
    if (rectangle1[0] > rectangle1[2]) {
        rectangle1 = [rectangle1[2], rectangle1[1], rectangle1[0], rectangle1[3]]
    }
    
    // rectangle 1 must always be the one on the upper left
    if (rectangle2[0] < rectangle1[0]) {
      let temp = [...rectangle1]
      rectangle1 = [...rectangle2]
      rectangle2 = [...temp]
    }
    console.log(rectangle1, rectangle2)
    let overlapRectangle = () => {
        // do they intersect?
        let overlap = [];
        // is the x end of 1 bigger than the beginning of 2?
        if (rectangle2[0] >= rectangle1[0]) overlap.push(rectangle2[0])
        else overlap.push(rectangle1[0])
        // is the y end of 1 bigger than the beginning of 2?
        if (rectangle2[1] >= rectangle1[1]) overlap.push(rectangle2[1])
        else overlap.push(rectangle1[1])
        // is the x end of 2 bigger than the end of 1?
        if (rectangle2[2] <= rectangle1[2]) overlap.push(rectangle2[2])
        else overlap.push(rectangle1[2])
        // is the y end of 2 bigger than the end of 1?
        if (rectangle2[3] <= rectangle1[3]) overlap.push(rectangle2[3])
        else overlap.push(rectangle1[3])
        
        if (overlap[0] >= rectangle2[0] &&
            overlap[0] <= rectangle2[2] &&
            overlap[3] >= rectangle1[1] &&
            overlap[3] <= rectangle1[3]) {
          overlap = [overlap[0], overlap[1], overlap[2]-overlap[0]+1, overlap[3]-overlap[1]+1]
          if (!(overlap[2] < 1) && !(overlap[3] < 1)) {
            return overlap
          }
        }
      }
    
    // format the rectangles for the fillRect formula
    const rectangle1Formatted = [rectangle1[0], rectangle1[1], rectangle1[2]-rectangle1[0]+1, rectangle1[3]-rectangle1[1]+1]
    const rectangle2Formatted = [rectangle2[0], rectangle2[1], rectangle2[2]-rectangle2[0]+1, rectangle2[3]-rectangle2[1]+1]
    // draw the rectangles
    let drawRect1 = canvas.getContext('2d')
    drawRect1.fillStyle = "blue"
    drawRect1.fillRect(...rectangle1Formatted)
    let drawRect2 = canvas.getContext('2d')
    drawRect2.fillStyle = "blue"
    drawRect1.fillRect(...rectangle2Formatted)
    
    // overlap
    let drawOverlap = canvas.getContext('2d')
    drawOverlap.fillStyle = "black"    
    if (overlapRectangle()) {
        drawOverlap.fillRect(...overlapRectangle())
    }
    //Don't delete or modify the following code
    return canvas.toDataURL() //Returns the image data
}      

// May 2020