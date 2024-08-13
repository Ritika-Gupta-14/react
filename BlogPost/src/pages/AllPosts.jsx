import React, { useEffect, useState } from "react";
import { Container, Postcard } from "../components";
import configService from "../supabase/configs";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    configService
      .fetchAllData()
      .then((data) => {
        if (data) {
          setPosts(data);
        } else {
          throw error;
        }
      })
      .catch((err) => {
        console.error("Error getting all posts");
      });
  }, []);
  return (
    <Container>
      <div>
        {posts.map((post) => (
          <Postcard slug={post.slug} title={post.title} />
        ))}
      </div>
    </Container>
  );
}

export default AllPosts;
