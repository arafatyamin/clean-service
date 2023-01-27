const fetchFunc =()=>{
    fetch('project.json')
    .then( res => res.json())
    .then(data => showResult(data))
}

const showResult = (data)=>{
    console.log(data)
    

    data.forEach(service => {
        console.log(service.picture);
        document.getElementById('card-container').innerHTML +=`
                <div class="service-container">
                    <img src="${service.picture}" alt="" />
                    <h1>${service.name}</h1>
                    <p>${service.about}</p>
                </div>
            `
        })     
}

fetchFunc()