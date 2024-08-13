const config={
    supabaseUrl: String(import.meta.env.VITE_SUPABASE_URL),
    supabaseProjectId: String(import.meta.env.VITE_SUPABASE_PROJECT_ID),
    supabaseCollectionId: String(import.meta.env.VITE_SUPABASE_COLLECTION_ID),
    supabaseBucketId: String(import.meta.env.VITE_SUPABASE_BUCKET_ID),
    supabaseKey: String(import.meta.env.VITE_SUPABASE_KEY)
}

export default config