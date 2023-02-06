const calc_typing_speed = (text) => {
    arr = text.split(" ");
    let count = 0;
    for (let i=0;i<arr.length;i++){
        if (arr[i]!=""){
            count += 1;
        }
    }
    let word_count = document.getElementById('word_count');
    word_count.innerHTML = `<strong>${count}</strong>`;
}



const accuracy = (text) => {
    user_arr = text.split(" ");
    let k = user_arr.filter((element)=>{
        return element != '';
    })

    let para = document.getElementById('para');
    let main_para = para.textContent;
    let main_arr = main_para.split(" ");
    let m = main_arr.filter((element)=>{
        return element != '' && element != '\n';
    })

    let wrong = 0;
    for (let i=0;i<k.length;i++){
        if(arr[i]!=m[i]){
            wrong += 1;
        }
    }

    let right = 100-((wrong*100)/k.length);
    let accuracy = document.getElementById('accuracy');
    accuracy.innerHTML = right;


}


let timer = document.getElementById('timer');
let time = 0;
const time_clock = () => {
    let k = setInterval(()=>{
        timer.innerHTML = `${60-time}`;
        time += 1;
    },1000)

    setTimeout(()=>{
        clearInterval(k);
        timer.innerHTML = `${0}`;
        time = 0;
    },60000)
};


let start_button = document.getElementById('start_button');
let toggle = 0;
start_button.onclick = ()=>{
    if (toggle == 1){
        return ;
    }
    toggle = 1;
    start_button.style.boxShadow="-1px -1px 2px black";
    time_clock();
    setTimeout(()=>{
        let box = document.getElementById('typing_box');
        let text = box.value;
        console.log(text);
        calc_typing_speed(text);
        accuracy(text);
        box.value = '';
        start_button.style.boxShadow="2px 2px 5px black";
        toggle = 0;
    },60000);
    
    
}


