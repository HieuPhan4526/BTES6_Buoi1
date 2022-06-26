/**
 * Tính điểm trung bình của 2 khối lớp
 * 
 * + chỉ được viết 1 hàm tính điểm cho cả 2 Khối lớp
 * 
 * 
 */
let tinhDTB = (...diem) => {
    console.log(diem);
    let tong = 0;
    diem.map((item) => {
        tong += item;
    });

    return tong / diem.length;
};

let layDiemKhoi1 = () => {
    let diemT = document.querySelector("#inpToan").value;
    let diemL = document.querySelector("#inpLy").value;
    let diemH = document.querySelector("#inpHoa").value;
    console.log(diemT, diemL, diemH);

    let dtb = tinhDTB(Number(diemT), Number(diemL), Number(diemH));

    document.querySelector("#tbKhoi1").innerHTML = dtb;
};

document.querySelector("#btnKhoi1").onclick = layDiemKhoi1;

let layDiemKhoi2 = () => {
    let diemV = document.querySelector("#inpVan").value;
    let diemS = document.querySelector("#inpSu").value;
    let diemD = document.querySelector("#inpDia").value;
    let diemEng = document.querySelector("#inpEnglish").value;
    // console.log(diemV, diemS, diemD, diemEng);
    let dtb = tinhDTB(Number(diemV), Number(diemS), Number(diemD), Number(diemEng));

    document.querySelector("#tbKhoi2").innerHTML = dtb;
};
document.querySelector("#btnKhoi2").onclick = layDiemKhoi2;

