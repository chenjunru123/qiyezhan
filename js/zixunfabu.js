window.onload=function () {
    //1.获取元素
    let lis=document.querySelectorAll("main .head ul li h1");
    let son=document.querySelectorAll("main .body");
    // console.log(lis);
    // console.log(son);
    //2.遍历每一个li
    for(let i=0;i<lis.length;i++){
        //3.当鼠标移入每一个li时的操作
        lis[i].onclick=function(){
            // alert(1);
            //4.其余子元素消失
            for(let j=0;j<son.length;j++){
                lis[j].classList.remove("active");
                son[j].style.opacity="0";
            }
            //5.当前子元素出现
            son[i].style.opacity="1";
            lis[i].classList.add("active");
        }
        // lis[i].onmouseleave=function(){
        //     for(var j=0;j<son.length;j++){
        //         son[j].style.display="none";
        //     }
        // }
    }


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






































}