function generateElement() {
  return Math.floor(Math.random() * 100) + 1
}

function generateArray() {
  let result = []

  while(result.length < 5) {
    result.push(generateElement())
  }

  return result
}

function generateContainer() {
  return document.createElement("div")
}

function fillArrContainer(element, arr) {
  arr.forEach(i => {
    const spanEl = document.createElement("span")
    spanEl.textContent = i
    element.appendChild(spanEl)
  }) 
}

function isOrdered(a, b) {
  return a <= b
}

function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index +1])) {
    const temp = arr[index]
    arr[index] = arr[index +1]
    arr[index + 1] = temp 
  }

  return arr
}

function highlightCurrentEls(element, index){
  element.children[index].style.border = "2px dashed red"
  element.children[index + 1].style.border = "2px dashed red"
}

const generateBtn = document.getElementById("generate-btn")
const startingArr = document.getElementById("starting-array")
const sortBtn = document.getElementById("sort-btn")
const arrContainer = document.getElementById("array-container")

generateBtn.addEventListener("click", () => {
  startingArr.textContent = ""

  if (arrContainer.children) {
    arrContainer.replaceChildren(startingArr)
  }
  

  fillArrContainer(startingArr, generateArray())
})


sortBtn.addEventListener("click", () => {
  let values = [...startingArr.children].map(i => Number(i.textContent))
  for (let i = 1; i < values.length - 1; i++) {
    for (let i = 0; i < values.length - 1; i++) {
         let swapped = swapElements(values, i) 
         let divEl = generateContainer()
         fillArrContainer(divEl, swapped)
         arrContainer.appendChild(divEl)
         highlightCurrentEls(divEl, i)
    }
  }

  highlightCurrentEls(startingArr, 0)
})
