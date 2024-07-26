let myArray = ['apple', 'banana', 'cherry', 'orange'];

console.log("Длина массива:", myArray.length);
alert("Длина массива: " + myArray.length);

let confirmation = confirm("Нажмите ОК для удаления одного элемента из массива. \n Нажмите ОТМЕНА если не хотите удалять");

if (confirmation) {
    myArray.pop();
    alert("Массив после удаления элемента:" + myArray.length);
} else {
    alert("Массив без изменений:" + myArray);
}

alert("Финальная длина массива:" + myArray.length);
