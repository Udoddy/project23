import { createClient } from '@supabase/supabase-js'

const supabaseUrl: any = process.env.NEXT_PUBLIC_SUPABASEURL
const supabaseAnonKey: any = process.env.NEXT_PUBLIC_SUPABASEANONKEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)