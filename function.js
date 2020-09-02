const { dialog } = require('electron')
const fs = require('fs')




function showFile() {
    const root = fs.readdirSync('/')

    // 이것은 디스크의 최상위 레벨(root-level), '/' 또는 'C:\'에 있는
    // 모든 파일을 출력할 것입니다.
    alert(root)
}