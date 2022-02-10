let saveBtn = document.getElementById("save-btn")
let saveTabBtn = document.getElementById("save-tab-btn")
let deleteBtn = document.getElementById("delete-btn")
let inputfld = document.getElementById("input-fld")
let ulList = document.getElementById("ul-list")
// let localArr=JSON.parse(localStorage.getItem("leadList"))
let leadList = JSON.parse(localStorage.getItem("leadList"))

if (leadList != null) {
    for (let i = 0; i < leadList.length; i++) {
        ulList.innerHTML += `<li>
        <a target='_blank' href="${leadList[i]}">${leadList[i]}</a>
        </li> 
        `
    }
}
else{
    leadList=[]
}

saveBtn.addEventListener('click', function () {
    leadName = inputfld.value
    leadList.push(leadName)
    localStorage.setItem("leadList", JSON.stringify(leadList))


    ulList.innerHTML += `<li>
    <a target='_blank' href="${leadName}">${leadName}</a>
    </li> 
    `
    inputfld.value = ""


})

saveTabBtn.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        leadList.push(tabs[0].url)
        localStorage.setItem("leadList", JSON.stringify(leadList))
        ulList.innerHTML += `
        <li>
        <a target='_blank' href="${tabs[0].url}">${tabs[0].url}</a>
        </li> 
        `
    })
})

deleteBtn.addEventListener('click', function () {
    localStorage.clear()
    leadList = []
    ulList.innerHTML = ""
})