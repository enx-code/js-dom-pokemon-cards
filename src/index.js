
console.log(data[0].name);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
const ul = document.querySelector("ul");

function firstLetterCapital(pokeName){
    let pName = pokeName[0].toUpperCase() + pokeName.slice(1);
    return pName;
}
for (let i = 0; i < data.length; i++){
    const liImage = document.createElement("li");
    liImage.setAttribute("class", "card")
    liImage.style.listStyle = "none"
    // console.log("texte testing")
    const h2 = document.createElement("h2")
    h2.setAttribute("class", "card--title")
    const pokeName = firstLetterCapital(data[i].name)
    h2.innerText = pokeName
    // console.log(data[i].name)
    const image = document.createElement("img")
    image.setAttribute("width", "256") 
    image.setAttribute("class", "card--img")
    image.src = data[i].sprites.other["official-artwork"].front_default
    const skill = document.createElement('ul')
    skill.setAttribute("class", "card--text")
    ul.append(liImage)
    liImage.append(h2, image, skill)
    for (let j = 0; j < data[i].stats.length; j++){
        const li = document.createElement('li')
        li.style.listStyle = "none"
        const name = data[i].stats[j].stat.name
        const value = data[i].stats[j].base_stat
        li.innerText = `${name}: ${value}`
        console.log("what is J", data[i].stats[j].stat.name, "+ ", data[i].stats[j].base_stat )
        skill.append(li)

        }
        // let stats = data[i].stats
        // console.log('statistic', stats)
}
