// const circle =  {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');        
//     }
// };

// circle.draw();


/**
 * FACTORIES
 */
function createCircle(radius) {
    return {
            radius,
            draw: function() {
                console.log('draw');        
            }
        };
}
const circle = createCircle(1);
circle.draw();

/**
 * CONSTRUCTOR FUNCTION
 */

function Circle(radius){
    console.log('this', this);
    
    this.radius = radius;
    this.draw = function() {
        console.log('draw');        
    }
}

const another = new Circle(1);
another.draw();

/**
 * PRIMITIVE TYPE
 */

let x = 10;
let y = x;

x = 20;
console.log(x);
console.log(y);

/**
 * REFERENCE TYPE
 */

let a = { value: 10};
let b = a;

a.value = 20;

console.log(a);
console.log(b);

