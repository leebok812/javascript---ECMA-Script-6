
/////// 1.let 키워드 :변수 선언이 무의미한 문제  (var vs let)///////////////
{
/* 
var 는 더이상 쓰지 말자!
 중복되도 오류가 안남 나중에 문제 발생할수도 있기 때문

var x = 30;
console.log(x); 


*/
{
let x = 30;
console.log("1번"+x);

let y = 20;
console.log("1번"+y);

}
}
////////////////////////////////////////////////////////////////////////////////



//////////////// 2.let 키워드 : 이젠 지역변수가 생겼다.//////////////////////////////
{
////ex1)//////
{

 var  a = 30;

}

console.log("2번"+a);  //<= 안 나와야하는데 var로 해서 나옴 


{

    let b = 30;

}
//console.log(b); //하지만 let으로 하면 지역화되서 안됨



//////////////////

////ex2)
function getValue(condition){

    if(condition){
        {
            {
        var value ="ok";
            }
        } 
        return value;

    }else{
        return value;
    }
}
console.log("2번"+getValue(false));// => undefined가 나오는데 이 뜻은 선언됐다는 말이다 원래는 에러가 나야함(let value로 할경우는 에러가난다.)
// var로 표현되서 어느 곳에 깊게 숨겨놔도 전역처럼 범위를 끼치는것.
}
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////3. const 변수 /////////////////////////////////////
{
    const N = 1;
    const S = 5;

    var walkTo = S;
   // S= 3; // 오류가 남 상수에 값을 대입하려 했기에


     const add = function(a,b){
         return a+b;
     }

    // add=3;// Assignment to constant variable.  위와 같은 예 상수는 불변값이므로 값을 넣을수 없다.

     console.log("3번"+add(3,4)); 

}

//////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////4.Template String///////////////////////////////

{
  /* 예전 방식
    let tmaplate  = "<section> \  <- 한칸 띠고 역슬래시를 붙여줬음
                    <h1></h1> \
                         <p></p> \
                        </section>"; */

        //새로운 표현방법 backtick-어금부호
        let title = "ES6";
        let content ="새로운 문자열";
        let template  = String.raw`<section>  //String.raw 날것그대로 다 출력해달라
                         <h1>${title}\n\n\n</h1> 
                         <p>${content}</p> 
                        </section>`;
            console.log("4번"+template);


}

/////////////////////////////////////////////////////////////////////////////////


//////////////////// 5. 향상된 JSON 객체 표현식 #1///////////////////////////

{

    let kor = 30;
    let eng = 40;
    let math = 50;


let exam = {kor,eng,math, total(){
    return 10;
}};
console.log("5번"+exam.kor);
console.log("5번"+exam.total());





}
//////////////////////////////////////////////////////////////////////////////////


///////////////////// 6. 향상된 JSON 객체 표현식 #2 : 변수형 속성//////////////////

{
     let attr = "kor";
    let  exam ={
        //attr:10 undifined;
        [attr]:10

    };

        console.log("6번"+exam.kor);






}