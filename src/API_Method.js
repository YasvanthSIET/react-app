const API_Method = async (API_URL,objMethod) =>{
    let errorMsg = null;
    try{
        const response = await fetch(API_URL,objMethod)
        if(!response.ok) throw Error("Reload the app");
    }
    catch(err){
        errorMsg = err.messege
    }
    finally{
        return errorMsg;
    }
}

export default API_Method;