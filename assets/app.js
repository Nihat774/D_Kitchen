// const cookName1 = document.querySelector(".cookName1")
// const cookName2 = document.querySelector(".cookName2")
// const cookName3 = document.querySelector(".cookName3")
// const cookName4 = document.querySelector(".cookName4")
// const asideBox = document.querySelector(".asideBox")
const btn = document.getElementById("buy")
// const price1 = document.querySelector(".money1")
// const price2 = document.querySelector(".money2")
// const price3 = document.querySelector(".money3")
// const price4 = document.querySelector(".money4")
// const price5 = document.querySelector(".money5")
// const price6 = document.querySelector(".money6")
const card = document.querySelector(".card")
const aside = document.querySelector("aside")

// let mealName1 = dessert.mealName1
// let mealName2 = "Simit"
// let mealName3 = "Pizza"
// let mealName4 = "Pizza"
// let mealName5 = "Pizza"
// let mealName6 = "Pizza"

// let qiymet1 = "$3.5"
// let qiymet2 = "$1.8"
// let qiymet3 = "$10"
// let qiymet4 = "$15"
// let qiymet5 = "$15"
// let qiymet6 = "$15"

// price2.innerHTML = "$1.8"
// price3.innerHTML = "$10"
// price4.innerHTML = "$15"
// price5.innerHTML = "$15"
// price6.innerHTML = "$15"


const dessert =[ 
    {mealName1:"Mərcimək",price1:"$5",photo1:"./images/photo1.jpeg"},
    {mealName2:"Pizza",price2:"$5",photo2:"./images/photo2.jpeg"},
    {mealName3:"Simit",price3:"$5",photo3:"./images/photo3.jpg"},
    {mealName4:"Sup",price4:"$5",photo4:"./images/photo2.jpeg"}
] 

function addToBox1() {
    dessert.filter(({mealName1,price1,photo1})=>{
        aside.innerHTML += `
        <div>${mealName1}</div>
        <div>${price1}</div>
        <div>${photo1}</div>

        `
    }
)}
// function addToBox2() {
//     asideBox.innerHTML += `
//     <div class="newBox">
//     <div>
//         <div class="newName"><h2>${mealName2}</h2></div>
//         <div><h4>${qiymet2}</h4></div>
//     </div>
//     <div class="trashDiv" onclick="removeOrder()"><i class="fa-solid fa-trash"></i></div>
//     </div>`
// }
// function addToBox3() {
//     asideBox.innerHTML += `
//     <div class="newBox">
//     <div>
//         <div class="newName"><h2>${mealName3}</h2></div>
//         <div><h4>${qiymet3}</h4></div>
//     </div>
//     <div class="trashDiv" onclick="removeOrder()"><i class="fa-solid fa-trash"></i></div>
//     </div>`
// }
// function addToBox4() {
//     asideBox.innerHTML += `
//     <div class="newBox">
//         <div>
//             <div class="newName"><h2>${mealName1}</h2></div>
//             <div><h4>${qiymet4}</h4></div>
//          </div>

//         <div class="trashDiv" onclick="removeOrder()">
//             <i class="fa-solid fa-trash"></i>
//         </div>
//     </div>`
// }
// function addToBox5() {
//     asideBox.innerHTML += `
//     <div class="newBox">
//         <div>
//             <div class="newName"><h2>${mealName6}</h2></div>
//             <div><h4>${qiymet6}</h4></div>
//          </div>

//         <div class="trashDiv" onclick="removeOrder()">
//             <i class="fa-solid fa-trash"></i>
//         </div>
//     </div>`
// }
// function addToBox6() {

//     dessert.map((mealName1,price1,photo1)=>{
//         asideBox.innerHTML += `
//         <div class="newBox">
//             <div>
//                 <div><img src="${photo1}"></div>
//                 <div class="newName"><h2>${mealName1}</h2></div>
//                 <div><h4>${price1}</h4></div>
//              </div>
    
//             <div class="trashDiv" onclick="removeOrder()">
//                 <i class="fa-solid fa-trash"></i>
//             </div>
//         </div>`
//     })
// }
// function removeOrder() {
//     asideBox.remove()

// }

