import config from "../conf/config";
import { createClient } from '@supabase/supabase-js';

export class StorageService{
client;
constructor(){
    this.client = createClient(config.supabaseUrl, config.supabaseKey);
}

async uploadFile( filePath="public/image.png", file) {
    try {
      const { data, error } = await this.client.storage
        .from("images")
        .upload(filePath, file);
  
      if (error) {
        throw error;
      }
  
      console.log('File uploaded successfully:', data);
      return data;
    } catch (error) {
      console.error('Error uploading file:', error.message);
      return { error: error.message };
    }
  }

  async deleteFile(file){
    try {
        const{data,error}=await this.client.storage
        .from('images').remove([file])
        if (error){
            throw error
        }
        console.log('File deleted successfully:', data);
        return data;

        
    } catch (error) {
        console.error("Error deleting file: ",error.message)
        return{error:error.message};
        
    }
  }
  
  async downloadFile(file){
    try {
        const{data,error}=await this.client.storage
        .from('images').download(file)
        if (error){
            throw error
        }
        console.log('File downloaded successfully:', data);
        return data;

        
    } catch (error) {
        console.error("Error downloading file: ",error.message)
        return{error:error.message};
        
    }
  }
  
}

const storageService= new StorageService();
export default storageService