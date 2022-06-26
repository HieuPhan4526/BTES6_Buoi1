
let hoverME = () => {
    let headText = document.querySelector(".heading").innerHTML;
    // console.log(headText);
    let separator = [...headText];
    // console.log(separator);
    let textList = "";
    for (let value of separator) {
        textList += `
            <span>${value}</span>
        `;
    }
    document.querySelector(".heading").innerHTML = textList;

};
hoverME();