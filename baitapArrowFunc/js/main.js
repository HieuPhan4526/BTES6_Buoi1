/**
 * B1 : Hiển thị danh sách bảng màu
 * B2 : Tạo chức năng đổi màu
 * 
 */




const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];


// met fist = (second) => {}
let loadButton = () => {
    // colorList.map(function () { });
    // anfn ; ((first) => { second })
    let buttonList = "";
    colorList.map((color, index) => {
        if (index == 0) {
            buttonList += `
            <button onclick = "changeColor('${color}')" class = "color-button ${color} active" ></button>   
        `;
        } else {

            buttonList += `
                <button id="abc" onclick = "changeColor('${color}','${index}')" class = "color-button ${color} ${index}"></button>
            `;
        }
    });

    document.querySelector("#colorContainer").innerHTML = buttonList;
};
loadButton();
let changeColor = (color, item) => {
    document.querySelector("#house").className = `house ${color}`;
    console.log(item);
};


