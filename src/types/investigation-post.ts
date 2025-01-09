import { InvestigationCategory, InvestigationPost } from "./sanity"

export type InvestigationPostType = Omit<InvestigationPost, `categories`> & {
  categories: InvestigationCategory[]
}
export type InvestigationCategoryType = Omit<InvestigationCategory, `slug`> & {
    slug: string
  }