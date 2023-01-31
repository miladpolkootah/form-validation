export const validate = data=>{
    const errors = {};
    /*Name Validation*/
    if(!data.Name.trim()){
        errors.name = "Name is required!";
    }else{
        delete errors.name;
    };
    /*Email Validation using Regex*/
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)){
        errors.email = "invalid Email!"
    }else if(!data.Email.trim()){
        errors.email = "Email is required!"
    }else{
        delete errors.email
    }
    /*Password Validation*/
    if(data.Password.length < 6){
        errors.password = "Password is too short!"
    }else{
       delete errors.password
    }
    /*Confirm Password validation*/
    if(data.ConfirmPassword !== data.Password){
        errors.confirmpassword = "the Passwords don't match!"
    }else{
        delete errors.confirmpassword
    }
    /*Trems of condition Validation*/
    if(!data.isAccepted){
        errors.isAccepted = "Please accept our Terms."
    }else{
        delete errors.isAccepted
    }

    return errors;
}