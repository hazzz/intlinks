/**
 * Created by 浩 on 2016/4/28.
 */

var m = jQuery.noConflict();


m(function(){

    m(".ba_photo").click(function(){
        m('.background_photo').slideToggle();
        })

    m(".back_cancel").click(function(){
        m('.background_photo').slideToggle();
    })

    m(".signin").click(function(){
        m('.sign_in').show();
    })

    m(".close_signin").click(function(){
        m('.sign_in').hide();
    })

    m(".signup").click(function(){
        m('.sign_up').show();
    })
    m(".close_signup").click(function(){
        m('.sign_up').hide();
    })


    m(".model_tab ul a").click(function(){
        m(".model_tab ul a").removeClass('model_selt');
        m(this).addClass('model_selt');

        var model_index= m(this).parent().index();
        m('.diy_links').hide();
        var links_index=m('.diy_links').eq(model_index);
        links_index.show();
    })


})