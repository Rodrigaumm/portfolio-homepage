const nodeBars = document.querySelectorAll('.moving-bar');
const nodeLis = document.querySelectorAll('.header-nav li')

const lis = [...nodeLis];
const bars = [...nodeBars];
lis.forEach(li=>{
    li.onmouseenter = (event)=>{
        const bar = event.currentTarget.lastElementChild;
        bar.classList.remove('invisible-bar');
        bar.classList.add('total-bar');
    };
    li.onmouseleave = (event)=>{
        const bar = event.currentTarget.lastElementChild;
        bar.classList.remove('total-bar');
        bar.classList.add('invisible-bar');
    };
});
