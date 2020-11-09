What is JavaScript?

<<<<<<< HEAD
Frontend의 유일한 언어

js 참고 사이트:
        impactjs
        threejs

ES5, ES6? (ECMAScript) :
    JS >> 언어
    ES >> Specification(version)

바닐라 JS : 라이브러리나 프레임워크가 없는 상태의 JS (구리지만 중요함)


>>>>>>>>>>>>>>>> 실습 >>>>>>>>>>>>>>>>>>
1. js 는 html body 가장 아래에 추가 <script src = ".js"></script>
2. css 파일은  head 에 <link rel="stylesheet" href = "index.css">

3. 변수
    let >> js 에서 변수를 생성하고(Create) 초기화 함(initilaize)
    ex) let a =5;
        let b =4;
        console.log(a+b);
        >> 9

    const >> js에서 해당변수를 상수로 생성함 (추후에 변경불가 )
    ex) const a = 5;
        a = 4;
        >> error
    
    var >> variable let,const 이전에 있던 변수선언 체계
    ex) var a = 5;
        var b = a- 4;
        a = 3;
        console.log(b, a)
        >> 1,3 (let과 동일한 결과)

    대세 : 왠만하면 const, 진짜 필요할 때만 let

4.Object
    1)
    const me = {
        name : "seung",
        age : 33,
        gender : "Male",
        location : "Gwangju"
    }

    me.name = "jeong" 가능
    me = {name : "jeong"} 불가능

    2)
    console.log
    (console = Object >> built-in)
    (log = function)

5.백틱 스트링 ( ` )
    주의) " ' 아님
    
function sayHello(name, age){
    console.log(`Hello ${name} you are ${age} years old`);
}
sayHello("Seunghwan", 25)


6. function in Object
    const calculator = {
        plus : function(a,b){
            return a+b
        }
    }

    const plus = calculator.plus(5,5)
    console.log(plus)
    >> 10

7.DOM (document Object Model)
    HTML의 객체 모델화 >  document에 접근 가능 한 API
    document.getElementBy~("")
    자바스크립트에서 객체 불러올때
    document = HTML 문서전체 오브젝트
    getElementBy = document 오브젝트에서 객체를 검색하는 함수

    ex) title = document.getElementBy~("~")
        title >> DOM으로 컨트롤가능
        document >> DOM으로 컨트롤가능


8.console.dir(Object)
    Object 내의 모든 하위 요소 확인

9.document.querySelector("#id")
    html 생성자로 객체 찾기

10. html 기본 문서 구성
    <!DOCTYPE html>
    <html>

        <head>
            <title>Something</title>  ## 타이틀
            <link rel="stylesheet" href = "index.css">  ## css
        </head> 
    
        <body>
            <h1 id = "title">this works!</h1>
            <script src = "index.js"></script>  ##js
        </body>
    
    </html>

11. window.addEventListener("resize", handleResize);
    자바스크립트가 만들어진 이유 : 이벤트에 반응하기 위해서
    window >> 브라우저창
    addEventListener >> 이벤트 대기중
    "resize" >> 이벤트 (윈도우 크기가 조절되는 이벤트[내장])
    handleResize >> 결과 resize 가 발생할 때마다 이 함수 실행
    ©주의 : handleResize()가 아닌 handleResize임. 호출만하고 실행은 아직 안한상태
    
    (function handleResize() {
        console.log("I have been resized")
    })

12. 트릭 
function handleResize(event){
    console.log(event)
}
window.addEventListener("resize", handleResize);
>>> 실행할때마다 resize결과 값 호출, Args에러 안뜸

13. ===
    같음(=) 조건 표현

14. JavaScript dom event mdn
    dom 이벤트에 관한 정보는 항상 여기로

15. DOM.className 객체
    이렇게 css에 미리 지정해둔 클래스네임으로
    변경함으로써 js에서 직접 스타일을 컨트롤하지 않고
    기능 구분

16. css 전환 효과
    css{
        transition : color 0.5s ease-in-out;
    }
    transition >> 전환 효과
    color >> 전환 대상
    0.5s >> 전환 시간
    ease-in-out >> 전환 옵션

17. DOM.classList
    .add .remove .contain등 사용하여 여러개의 classname 사용가능
    css js 기능 둘다 유지하는 등의 기능에 사용

18. DOM.classList.toggle("something")
    클래스 리스트에 something을 추가했다가 삭제했다가 반복하는 함수(간단)