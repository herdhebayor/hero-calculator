const result = document.getElementById('result')
const darkBtn= document.getElementById('dark')
const lightBtn= document.getElementById('light')


function clearScreen(){
    result.value =''
    document.getElementById('history').innerHTML = ''
} 
function backspace(){
    console.log('clicked')
    result.value = result.value.substr(0, result.value.length -1)
}

function display(value){
    if(result.value == "" && value.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)){
        console.log('is not a number')
        return;
    }else if (
			result.value !== ' ' &&
			value.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/) && value!== '.'
		) {
			result.value += ' ' + value + ' ';
		} else {
			result.value += value
		}
}
function calculate(){
    const p = result.value
    const  q = eval(p)
     document.getElementById('history').innerHTML += `${result.value} = ${q} \n`
    result.value = q
}

darkBtn.addEventListener('click',()=>{
    const element = document.body
    element.classList.add('dark')
    console.log('click')
})
lightBtn.addEventListener('click', () => {
	const element = document.body
	element.classList.remove('dark')
	console.log('click')
})