new ClipboardJS('#clipboard');

var app = new Vue({
    el: '#app',
    data: {
        name: '',
        role: '',
        email: '',
        phone: '+31 (0)76 204 30 46',
        mobile: '',
        extra: '',
        extraInitial: '',
        linkedin: '',
        image: '',

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

    updatePlainHTML();
});

function updatePlainHTML() {
    var signatureHTML = $("#signature-wrapper > table")[0].outerHTML;
    document.querySelector("textarea").value = signatureHTML;
}