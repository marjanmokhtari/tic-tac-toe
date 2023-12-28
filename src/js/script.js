

let boxpaly = document.getElementsByClassName('boxone')[0]
let boxgame = document.getElementsByClassName('boxgame')[0]
let allcell = document.querySelectorAll('.allcell')
let flag = 1
let arrwin = []
const btn=document.getElementById('mybtn')
let count
let equal=document.getElementsByClassName('equalbx')
let turn=document.getElementById('turn')


// ***** play click *****
function clickplay() {
    boxpaly.style.opacity = '0'
    boxpaly.style.visibility = 'hidden'
    boxpaly.style.display = 'none'
    boxgame.style.opacity = '1'


}



allcell.forEach((val, i) => {
    
    val.addEventListener('click', () => {
       
        if (val.getAttribute('data-status') == 'on') {
            if (val.innerHTML == '') {
                val.innerHTML = 'X'
                val.setAttribute('data-status', 'off')
                arrwin.push(val)
                _check()

            }
            randomAI()
            val.setAttribute('data-status', 'off')

        }
    })

})



// ******** AI mood ******


function randomAI() {
    let availableCells=[]
    for (let cell of allcell) {
        if (cell.getAttribute('data-status') === 'on') {
            availableCells.push(cell);
            
        }
    }


    let cell = availableCells[Math.floor(Math.random() *availableCells.length)];
    cell.innerHTML ='O';
    cell.setAttribute('data-status', 'off');
    _check()

    
}


// *** equal function ***


function equal_status(){
    count = 0
    allcell.forEach((v)=>{
        if(v.innerHTML!=''){
            count++
        }
        if(count==9){
           alert('equal..')
           resetGym()
        }
    })
}





// **** check function ****

function _check(){
allcell.forEach((val,i)=>{
   arrwin[i]=val.innerHTML

})



// *********** equal check ******
equal_status()



if(
    arrwin[0]==arrwin[1]&& arrwin[0]==arrwin[2]&&arrwin[0]!=''

){
    allcell[0].style.backgroundColor='red'
    allcell[1].style.backgroundColor='red'
    allcell[2].style.backgroundColor='red'
    resetGym()


}else if(
    arrwin[3]==arrwin[4] &&
    arrwin[3] == arrwin[5]  &&
    arrwin[3] != ''
){
    allcell[3].style.backgroundColor='red'
    allcell[4].style.backgroundColor='red'
    allcell[5].style.backgroundColor='red'
    resetGym()



}else if(
    arrwin[6]==arrwin[7]&&
    arrwin[6]==arrwin[8]&&
    arrwin[6]!=''
){
    allcell[6].style.backgroundColor='red'
    allcell[7].style.backgroundColor='red'
    allcell[8].style.backgroundColor='red'
    resetGym()




}else if(
    arrwin[0]==arrwin[4]&&
    arrwin[0]==arrwin[8]&&
    arrwin[8]!=''
){
    allcell[0].style.backgroundColor='red'
    allcell[4].style.backgroundColor='red'
    allcell[8].style.backgroundColor='red'
    resetGym()


}else if(
    arrwin[2]==arrwin[4]&&
    arrwin[2]==arrwin[6]&&
    arrwin[6]!=''
){
    allcell[2].style.backgroundColor='red'
    allcell[4].style.backgroundColor='red'
    allcell[6].style.backgroundColor='red'
    resetGym()


}else if(
    arrwin[0]==arrwin[3]&&
    arrwin[0]==arrwin[6]&&
    arrwin[6]!=''
){
    allcell[2].style.backgroundColor='red'
    allcell[4].style.backgroundColor='red'
    allcell[6].style.backgroundColor='red'
    resetGym()


}else if(
    arrwin[1]==arrwin[4]&&
    arrwin[1]==arrwin[7]&&
    arrwin[1]!=''
){
    allcell[1].style.backgroundColor='red'
    allcell[4].style.backgroundColor='red'
    allcell[7].style.backgroundColor='red'
    resetGym()


}else if(
    arrwin[2]==arrwin[5]&&
    arrwin[2]==arrwin[8]&&
    arrwin[2]!=''
   

){
    allcell[2].style.backgroundColor='red'
    allcell[5].style.backgroundColor='red'
    allcell[8].style.backgroundColor='red'
    resetGym()


}





}

// **** reset data ****

function resetGym(){
setTimeout(()=>{
boxgame.style.opacity='0'
boxpaly.style.opacity='1'
boxpaly.style.visibility='visible'
boxpaly.style.display = 'flex'

allcell.forEach((val)=>{
    val.setAttribute('data-status','on');
    val.innerText=''
    val.style.backgroundColor = ''

})

},200)
}


