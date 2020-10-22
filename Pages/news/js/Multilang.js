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
        "EXPLORE": "Explore",
        "7mbozo": "7mbozo"

    },
    "ar": {
        "HOME": "الرئيسيه",
        "NEWS": "الاخبار",
        "POST": "نشر",
        "EXPLORE": "استكشف",
        "7mbozo": "حمبوزو"
    }
}