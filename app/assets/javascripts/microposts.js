function updateCountdown() {
    // 140 is the max message length
    var remaining = 140 - jQuery('#micropost_content').val().length;
    if (remaining != 1)
        jQuery('.countdown').text(remaining + ' characters remaining');
    else
        jQuery('.countdown').text(remaining + ' character remaining');
}

jQuery(document).ready(function($) {
    updateCountdown();
    $('#micropost_content').change(updateCountdown);
    $('#micropost_content').keyup(updateCountdown);
});