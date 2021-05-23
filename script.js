let node = null
let nodeXHR= null
let formData = {
    checkin: null,
    checkout: null,
    adultsCount: 0,
    childrenCount: 0
}
let URL = `https://31.131.24.78:3030/pod/getPods`
let bod = document.getElementById("content")
const xhr = new XMLHttpRequest();
async function getPodsInfo(){

    node = await fetch(URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        

        },
    body: JSON.stringify(formData)})
        .then(response => response.json())
        .then(data => node = data );
        console.log(node)
    return node
    console.log(node)
}

 function getXHR(){
    const json = JSON.stringify(formData)
    xhr.open("POST", URL);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
    xhr.onload = function (){
        bod.innerHTML=''
        let result = 'Adress: ${URL}<br>Xhr Data <br>---------------<br>'
        nodeXHR = JSON.parse(xhr.response)
        for( let i =0; i<nodeXHR.pods.length; i++){
            result+=`<li>${nodeXHR.pods[i].title}</li>`
        }
        bod.innerHTML = result
        return nodeXHR
    }
}

async function Hello() {
    bod.innerHTML=''
    let result = 'Adress: ${URL}<br>Fetch Data <br>---------------<br>'
    await getPodsInfo()
    for( let i =0; i<node.pods.length; i++){
        result+=`<li>${node.pods[i].title}</li>`
    }
    bod.innerHTML = result
}

