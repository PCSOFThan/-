function showDIV(divName){
    classChanger(divName,'remove','invisible');
    classChanger(divName,'add','visible');
}
function hiddenDIV(divName){
    classChanger(divName,'remove','visible');
    classChanger(divName,'add','invisible');
}
function DIV_animate(divName,effect){
    switch(effect){
        case("1"):
            break;
        case("2"):
            break;
        case("3"):
            break;
        case("4"):
            break;
    }
    classChanger(divName,'add','ani_1');
}


function DIV_animater_y(divName,duration,num){
    var a = $('#' + divName);
    gsap.to(a, {
        duration: 0.01,
        delay: 0,
        y: num,
        ease: "",
    });
    gsap.to(a, {
        duration: duration,
        delay: 0.5,
        y: num,
        ease: "",
    });
}
function classChanger(target,method,className){
    var target1 = $('#' + target);
    if(debug_classChanger)
    console.log(target1+';'+method+';'+className);
    switch (method){
        case 'add':
            target1.addClass(className);
            break;
        case 'remove':
            target1.removeClass(className);
            break;
    }
}

