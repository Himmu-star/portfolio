import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getAllSkills = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("skills").collect();
  },
});

export const getSkillsByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("skills")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .collect();
  },
});

export const addSkill = mutation({
  args: {
    name: v.string(),
    category: v.string(),
    proficiency: v.number(),
    icon: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("skills", args);
  },
});
