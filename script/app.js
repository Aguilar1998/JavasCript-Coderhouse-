const items = document.getElementById('items')
const templateCard = document.getElementById('template-card')


document.addEventListener('DOMContentLoaded',() =>{
    fetchData()
})


const fetchData = async ()=>{
    try{
        const res = await fetch('api.json')
        const data = await res.json()
        pintarCard(data)
    }catch(error){
        console.log(error);
    }
}

const pintarCard = data =>{
    console.log(data);
}