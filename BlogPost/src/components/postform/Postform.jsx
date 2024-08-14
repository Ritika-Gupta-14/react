import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { RTE,Button,Select,Input } from '../index.js'
import configService from '../../supabase/configs.js'
import storageService from '../../supabase/bucket.js'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Postform({post}) {
const navigate=useNavigate()
const{register,setValue,watch,handleSubmit,getValues,control}=useForm({
    defaultValues:{
        title:post?post.title:'',
        slug:post?post.slug:'',
        status:post?post.status:'active',
        content:post?post.content:''
    }
})    
const userData= useSelector((state)=>state.auth.userData)

const submit=async(data)=>{
    if(post){
        const file=data.image[0]?await storageService.uploadFile("",data.image[0]):null
        if(file){
            storageService.deleteFile(post.featuredImage)
        }
        const dbpost= await configService.updateData(
            post.slug,{...data,featuredImage:file?file.fullPath:undefined})

            if(dbpost){
                navigate(`/post/:${post.slug}`)
            }
    }else{
        const file=data.image[0]? await storageService.uploadFile("",data.image[0]):null
        if(file){
            const path=file.fullPath
            data.featuredImage=path
            configService.insertData({...data,userId:userData.id})
        }
    }
}

const slugTransform=useCallback((value)=>{
    if(value && typeof value==="string"){
        return value.trim().toLowerCase().replace(/[^a-zA-Z\d]/g,'-')
    }
    return ''
},[])

useEffect(()=>{
const subscription=watch((value,{name})=>{
if (name=='title'){
    setValue('slug',slugTransform(value.title),{shouldValidate:true})
}
})
return()=>{subscription.unsubscribe()}
},[watch,slugTransform,setValue])


  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
            
                {post && (
                    <div className="w-full mb-4">
                     <h1>{post.title}</h1>
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
  
}

export default Postform