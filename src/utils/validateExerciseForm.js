export const validateExerciseForm = (values) => {
    const errors = {};

    if (!values.fullName) {
        errors.fullName = 'Required';
    } 

    if (!values.email) {
        errors.email = 'Required';
    } else if (!values.email.includes('@')) {
        errors.email = 'Email should contain an @.';
    }

    if (!values.password) {
        errors.password = 'Required';
    }

    return errors;
    
}