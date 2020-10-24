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
        "HABOUT": "About Us",
        "PABOUT": "We are a site that cares about wrong news and rumors that could destroy an entire nation, so here we are putting all the wrong news and rumors for a better future.",
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
        "HABOUT": "اضف الي معلوماتك",
        "PABOUT": "نحن موقع يهتم بالأخبار والإشاعات الخاطئة التي يمكن أن تدمر أمة بأكملها ، لذلك نحن هنا نضع كل الأخبار والإشاعات الخاطئة من أجل مستقبل أفضل"




    }
}