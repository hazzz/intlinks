/**
 * Created by 浩 on 2016/4/28.
 */

var m = jQuery.noConflict();


m(function(){

    //获取屏幕的高度和宽度
    var screen_width=m(document).width();
    var screen_height=m(document).height();

    //背景图展开收起
    m(".ba_photo").click(function(){
        m('.background_photo').slideToggle();
        })

    m(".back_cancel").click(function(){
        m('.background_photo').slideToggle();
    })

    //选中图片和设置背景图片
    m(".photo_cont a").click(function(){
        m('.photo_cont a').removeClass('photo_select');
        m(this).addClass("photo_select");
        var this_href=m(this).attr('href');
        m('#ebody').css('background','url('+this_href+')');
    })

    //置顶
    m('.top').click(function(){
        m('html,body').animate({scrollTop:'0px'}, 800);
    })

    //links弹出框
     m(".mange_links").click(function(){
//         var links_cont_width=m('.links_cont').width();
//         var links_cont_height=m('.links_cont').height();
//
//         var links_cont_left=(screen_width-links_cont_width)/2+'px';
//         var links_cont_top=(screen_height-links_cont_height)/2+'px';
//
//         m(".links_cont").css("left",links_cont_left);
//         m(".links_cont").css("top",links_cont_top);
//
         m(".screen_shade").css("width",screen_width);
         m(".screen_shade").css("height",screen_height);
         m(".screen_shade").show();

         m('.links_cont').show();
    })	

    //设置登录弹出框居中
    m(".signin").click(function(){
        var signin_width=m('.sign_in').width();
        var signin_height=m('.sign_in').height();

        var signin_left=(screen_width-signin_width)/2+'px';
        var signin_top=(screen_height-signin_height)/2+'px';

        m(".sign_in").css("left",signin_left);
        m(".sign_in").css("top",signin_top);

        m(".screen_shade").css("width",screen_width);
        m(".screen_shade").css("height",screen_height);
        m(".screen_shade").show();

        m('.sign_in').show();
    })


    //关闭弹出框
    m(".close_signin").click(function(){
        m('.sign_in').hide();
        m(".screen_shade").hide();
    })


    //设置注册弹出框居中
    m(".signup").click(function(){
        var signup_width=m('.sign_up').width();
        var signup_height=m('.sign_up').height();

        var signup_left=(screen_width-signup_width)/2+'px';
        var signup_top=(screen_height-signup_height)/2+'px';

        m(".sign_up").css("left",signup_left);
        m(".sign_up").css("top",signup_top);

        m(".screen_shade").css("width",+screen_width);
        m(".screen_shade").css("height",screen_height);
        m(".screen_shade").show();

        m('.sign_up').show();

    })

    //关闭弹出框
    m(".close_signup").click(function(){
        m('.sign_up').hide();
        m(".screen_shade").hide();

    })

    //links模块切换
    m(".model_tab ul a").click(function(){
        m(".model_tab ul a").removeClass('model_selt');
        m(this).addClass('model_selt');

        var model_index= m(this).parent().index();
        m('.diy_links').hide();
        var links_index=m('.diy_links').eq(model_index);
        links_index.show();
    })




})