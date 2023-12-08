import {supabase} from "./supabase";
import {useRouter} from "next/navigation";

export const handleUserRegistrationWithEmail = async (email:string,password:string, firstName:string, lastName:string) => {
    try {
        const {data, error} = await supabase.auth.signUp(
            {
                email: email,
                password: password,
                options: {
                    data: {
                        first_name: firstName,
                        last_name: lastName,
                    }
                }
            }
        )
        if(error){
            window.alert(error.message)
        }else{
            window.alert("Registration is successful go to your email to confirm before login after clicking ok you will redirected to the login page")
            return true
        }
    } catch (e) {
        window.alert("An error has occured we are trying to resolving try again later")
    }
}

export const handleUserLoginWithEmail = async (email:string,password:string) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if(error){
            window.alert(error.message)
        }else{
            return true
        }
    }catch (e) {
        window.alert("An error has occured we are trying to resolving try again later")

    }
}