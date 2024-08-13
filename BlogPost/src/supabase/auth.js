import config from "../conf/config";
import { createClient } from '@supabase/supabase-js';

export class AuthService {
    client;

    constructor() {
        this.client = createClient(config.supabaseUrl, config.supabaseKey);
    }

    async signUp({ email, password }) {
        try {
            const { data, error } = await this.client.auth.signUp({ email, password });

            if (error) {
                throw error;
            }

            return data;
        } catch (err) {
            console.error("Sign up error:", err.message);
            return { error: err.message };
        }
    }

    async signIn({ email, password }) {
        try {
            const { data, error } = await this.client.auth.signInWithPassword({ email, password });

            if (error) {
                throw error;
            }

            return data;
        } catch (err) {
            console.error("Sign in error:", err.message);
            return { error: err.message };
        }
    }

    async signOut() {
        try {
            const { error } = await this.client.auth.signOut();

            if (error) {
                throw error;
            }

            return { message: "Signed out successfully" };
        } catch (err) {
            console.error("Sign out error:", err.message);
            return { error: err.message };
        }
    }

    async getUserInfo() {
        try {
            const { data, error } = await this.client.auth.getUser();

            if (error) {
                throw error;
            }

            return data;
        } catch (err) {
            console.error("Get user info error:", err.message);
            return { error: err.message };
        }
    }
}

const authService = new AuthService();

export default authService;
