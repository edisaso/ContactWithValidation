$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Моля въведете своето име'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Моля въведете своята фамилия'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Моля въведете е-майл'
                    },
                    emailAddress: {
                        message: 'Моля въведете валиден е-майл'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Моля въведете вашият телефонен номер'
                    },
                    phone: {
                        country: 'BG',
                        message: 'Моля въведете валиден телефонен номер'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Моля въведете своя адрес'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Моля изберете град'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Моля въведете пощенски код'
                    },
                    zipCode: {
                        country: 'BG',
                        message: 'Моля въведете валиден пощенски кдо'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 500,
                        message:'Съобщението трябва да е с мин 10 символа и макс 500'
                    },
                    notEmpty: {
                        message: 'Моля въведете съобщение'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});

