let container=document.querySelector('#container');
let box=document.querySelector('#box');
// let total_D
// let lim
fetchData('https://jsonplaceholder.typicode.com/users','?_page=1&_limit=6')
async function fetchData(url,para=''){
    try{

        let res= await fetch(`${url}${para}`);
        let data = await res.json();
        
        pagi(res.headers.get('X-Total-Count'))
        displayTodo(data) 
        console.log(data);
    }
    catch(err){
        console.log('Error in code');
    }
}


function displayTodo(data) {

    container.innerHTML = '';
    data.map((el, i) => {
        let id = document.createElement('p');
        id.innerText=`id:- ${el.id}`

        let name = document.createElement('p');
        name.innerText=`name:- ${el.name}`


        let username = document.createElement('p');
        username.innerText=`username:- ${el.username}`

        let email = document.createElement('p');
        email.innerText=`email:- ${el.email}`

        let website = document.createElement('p');
        website.innerText=`website:- ${el.website}`


        let city = document.createElement('p');
        city.innerText=`city:- ${el.address.city}`

       
        let div = document.createElement('div')
        div.setAttribute('id','maindiv')

        div.append(id,name,username,email,website,city);
        container.append(div);
    })
}

function pagi(totalNoOfEle){
    box.innerHTML=null
    total_D=totalNoOfEle;
    lim = 6;
    let aver_Data= Math.ceil(total_D/lim)
    for(let i = 1;i<=aver_Data;i++){
        let btnn = document.createElement('button');
        btnn.textContent=i;
        btnn.addEventListener('click',function(){
            fetchData(`https://jsonplaceholder.typicode.com/users?_page=${i}&_limit=${lim}`)
        })
        box.append(btnn)
    }
}



