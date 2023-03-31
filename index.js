// Add your Circle class here
class Circle{
 constructor(radius){
    this.radius=radius;
 }
  get diameter(){
   return this.radius*2;
 }
 get circumference(){
   return this.radius*2*Math.PI;
 }
 get area(){
    return this.radius**2*Math.PI;
  }
  
  set diameter(diameters){
    return this.radius=diameters/2;
  }
  set circumference(circumferences){
    return this.radius=circumferences/(2*Math.PI)
  }
  set area(areas){
     return this.radius=Math.sqrt(areas/Math.PI);
   }
 }
  



