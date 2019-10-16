$(function() {
    $("form[name='registration']").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 7
            },
        },
        messages: {
            firstname: "Enter your first name",
            lastname: "Enter your last name",
            password: {
                required: "Enter a password",
                minlength: "your password must be at least 7 characters long"
            },
            email: {
                required: "Please enter an email"
            }

        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});