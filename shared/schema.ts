import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const quizResponses = pgTable("quiz_responses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  condition: text("condition").notNull(),
  severity: text("severity").notNull(),
  duration: text("duration").notNull(),
  treatments: jsonb("treatments").$type<string[]>().notNull().default([]),
  customDescription: text("custom_description"),
  userName: text("user_name"),
  userEmail: text("user_email"),
  emailConsent: jsonb("email_consent").$type<boolean>().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertQuizResponseSchema = createInsertSchema(quizResponses).omit({
  id: true,
  createdAt: true,
});

export type InsertQuizResponse = z.infer<typeof insertQuizResponseSchema>;
export type QuizResponse = typeof quizResponses.$inferSelect;

// Frontend-only types for quiz flow
export const conditionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  icon: z.string(),
  color: z.string(),
});

export const quizStateSchema = z.object({
  currentStep: z.number().min(1).max(4),
  selectedCondition: z.string().optional(),
  severity: z.enum(["mild", "moderate", "severe"]).optional(),
  duration: z.enum(["recent", "chronic", "longterm", "years"]).optional(),
  treatments: z.array(z.string()).default([]),
});

export type Condition = z.infer<typeof conditionSchema>;
export type QuizState = z.infer<typeof quizStateSchema>;
