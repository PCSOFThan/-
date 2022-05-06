function showPage(page) {
    //1 根据页面1配置
    //2 根据页面文件 配置
    //3 根据LocalStorage 配置
    var a = 1;
    while(a<=page_num){
        var b = 'page' + a;
        if(page==a){
            showDIV(b);
            console.log('SHOWDIV:'+a+','+b);

        }
        else{
            hiddenDIV(b);
            console.log(a+','+b);
        }
        a++;
    }
}
function showPage_ani(page_name, effect) {
    var a = $('#' + page_name);
    gsap.to(a, {
        duration: 0.5,
        delay: 0.5,
        y: '-100%',
        ease: "",
    });
}
// function showPage(page_name){
//     var a = $('#' + page_name);
//     gsap.to(a, {
//         duration: 0.5,
//         delay: 0.5,
//         y: '-100%',
//         ease: "",
//     });
// }

