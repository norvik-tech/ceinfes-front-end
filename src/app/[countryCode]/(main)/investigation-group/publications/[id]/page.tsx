// app/publications/[id]/page.tsx
import { PublicationPage } from "@modules/blog/components/publication-details/PublicationPage"
import { client } from "@modules/blog/sanity/lib/client"
import { INVESTIGATION_POST_BY_ID_QUERY } from "@modules/blog/sanity/lib/queries"
import { InvestigationPostType } from "types/investigation-post"

const Publication = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id
  const post = await client.fetch(INVESTIGATION_POST_BY_ID_QUERY, {
    id,
  })

  return <PublicationPage post={post as InvestigationPostType} />
}

export default Publication
