// if is production  (livereload!)
if(ENV!="production"){
  document.write(
      '<script src="http://' + (location.host || 'localhost').split(':')[0] +
      ':35729/livereload.js?snipver=1"></' + 'script>'
  );
}
var x=12;
var y=2221;
var z:number=2;
interface oiface{
  name:string,
  age:number
}
class Student{
  name:string;
  age:number;
  constructor(){

  }
}
var s=new Student();
var obj={x,y,z};
var obj2={name:"yu",age:20}
console.log(obj,obj2,s)
