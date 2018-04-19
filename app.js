new ClipboardJS('#clipboard');

var app = new Vue({
    el: '#app',
    data: {
        name: 'Sander Grandia',
        role: 'Intern',
        email: 'sandergrandia',
        phone: '+31 (0)76 204 30 46',
        mobile: '502 376 95',
        extra: '123 455 68',
        extraInitial: 'S',
        linkedin: 'https://www.linkedin.com/in/sandergrandia/',
        image: 'https://www.bluebirdday.nl/uploads/media/5acf139471926/sander.png',

        emailDomain: '@bluebirdday.nl',
        mobilePrefix: '+31 (0)6 ',
        extraPrefix: '+31 (0)76 ',
        website: 'www.bluebirdday.nl',
        street: 'Reduitlaan&nbsp;29',
        city: '4814DC&nbsp;Breda',
        logo: 'https://www.bluebirdday.nl/uploads/media/5acda028102ec/bluebird-day-handpicked-agency-standard.png',
        linkedinLogo: 'https://www.bluebirdday.nl/uploads/media/5ad7aacd61719/linkedin.png'
    },
    computed: {
        phoneStripped: function () {
            return this.phone.replace(/\(.*\)/, '');
        },
        mobileStripped: function () {
            return this.mobilePrefix.replace(/\(.*\)/, '') + this.mobile;
        },
        extraStripped: function () {
            return this.extraPrefix.replace(/\(.*\)/, '') + this.extra;
        }
    },
    watch: {
        name: function (val) {
            setTimeout(() => updatePlainHTML(), 200);
        },
        role: function (val) {
            setTimeout(() => updatePlainHTML(), 200);
        },
        email: function (val) {
            setTimeout(() => updatePlainHTML(), 200);
        },
        emailDomain: function (val) {
            setTimeout(() => updatePlainHTML(), 200);
        },
        phone: function (val) {
            setTimeout(() => updatePlainHTML(), 200);
        },
        mobilePrefix: function (val) {
            setTimeout(() => updatePlainHTML(), 200);
        },
        mobile: function (val) {
            setTimeout(() => updatePlainHTML(), 200);
        },
        extraInitial: function (val) {
            setTimeout(() => updatePlainHTML(), 200);
        },
        extraPrefix: function (val) {
            setTimeout(() => updatePlainHTML(), 200);
        },
        extra: function (val) {
            setTimeout(() => updatePlainHTML(), 200);
        },
        linkedin: function (val) {
            setTimeout(() => updatePlainHTML(), 200);
        },
        image: function (val) {
            setTimeout(() => updatePlainHTML(), 200);
        },
    }
});

$.get("https://raw.githubusercontent.com/seegrand/BBD-Signature/master/footer.html", function (data) {
    $(".footer").html(data);
});

function updatePlainHTML() {
    var signatureHTML = document.querySelector("#signature-wrapper").innerHTML;
    document.querySelector("textarea").value = signatureHTML;
}

updatePlainHTML();