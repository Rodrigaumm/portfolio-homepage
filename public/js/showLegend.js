const legend = document.querySelector('.skill-lvl-legend')
const showBtn = document.getElementById('readMore');

showBtn.onclick = event=>{
    event.preventDefault();
    legend.classList.toggle('visible');
}