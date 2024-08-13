import config from "../conf/config";
import { createClient } from '@supabase/supabase-js';

export class ConfigService {
    client;

    constructor() {
        this.client = createClient(config.supabaseUrl, config.supabaseKey);
    }

    async insertData({ slug, title, content, featuredImage, status, userId }) {
        try {
            const { data, error } = await this.client
                .from("articles")
                .insert({ slug, title, content, featuredImage, status, userId });

            if (error) {
                throw error;
            }

            return data;
        } catch (error) {
            console.error("Insert data error:", error.message);
            return { error: error.message };
        }
    }

    async updateData(slug, { title, content, featuredImage, status, userId }) {
        try {
            const { data, error } = await this.client
                .from("articles")
                .update({ title, content, featuredImage, status, userId })
                .eq('slug', slug);

            if (error) {
                throw error;
            }

            return data;
        } catch (error) {
            console.error("Update data error:", error.message);
            return { error: error.message };
        }
    }

    async deleteData(slug) {
        try {
            const { data, error } = await this.client
                .from("articles")
                .delete()
                .eq('slug', slug);

            if (error) {
                throw error;
            }

            return data;
        } catch (error) {
            console.error("Delete data error:", error.message);
            return { error: error.message };
        }
    }

    async fetchAllData() {
        try {
            const { data, error } = await this.client
                .from("articles")
                .select();

            if (error) {
                throw error;
            }

            return data;
        } catch (error) {
            console.error("Fetch all data error:", error.message);
            return { error: error.message };
        }
    }

    async fetchData(slug) {
        try {
            const { data, error } = await this.client
                .from("articles")
                .select()
                .eq('slug', slug);

            if (error) {
                throw error;
            }

            return data;
        } catch (error) {
            console.error("Fetch data error:", error.message);
            return { error: error.message };
        }
    }
}

const configService = new ConfigService();

export default configService;
