// change directions
$(function() {

    var dir = localStorage.getItem('lang')
    console.log(dir)
    if (dir == 'ar') {
        $('body').attr("dir", 'rtl')
    } else {
        $('body').attr("dir", 'ltr');
    }
    $('.translate').click(function() {
        // save, in your .translate click handler
        localStorage.setItem('lang', $(this).attr('id'));
        var lang = localStorage.getItem('lang') || 'en';


        $('.lang').each(function(index, element) {
            $(this).text(arrLang[lang][$(this).attr('key')])
            location.reload();
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
        "COPYRIGHT": "Copyright 2020",
        "NOTHING": "Nothing Is Real",
        "SEARCH": "Search",
        // "ROTATE": "['Welcome to Fake News', 'This is just for sarcasm']"
        "RECENT": "Recent Posts",
        "UPDATE": "UPDATE",
        "CANCELUPDATE": "CANCELUPDATE"
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
        "COPYRIGHT": " جميع الحقوق محفوظه",
        "NOTHING": "لا شيء حقيقي",
        "SEARCH": "بحث",
        // "ROTATE": "['أهلاً في الاخبار المغلوطة', 'أهلاً لاستكشاف الحقيقة']"
        "RECENT": "أخر الأخبار",
        "UPDATE": "تعديل",
        "CANCELUPDATE": "الغاء"
    }
}