window.onload=function () {
///////////////首页选项卡////////////////
    let xuanze=document.querySelector(".head_min .right");
    let xuanze1=document.querySelector(".head_min .right_return");
    let xiala=document.querySelector(".head_min .head_xiala");
    let list = document.querySelectorAll(".head_min .head_xiala li");
    // console.log(xuanze,xiala);
    xuanze.onclick=function () {
        xiala.style.height="200px";
        xuanze1.style.display = "block";
        xuanze.style.display = "none";
    }
    xuanze1.onclick=function () {
        xiala.style.height="0";
        xuanze1.style.display = "none";
        xuanze.style.display = "block";
    }
    list.forEach((v,i)=>{
        v.onmouseenter = function(){
            list[i].classList.add("hot");
        }
        v.onmouseleave = function(){
            list[i].classList.remove("hot");
        }
    })

/////////////////////////////////   跳楼  ///////////////////////////////////
    //  楼层高度  滚动条高度
    let word = document.querySelector(".section_three ul .word")
    let word1 = document.querySelector(".section_four ul .word")
    // console.log(word)
    let sec_t = document.querySelector(".section_three");
    let fh = sec_t.offsetTop;
    let sec_t1 = document.querySelector(".section_four");
    let fh1 = sec_t.offsetTop;
    window.onscroll = function (){
        let sh =document.body.scrollTop ||document.documentElement.scrollTop;
        console.log(fh,sh)
        if (fh <= sh+500){
            word.style.marginLeft = 40 + "px";
            // animate(word,{marginLeft:40})
            if(fh1 <= sh){
                word1.style.marginLeft = 0;
                word1.style.marginRight = 0;
            }
        }
    }










}