$(function(){
    $('.bottom-left ul').on({
        click:function(){
            if($(this).text() =='用户管理' ){
                $('.content').load('./user.html')
            }else if($(this).text() =='栏目管理' ){
                $('.content').load('./category.html')
            }
        }
    },'li')
})