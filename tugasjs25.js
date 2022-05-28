var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
function tugas25() {
    console.log("Sebelumnya : "+data);
    data = data.sort((a, b) => a - b);
    console.log("Ascending : "+data);
    data = data.reverse();
    console.log("Descending : "+data);
    console.log("filter > 10 : "+data.filter(filter));
}

function filter(data) {
    if (data > 10) {
        return data;
    }
}
tugas25();