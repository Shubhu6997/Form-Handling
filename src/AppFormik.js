import { Formik, Form, Field, ErrorMessage} from "formik";

const emailvalidation = RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
function AppFormik(){
    return(
        <Formik
            initialValues = {{
                fullname : "",
                email : ""
                }
            }
            validate = {(values)=>{
                console.log(values);
                const errors = {}
                if(values.fullname.length <=5)
                    errors.fullname = "fullname should be atleast 6 characters";
                else if(values.email.length <=5)
                    errors.email = "email should be atleast 6 characters";
                else if(!emailvalidation.test(values.email))
                    errors.email = "Invalid emailid";
                
                return errors;
                }
            }
            onSubmit = {(values)=>{
                console.log("Form Submitted");
                console.log(values);
                }
            }
        >
            {()=>{

                return(
                    <Form>
                        <Field name = "fullname" type = "text" placeholder = "fullname"/>
                        <ErrorMessage name = "fullname"/>
                        <br/><br/>

                        <Field name = "email" type = "email" placeholder = "email"/>
                        <ErrorMessage name = "email"/>
                        <br/><br/>

                        <button type = "submit">submit</button>
                    </Form>
                );
                }
            }
            
        </Formik>
    )
}

export default AppFormik;