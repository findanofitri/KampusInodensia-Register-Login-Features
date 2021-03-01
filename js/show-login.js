$('#show-password').click(function() {
	if ($(this).hasClass('fa-eye-slash')) {
		$('#input-password').attr('type', 'text');
		$(this).removeClass('fa-eye-slash');
		$(this).addClass('fa-eye');
	} else {
		$('#input-password').attr('type', 'password');
		$(this).removeClass('fa-eye');
		$(this).addClass('fa-eye-slash');
	}
})
