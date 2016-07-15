function calcAge() {
    var d = new Date,
        nowY = d.getFullYear(),
        nowM = d.getMonth() + 1,
        nowD = d.getDate(),
        birthY = 1988,
        birthM = 05,
        birtD = 21,
        age = nowY - birthY;

    if (nowM < birthM || nowM == birthM && nowD < birtD) {
        age--;
    }

    return age < 0 ? 0 : age;
}