import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import configService from "../supabase/configs";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
console.log(slug);
   
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    console.log(userData);
    console.log(post)
    
    useEffect(() => {
        
        if (slug) {
            configService.fetchData(slug).then((post) => {
                console.log(post)
                if (post){
                    setPost(post[0]);
                } 
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);
    
    const isAuthor = post && userData ? post.user_id === userData.user.id : false;
    const deletePost = () => {
        configService.deleteData(post.slug).then((status) => {
            if (status) {
                configService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-10 mt-10 w-full h-screen">
            <Container>
                <div className="w-screen flex h-max justify-center mb-4 relative border rounded-xl p-2">
                 

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.slug}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button className="bg-red-900" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(String(post.content))}
                    </div>
            </Container>
        </div>
    ) : null;
}