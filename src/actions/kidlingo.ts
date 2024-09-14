"use server";

import { createServerClient } from "@/lib/supabase";
import { KIDLINGO_DB } from "@/lib/schema";

export async function getKidlingoLanguages() {
  const supabase = createServerClient();

  const { data, error } = await supabase.from("kidlingo_languages").select("*");

  if (error) {
    throw error;
  }

  return data;
}

export async function getKidlingoLevels() {
  const supabase = createServerClient();

  const { data, error } = await supabase.from("kidlingo_levels").select("*");

  if (error) {
    throw error;
  }

  return data;
}

export async function getKidlingoTopics() {
  const supabase = createServerClient();

  const { data, error } = await supabase.from("kidlingo_topics").select("*");

  if (error) {
    throw error;
  }

  return data;
}

export async function getKidlingoContent(): Promise<KIDLINGO_DB[]> {
  const supabase = createServerClient();

  const { data, error } = await supabase.from("kidlingo_db").select("*");

  if (error) {
    console.error("Error fetching Kidlingo content:", error);
    throw error;
  }

  if (!data) {
    return [];
  }

  return data;
}
