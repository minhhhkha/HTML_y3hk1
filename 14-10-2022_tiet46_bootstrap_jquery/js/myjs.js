$(document).ready(function(){
    alert('Xin chao nguoi dung!')
    $('#msv').blur(function(){
        var check= /^[0-9]{8}$/
        if($('#msv').val()==''){
            alert('Bat buoc nhap, khong duoc de trong!')
            return false
        }
        if(!check.test($('#msv').val()))alert('Nhap chua dung dinh dang, xin vui long nhap lai!')
        else alert('Ban da nhap dung!')
    })
    $('#ht').blur(function(){
        var check= /^[A-Z][a-z]+(\s[A-z][a-z]+)*$/
        if($('#ht').val()==''){
            alert('Bat buoc nhap, khong duoc de trong!')
            return false
        }
        if(!check.test($('#ht').val())) alert('Nhap chua dung dinh dang, xin vui long nhap lai!')
        else alert('Ban da nhap dung!')
    })
    $('#ns').blur(function(){
        if($('#ns').val()==''){
            alert('Bat buoc nhap nhap, khong duoc de trong!')
            return false
        }
        var bd= new Date($('#ns').val())
        var day= new Date
        day.setDate(day.getDate())
        if(bd > day)alert('Ngay sinh khong hop le, xin vui long nhap lai!')
        else alert('Ban da nhap dung!')
    })
})