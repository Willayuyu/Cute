 //判断密码名格式
function regPwd() {
    pwd = document.getElementById("pwd").value;
    var var1 = /^(?=.*\d)(?=.*[A-Z]{3})(?=.*[#&*?]{1})[\da-zA-Z#&*?]{5,11}$/;//密码
    if (var1.test(pwd)) {
        //密码
        document.getElementById("regPwd").innerText = "密码正确";
        document.getElementById("regPwd").style.color = "green";
    } else {
        document.getElementById("regPwd").innerText = "密码格式错误";
        document.getElementById("regPwd").style.color = "red";
    }
}

function regSurePwd() {
    surePwd = document.getElementById("surePwd").value;
    pwd = document.getElementById("pwd").value;
    var var2 =/^(?=.*\d)(?=.*[A-Z]{3})(?=.*[#&*?]{1})[\da-zA-Z#&*?]{5,11}$/;//密码
    if ((pwd!=surePwd)||(!var2.test(surePwd))) {
        //确认密码
        document.getElementById("regSurePwd").innerText = "密码错误";
        document.getElementById("regSurePwd").style.color = "red";
    } 
    else {
        document.getElementById("regSurePwd").innerText = "密码正确";
        document.getElementById("regSurePwd").style.color = "green";
    }
}

function regMailbox() {
    mailbox = document.getElementById("mailbox").value;
    var var3 = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;//邮箱
    if (var3.test(mailbox)) {
        //邮箱
        document.getElementById("regMailbox").innerText = "邮箱正确";
        document.getElementById("regMailbox").style.color = "green";
    } 
    else {
        document.getElementById("regMailbox").innerText = "邮箱格式错误";
        document.getElementById("regMailbox").style.color = "red";
    }
}
function varReg(){
    regMailbox();
regPwd();
regSurePwd();

}