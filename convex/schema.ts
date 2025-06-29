import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    category: v.string(),
    technologies: v.array(v.string()),
    imageUrl: v.optional(v.string()),
    completionDate: v.string(),
    client: v.optional(v.string()),
    featured: v.boolean(),
  }).index("by_category", ["category"])
    .index("by_featured", ["featured"]),
  
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
    status: v.string(), // "new", "read", "replied"
  }).index("by_status", ["status"]),
  
  skills: defineTable({
    name: v.string(),
    category: v.string(),
    proficiency: v.number(), // 1-100
    icon: v.optional(v.string()),
  }).index("by_category", ["category"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
