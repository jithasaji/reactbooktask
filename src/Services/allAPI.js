import { commonAPI } from "./commonAPI";
import { serverURL } from "./severURL";

export const uploadAllBooks = async (body) =>{
    return await commonAPI("POST",`${serverURL}/Books`,body)
}
export const getAllBooks = async () =>{
    return await  commonAPI("GET",`${serverURL}/Books`,"")
}

export const deleteABook = async (id) =>{
    return await commonAPI("DELETE",`${serverURL}/Books/${id}`,{})
}


export const updateABook = async (id,body) => {
    return await commonAPI("PUT",`${serverURL}/Books/${id}`,body)
}

export const getABook = async (id) =>{
    return await commonAPI("GET",`${serverURL}/Books/${id}`,"")
}