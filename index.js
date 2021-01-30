
/////// 1.let 키워드 :변수 선언이 무의미한 문제  (var vs let)///////////////
{
 
        //var 는 더이상 쓰지 말자!
        //중복되도 오류가 안남 | 나중에 문제 발생할수도 있기 때문
    {
        var x = 30;
        console.log("1번 var : "+x); 

        console.log("=======구분선=======")

        var x = 30; // 중복 오류 없이 그대로 내보낸다. 
        console.log("1번 var : "+x); 

        console.log("====================")
    }
    
    
    {
        let x = 40;
        console.log("1번 let : "+x);

        console.log("=======구분선=======")

        let y = 20; // let으로 이렇게 할 경우 중복 문제를 잡아준다.
                  //index.js:21 Uncaught SyntaxError: Identifier 'x' has already been declared
        console.log("1번 let : "+y);


        console.log("====================")
    }
}
////////////////////////////////////////////////////////////////////////////////





//////////////// 2.let 키워드 : 이젠 지역변수가 생겼다.//////////////////////////////
{


        //ex1.
        {

           var  a = 30;

        }

        console.log("2번 var로 할 경우 : "+a);  //<= 안 나와야하는데 var로 해서 나옴 

       
        console.log("=======구분선=======")


        {

            let b = 30;

        }
        console.log("2번 let으로 할 경우 : "+b); //하지만 let으로 하면 지역화되서 안됨 오류발생!

        console.log("====================")


//////////////////////

                //ex2.
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
        console.log("2번 "+getValue(false));// => undefined가 나오는데 이 뜻은 선언됐다는 말이다 
        //원래는 에러가 나야함(let value로 할경우는 에러가난다.)
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
/////////////////////////////////////////////////////////////////////////////////////////


////////////////////////7. Object Destructuring #1- 객체 뽀개기////////////////

{

    let exam = {
        kor:20,
        eng:30,
        math:40
    };

    function print({kor, eng, math}){

       // let kor = exam.kor;
       // let eng = exam.eng;
       // let {kor, eng} = exam; // 위에 두개를 뽀개서 만듬

        //최종본은 아예 function 에 넣어버림.

       //첫번째 표현법 console.log(`7번 kor: ${exam.kor}, eng:${exam.eng}`);
        console.log(`7번 kor:${kor},eng:${eng},math:${math}`);
    }
    print(exam);

}

//////////////////////////////////////////////////////////////////////////////


///////////8. Object Destructuring #2 - 속성 확장과 기본값/////////////////////////

{

    let exam = {
        kor:20,
        eng:30,
        math:50
    
    };

    let{   kor, eng  ,math ,total = kor+eng+math  } = exam;
    //비슷한 느낌 select kor, eng,math, kor+eng+math as total from exam;
    console.log(`8번 뽀개기 적용전 kor: ${kor}, eng: ${eng},math:${math},total:${total}`);
    
    
    exam.kor = 100; // 위 let exam 은 지역 변수로 되어 이 값을 넣어주려면 재 설정해줘야한다.
    exam.math = 70; // 위 let exam 은 지역 변수로 되어 이 값을 넣어주려면 재 설정해줘야한다.
    

    // kor = exam.kor;
    // math = exam.math;
    // total = exam.kor+exam.eng+exam.math; 
    ({kor,math,total = kor+eng+math }=exam); // 위 3개를 뽀갬

    console.log(`8번 뽀개기 적용후 kor: ${kor}, eng: ${eng},math:${math},total:${total}`);

}

//////////////////////////////////////////////////////////////////////////////////////


/////////9. Object Destructuring #3 - 중첩과 적응////////////////////////////


{

    let exam = {
        kor:20,
        eng:30,
        math:40,
        student:{
            name:"newlec",
            phone:"010-2222-3333"
        }
    
    };


    let {kor, eng,student:{name, phone}} = exam; // student 안의 내용들을 {}로 지역화시켜서 뽑음
    //let {kor, eng,student:{name},student:{phone}} = exam; // 이렇게도 가능하나 위에 표현이 훨씬 쉽다.
    console.log(`9번`+kor);
    console.log(`9번`+eng);
    console.log(`9번`+name);
    console.log(`9번`+phone);

    //let {kor:k,eng}=exam; //이렇게 별칭 쓰는 것이 가능
   // console.log(`9번`+k)
}

////////////////////////////////////////////////////////////////////////////


/////////////////////////////10. Array Destructuring #1//////////////////////////////

{

    let kors = [10,20,30];
    let [kor1,kor2] =kors; // kor1에 kors 0번째인 10이 들어가고 kor2에 kors 1번째인 20이 들어간다.
    //let [,kor1,kor2] =kors; // kor1에 kors 1번째인 20이 들어가고 kor2에 kors 2번째인 30이 들어간다.



    console.log(`10번 kor1:${kor1}, 10번 kor2:${kor2}`);

    // 여기서 다른 배열을 이용하고 싶을때

    let temp =[40,70,30];

    [kor1,kor2,]=temp;

    console.log(`바뀐후 10번 kor1:${kor1}, 바뀐후 10번 kor2:${kor2}`);


    // SWAP

    let x = 2, y = 3 , t;

    console.log("10번 swap 전"+x+","+y);

    //기존 swap법
    /*  t= x;
     x = y ;
     y = t; */

    //배운 SWAP법
    [x,y] = [y,x];


     console.log("10번 swap 후"+x+","+y);


}


/////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////11. Array Destructuring #2///////////////////////////////


{

    //1.
    let kors = [10,20,30];
    let [kor1, kor2, kor3, kor4=40] = kors; //배열에 kor4처럼 값을 넣고 추가할수 있다. 
    console.log("11번"+kor4)

    //2.
    let exam = [10,20,30,[40,50]];
    let [kor, eng,math,[com,history]]= exam; // 위의 대괄호중첩처럼 묶어줘서 값을 뺄수 있다.
    console.log("11번"+com);


    //3. 

    let notice = {
        title:"공지사항",
        files:["img1.png","img2.png"]
    
    };
        let {files:[first]}= notice; //img1.png 뽑음 |first라고 별칭을 준것임
        console.log(first);

    //4. 
    let notices = {
        title:"공지사항",
        list:[
        {title:"오~", content: "내용무"},
        {title:"하~", content:"ㅋㅋ"}
        ]
    };
    let{list:[one]}=notices; //one이라고 별칭을 준것임
    console.log("11번"+one.title); //list의 첫번째 title을 뽑음 | one이라고 별칭을 준것임
    let{list:[,two]}=notices; //two라고 별칭을 준것임
    console.log( two); //list의 두번째 전체를 뽑음 //two라고 별칭을 준것임
    console.log("---------------");

}



////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////12. Set 콜렉션 //////////////////////////////////////////////


{

    //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set 참고

    {
    //ex1. 
    let set = new Set();

    /*
    set.add(5); // 숫자
    set.add("5"); //문자 중복되면 안됨!
    set.add(2);
    set.add(5); // 위에서 숫자 5를 넣었기에 이건 안들어감.
    */

    // 위와 같은 더 쉬운 표현법
    set.add(5).add("5").add(2).add(5);

    console.log("12번 : "+set.size); // 맨 마지막 5가 안들어간것을 확인해볼수있다 그러므로 set.size = 3
    }

    {
    //ex2.
    let set = new Set([2,4,3,5,6,4,3]);
    console.log("12번 : "+set.size); // 중복값을 빼고 출력하면 5가 나옴.
    }

    {
    //ex3.
    let ar = [1,2,3,2,3,4,3,4,5];
    let set = new Set(ar);
    console.log("12번 : "+set.size);// 중복값을 빼고 출력하면 5가 나옴.

    }


    {
    //ex4.값 나열하기
    let set = new Set([2,10,7,45,23]);

    //1번 방법
    set.forEach(function(value,key,ownerSet){
        console.log("12번 : "+key+":"+value);
    });

    console.log("===========================");

    //2번 방법 - for-of를 이용한 값 나열 (새로등장 코드량이 더 적고 좋다~)
    for(let v of set){ // v로 별칭(명명)한것.
        console.log("12번 : "+v);
    }
    //2번 방법의 응용 - 1번 처럼 키와 값 나오게 하기
    for(let [key, value] of set.entries()){ // v로 별칭(명명)한것.
        console.log("12번 : "+key+":"+value);
    }

    
    }

    {
    //ex5. 값 확인하기
    let set = new Set();
    set.add(5);
    set.add("5");
    console.log("12번 값 확인 : "+set.has(5)); //true
    console.log("12번 값 확인 : "+set.has(6)); //false

    }

    {
    //ex6. 값 삭제하기
    let set = new Set();
    set.add(5);
    set.add("5");
    console.log("12번 삭제 전 : "+set.size);    //2

    set.delete(5);
    console.log("12번 5 삭제 후 : "+set.size); //1

    set.add(6);
    console.log("12번 6 삽입 후 : "+set.size); //2

    set.clear(); // 모두 삭제 
    console.log("12번 clear 후 : "+set.size); //0



    }


}


/////////////////////////////////////////////////////////////////////////////////////////