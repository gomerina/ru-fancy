$(document).ready(function () {
    $(document).on('click', '.jsOpenModal', function (e) {
        let objButton = $(this);
        e.preventDefault();
        $.fancybox.open({
            src: objButton.data('url'),
            type: 'ajax',
            opts: {
                touch: false,
                afterShow: function (instance, current) {
                    let objSource = current.$content;

                }
            }
        });
    });
})