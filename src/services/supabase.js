import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tzgyloqdsjsdlppawcan.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6Z3lsb3Fkc2pzZGxwcGF3Y2FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwODQ4NDYsImV4cCI6MjA1NDY2MDg0Nn0.AMN06AUOUKwyRYDAvW3VPFtis1UZCDs3fkhCNfgnvbM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
