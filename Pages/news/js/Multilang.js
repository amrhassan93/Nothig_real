$(function() {
    $('.translate').click(function() {
        // save, in your .translate click handler
        localStorage.setItem('lang', $(this).attr('id'));
        var lang = localStorage.getItem('lang') || 'en';

        $('.lang').each(function(index, element) {
            $(this).text(arrLang[lang][$(this).attr('key')])
        })
    })

    var lang = localStorage.getItem('lang') || 'en';

    $('.lang').each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr('key')])
    })

})


var arrLang = {
    "en": {
        "HOME": "Home",
        "NEWS": "News",
        "POST": "Post",
        "PROFILE": "Profile",
        "JOINUS": "Join Us",
        "LOGOUT": "Logout",
        "LOGIN": "Login",
        "SIGNUP": "Sign UP",
        "EXPLORE": "Explore",
        "COPYRIGHT": "Copyright 2020"
    },
    "ar": {
        "HOME": "الرئيسيه",
        "NEWS": "الاخبار",
        "POST": "نشر",
        "PROFILE": "الصفحه الشخصية",
        "JOINUS": "انضم إلينا",
        "LOGOUT": "خروج",
        "LOGIN": "دخول",
        "SIGNUP": "سجل",
        "EXPLORE": "استكشف",
        "COPYRIGHT": " جميع الحقوق محفوظه"
    }
}