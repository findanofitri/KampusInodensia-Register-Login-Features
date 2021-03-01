
$('#show-password-user').click(function() {
	if ($(this).hasClass('fa-eye-slash')) {
		$('#input-user-password').attr('type', 'text');
		$(this).removeClass('fa-eye-slash');
		$(this).addClass('fa-eye');
	} else {
		$('#input-user-password').attr('type', 'password');
		$(this).removeClass('fa-eye');
		$(this).addClass('fa-eye-slash');
	}
})

$('#show-password-user-ulang').click(function() {
	if ($(this).hasClass('fa-eye-slash')) {
		$('#input-ulang-user-password').attr('type', 'text');
		$(this).removeClass('fa-eye-slash');
		$(this).addClass('fa-eye');
	} else {
		$('#input-ulang-user-password').attr('type', 'password');
		$(this).removeClass('fa-eye');
		$(this).addClass('fa-eye-slash');
	}
})