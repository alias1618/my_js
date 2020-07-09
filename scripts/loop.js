var i, j;

// 把外層的迴圈標記叫做 loop1
loop1:
for (i = 0; i < 3; i++) {
    // 把內層的迴圈標做 loop2
    loop2:
    for (j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            // 跳出 loop1 迴圈
            continue loop1;
        }
        console.log('i = ' + i + ', j = ' + j +" ");
    }
}