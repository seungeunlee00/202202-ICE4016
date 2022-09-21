const number = document.getElementById("num");
const printForm = document.getElementById("js-guess");
const display = document.getElementById("js-result");
const sliderResult = document.getElementById("sliderValue");

const showSliderValue = (e) => {
    sliderResult.innerHTML = e; // 실시간으로 slider값 출력
}; 

const handlePrint = (e) => {
    e.preventDefault(); // 창이 이동하는 것을 막아줌

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    } // 두 값 사이의 정수 난수 생성하기

    const random = getRandomInt(5, sliderResult.innerHTML);
    const diplaySpan = display.querySelector("span");

    if (number.value < random) {
        diplaySpan.innerHTML = `
        You choose: ${number.value}, the machine choose: ${random}.<br/>
        <strong>You lost!</strong>`;
    } else {
        diplaySpan.innerHTML = `
        You choose: ${number.value}, the machine choose: ${random}.<br/>
        <strong>You won!</strong>`;
    }

};
printForm.addEventListener("submit", handlePrint);
