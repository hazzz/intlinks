/**
 * Created by 浩 on 2016/4/28.
 */

var m = jQuery.noConflict();


m(function(){

    //获取屏幕的高度和宽度
    var screen_width=m(window).width();
    var screen_height=m(window).height();

    var document_width=m(document).width();
    var document_height=m(document).height();

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
         m(".screen_shade").css("width",document_width);
         m(".screen_shade").css("height",document_height);
         m(".screen_shade").show();

         m('.links_cont').show();
    })

//鼠标管理时管理文字出现
    m(".mange_links").hover(function(){
        m('.function_describe').show();
    },function(){
        m(".function_describe").hide();
    });


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

    m(".closetitlebutton").click(function(){
        m('.links_cont').hide();
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

//    点击links标签中的编辑按钮
    m(".fa-pencil-square-o").click(function(){
        var link_href=m(this).parent().parent().attr("href");
        var link_name=m(this).parent().parent().text();

        m(".webname").val(link_name);
        m(".website").val(link_href);

    })

    //    点击links标签中的关闭按钮
    m(".fa-times").click(function(){
        m(this).parent().parent().hide();

    })
    m(".linktitlebutton").click(function(){
            m(".edit_links_cont li:last").after('<li><a href="javascript:void 0" onclick="return false"  class="links edit_links">23<span class="edit_function"><i class="fa fa-pencil-square-o fonticons" aria-hidden="true"></i><i class="fa fa-times fonticons" aria-hidden="true"></i></span></a></li>');

    })

})