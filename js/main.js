let number = [{prev:"04",current:"01",next:"02"},
              {prev:"01",current:"02",next:"03"},
              {prev:"02",current:"03",next:"04"},
              {prev:"03",current:"04",next:"01"}],
    currentNumber = "01";
window.addEventListener("load",initListener,false);
function initListener()
{
  document.querySelector(".fa-chevron-left").addEventListener("click",prevTabs,false);
  document.querySelector(".fa-chevron-right").addEventListener("click",nextTabs,false);
  document.getElementById("defaultOpen").click();
}
function openTabs(evt, name) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs__content-info");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    currentNumber = evt.currentTarget.dataset.number;
    document.querySelector(".tabs__content-count pre span").innerHTML = currentNumber;
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}
function prevTabs(){
  let i, j,  tablinks;
  tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        if(tablinks[i].dataset.number == currentNumber){
          currentNumber = number[i].prev;
          for (j = 0; j < tablinks.length; j++) {
            if(tablinks[j].dataset.number == currentNumber){
              tablinks[j].click();
              break;
            }
          }
          break;
        }
    }

}
function nextTabs(){
  let i, j,  tablinks;
  tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        if(tablinks[i].dataset.number == currentNumber){
          currentNumber = number[i].next;
          for (j = 0; j < tablinks.length; j++) {
            if(tablinks[j].dataset.number == currentNumber){
              tablinks[j].click();
              break;
            }
          }
          break;
        }
    }
}