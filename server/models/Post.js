'use strict'

/**
 * Dependencies
 */

const db = require('../../data/dbConfig')

/**
 * Define model
 */

 class Post{

    static async create(post_fields){
        if (
           process.env.NODE_ENV === "production" 
         ){
           const [ids] = await db("posts").insert(
              {
                user_email: post_fields.email,   
                user_name: post_fields.name, 
                category: post_fields.category,
                post_text: post_fields.post_text,               
              },
              ["id"]
            );
      
            const new_car = await db("posts")
              .where({ id: ids.id })
              .first();
      
            return new_car;
         }else{
           const [id] = await db("posts").insert({
            user_email: post_fields.email,   
            user_name: post_fields.name, 
            category: post_fields.category,
            post_text: post_fields.post_text,  
              
            });
      
            const new_car = await db("posts")
              .where({ id: id })
              .first();
            return new_car;
         }
       
      
      }
   
      static async delete(id, email) {
        return await db("posts").where({ id: id, user_email: email }).del()
      }


      static async allUserPosts(email){
   
        if(email){
           return db('posts').where("user_email", email);
  
        }else{
           return db("posts");
        }
      
     }

     static async all(){
           return db('posts')
      
     }

  

   
 }



 
 /**
 * Export model
 */

module.exports = Post